'use client';

import { OrderLevel, useOrderbookStore } from '@/store/orderbookStore';
import { Tabs, TabsList, TabsTrigger } from '@radix-ui/react-tabs';

import DepthChart from './DepthChart';
import ImbalanceIndicator from './ImbalanceIndicator';
import { SimulationFormValues } from './SimulationForm';
import { TabsContent } from '@/components/ui/tabs';
import TimingTabs from './TimingTabs';
import { simulateOrderImpact } from '@/lib/utils/simulationUtils';
// import { simulateMarketImpact } from '@/lib/utils/simulationUtils';
import { useState } from 'react';

interface OrderbookViewerProps {
  venue: 'OKX' | 'Bybit' | 'Deribit';
  symbol: string;
  simulatedOrder?: SimulationFormValues;
}

interface DepthDataPoint {
  price: number;
  cumulativeSize: number;
  side: 'bid' | 'ask';
}

export default function OrderbookViewer({
  venue,
  symbol,
  simulatedOrder,
}: OrderbookViewerProps) {
  const orderbook = useOrderbookStore((state) =>
    state.getOrderbook(venue, symbol),
  );

  if (!orderbook) {
    return (
      <div className="text-gray-400">
        Loading orderbook for {venue} {symbol}...
      </div>
    );
  }

  const { bids, asks } = orderbook;

  // const simulationResult = simulatedOrder
  //   ? simulateOrderImpact({ bids, asks }, simulatedOrder)
  //   : null;

  const simulateWithDelay = (delaySeconds: number) => {
    // Clone and simulate slight changes for demo
    const cloneLevels = (
      levels: OrderLevel[],
      priceShift: number,
    ): OrderLevel[] =>
      levels.map((level, i) => ({
        price: parseFloat((level.price * (1 + priceShift)).toFixed(2)),
        quantity: Math.max(
          level.quantity + Math.floor(Math.random() * 3 - 1),
          1,
        ),
      }));

    const shift = delaySeconds * 0.0002; // Adjust as needed
    const delayedBids = cloneLevels(bids, -shift);
    const delayedAsks = cloneLevels(asks, shift);

    return simulateOrderImpact(
      { bids: delayedBids, asks: delayedAsks },
      simulatedOrder!,
    );
  };

  const scenarios = [
    { label: 'Immediate', delay: 0 },
    { label: 'After 5s', delay: 5 },
    { label: 'After 10s', delay: 10 },
    { label: 'After 30s', delay: 30 },
  ];

  const scenarioResults = simulatedOrder
    ? scenarios.map((s) => ({
        ...s,
        result: simulateWithDelay(s.delay),
      }))
    : [];

  const { price, quantity, side, orderType } = simulatedOrder || {};

  const totalBidVolume = bids.reduce((acc, level) => acc + level.quantity, 0);
  const totalAskVolume = asks.reduce((acc, level) => acc + level.quantity, 0);
  const [selectedTiming, setSelectedTiming] = useState('Immediate');
  const isSimulatedLevel = (level: OrderLevel, idx: number, isBid: boolean) => {
    if (!simulatedOrder || !price || !quantity || orderType === 'Market')
      return false;

    if (side === 'Buy' && isBid) {
      return price >= level.price && idx === findInsertIndex(bids, price);
    }

    if (side === 'Sell' && !isBid) {
      return price <= level.price && idx === findInsertIndex(asks, price);
    }

    return false;
  };

  const findInsertIndex = (levels: OrderLevel[], price: number) => {
    for (let i = 0; i < levels.length; i++) {
      if (
        (levels === bids && price >= levels[i].price) ||
        (levels === asks && price <= levels[i].price)
      ) {
        return i;
      }
    }
    return levels.length;
  };

  const transformOrderbookToDepthChart = (
    bids: OrderLevel[],
    asks: OrderLevel[],
  ): DepthDataPoint[] => {
    const bidData: DepthDataPoint[] = [];
    const askData: DepthDataPoint[] = [];

    let cumulativeBid = 0;
    for (const level of bids) {
      cumulativeBid += level.quantity;
      bidData.push({
        price: level.price,
        cumulativeSize: cumulativeBid,
        side: 'bid',
      });
    }

    let cumulativeAsk = 0;
    for (const level of asks) {
      cumulativeAsk += level.quantity;
      askData.push({
        price: level.price,
        cumulativeSize: cumulativeAsk,
        side: 'ask',
      });
    }

    return [...bidData, ...askData];
  };

  const transformedOrderbookData = transformOrderbookToDepthChart(
    bids.slice(0, 15),
    asks.slice(0, 15),
  );

  return (
    <div className="flex flex-col gap-6 p-2 bg-gray-800 text-gray-200 rounded-lg shadow-lg  max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Bids */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4 shadow">
          <h3 className="text-green-400 font-semibold text-lg mb-2">📘 Bids</h3>
          <table className="w-full text-sm text-right">
            <thead className="text-gray-400 border-b border-gray-700">
              <tr>
                <th className="pb-1">Price</th>
                <th className="pb-1">Quantity</th>
              </tr>
            </thead>
            <tbody className="text-green-300">
              {bids.slice(0, 15).map((level, idx) => {
                const isSim = isSimulatedLevel(level, idx, true);
                return (
                  <tr
                    key={level.price}
                    className={`transition ${
                      isSim
                        ? 'bg-green-700/30 font-semibold'
                        : 'hover:bg-green-800/10'
                    }`}
                  >
                    <td className="py-1">{level.price.toFixed(2)}</td>
                    <td className="py-1">{level.quantity}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Asks */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4 shadow">
          <h3 className="text-red-400 font-semibold text-lg mb-2">📕 Asks</h3>
          <table className="w-full text-sm text-right">
            <thead className="text-gray-400 border-b border-gray-700">
              <tr>
                <th className="pb-1">Price</th>
                <th className="pb-1">Quantity</th>
              </tr>
            </thead>
            <tbody className="text-red-300">
              {asks.slice(0, 15).map((level, idx) => {
                const isSim = isSimulatedLevel(level, idx, false);
                return (
                  <tr
                    key={level.price}
                    className={`transition ${
                      isSim
                        ? 'bg-red-700/30 font-semibold'
                        : 'hover:bg-red-800/10'
                    }`}
                  >
                    <td className="py-1">{level.price.toFixed(2)}</td>
                    <td className="py-1">{level.quantity}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <DepthChart depthData={transformedOrderbookData} />
      </div>

      <div>
        <ImbalanceIndicator
          totalBids={totalBidVolume}
          totalAsks={totalAskVolume}
        />
      </div>
      {scenarioResults.length > 0 && (
        <div className="mt-6">
          <Tabs defaultValue="Immediate" className="w-full">
            <TabsList className="flex gap-2 bg-gray-800 p-1 rounded">
              {scenarioResults.map((s) => (
                <TabsTrigger key={s.label} value={s.label}>
                  {s.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {scenarioResults.map(({ label, result }) => (
              <TabsContent key={label} value={label}>
                <div className="mt-4 bg-gray-900 border border-gray-700 rounded-lg p-4 shadow space-y-2 text-sm text-gray-300">
                  <div className="flex justify-between">
                    <span>🧮 Filled Quantity</span>
                    <span>{result.filledQuantity.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>💰 Avg Fill Price</span>
                    <span>{result.averageFillPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>📉 Slippage</span>
                    <span
                      className={
                        result.slippage > 1
                          ? 'text-yellow-400'
                          : 'text-green-400'
                      }
                    >
                      {result.slippage.toFixed(2)}%
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>📊 Market Impact</span>
                    <span>{(result.marketImpact * 100).toFixed(2)}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>📦 Fill %</span>
                    <span>{result.fillPercentage.toFixed(2)}%</span>
                  </div>
                </div>
                {result.filledQuantity === 0 && orderType === 'Limit' && (
                  <p className="text-red-400 mt-2">
                    ❗ Your limit price is too far from the current book — no
                    fill.
                  </p>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      )}

      <TimingTabs active={selectedTiming} onSelect={setSelectedTiming} />
    </div>
  );
}
