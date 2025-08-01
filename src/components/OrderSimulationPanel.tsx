'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { SimulationFormValues } from './SimulationForm';
import { simulateOrderImpact } from '@/lib/utils/simulationUtils';
// import { simulateOrderImpact } from '@/lib/simulationUtils';
import { useOrderbookStore } from '@/store/orderbookStore';

interface OrderSimulationPanelProps {
  venue: 'Bybit' | 'OKX' | 'Deribit';
  symbol: string;
  simulatedOrder: SimulationFormValues;
}

export default function OrderSimulationPanel({
  venue,
  symbol,
  simulatedOrder,
}: OrderSimulationPanelProps) {
  const orderbook = useOrderbookStore((s) => s.getOrderbook(venue, symbol));

  if (!orderbook || !simulatedOrder) return null;

  // Dummy snapshots — in a real app, this would come from past polling or historical data
  const timingScenarios = {
    immediate: orderbook,
    after5s: orderbook,
    after10s: orderbook,
    after30s: orderbook,
  };

  return (
    <div className="mt-4 bg-gray-900 border border-gray-700 rounded-lg p-4 shadow">
      <h3 className="text-xl text-white font-semibold mb-4">
        🔍 Simulation Result Panel
      </h3>

      <Tabs defaultValue="immediate" className="w-full">
        <TabsList className="bg-gray-800 text-white">
          <TabsTrigger value="immediate">Immediate</TabsTrigger>
          <TabsTrigger value="after5s">5s Later</TabsTrigger>
          <TabsTrigger value="after10s">10s Later</TabsTrigger>
          <TabsTrigger value="after30s">30s Later</TabsTrigger>
        </TabsList>

        {Object.entries(timingScenarios).map(([key, snapshot]) => {
          const result = simulateOrderImpact(snapshot, simulatedOrder);

          return (
            <TabsContent key={key} value={key}>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4 text-sm text-white">
                <div className="bg-gray-800 p-3 rounded shadow">
                  <div className="text-gray-400 mb-1">Filled Quantity</div>
                  <div className="text-green-300 font-bold">
                    {result.filledQuantity.toFixed(2)}
                  </div>
                </div>
                <div className="bg-gray-800 p-3 rounded shadow">
                  <div className="text-gray-400 mb-1">Avg Fill Price</div>
                  <div className="text-blue-300 font-bold">
                    {result.averageFillPrice.toFixed(2)}
                  </div>
                </div>
                <div className="bg-gray-800 p-3 rounded shadow">
                  <div className="text-gray-400 mb-1">Slippage (%)</div>
                  <div className="text-yellow-400 font-bold">
                    {result.slippage.toFixed(2)}%
                  </div>
                </div>
                <div className="bg-gray-800 p-3 rounded shadow">
                  <div className="text-gray-400 mb-1">Market Impact</div>
                  <div className="text-pink-300 font-bold">
                    {(result.marketImpact * 100).toFixed(2)}%
                  </div>
                </div>
                <div className="bg-gray-800 p-3 rounded shadow">
                  <div className="text-gray-400 mb-1">Fill %</div>
                  <div className="text-purple-300 font-bold">
                    {result.fillPercentage.toFixed(2)}%
                  </div>
                </div>
              </div>
            </TabsContent>
          );
        })}
      </Tabs>
    </div>
  );
}
