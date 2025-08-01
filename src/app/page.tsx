'use client';

import SimulationForm, {
  SimulationFormValues,
} from '@/components/SimulationForm';
import {
  connectToBybit,
  disconnectFromBybit,
} from '@/lib/orderbook/bybitService';
import {
  connectToDeribit,
  disconnectFromDeribit,
} from '@/lib/orderbook/deribitService';
import { connectToOKX, disconnectFromOKX } from '@/lib/orderbook/okxService';
import { useEffect, useState } from 'react';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import OrderbookViewer from '@/components/OrderbookViewer';
import { useOrderbookStore } from '@/store/orderbookStore';

const symbols = {
  OKX: 'BTC-USDT',
  Bybit: 'BTCUSDT',
  Deribit: 'BTC-PERPETUAL',
} as const;

export default function DashboardPage() {
  const [venue, setVenue] = useState<'OKX' | 'Bybit' | 'Deribit'>('OKX');
  const [simulatedOrder, setSimulatedOrder] = useState<SimulationFormValues>();
  const symbol = symbols[venue];
  const orderbook = useOrderbookStore((s) => s.data[venue]?.[symbol]);

  useEffect(() => {
    if (venue === 'OKX') connectToOKX(symbol);
    if (venue === 'Bybit') connectToBybit(symbol);
    if (venue === 'Deribit') connectToDeribit(symbol);

    return () => {
      if (venue === 'OKX') disconnectFromOKX(symbol);
      if (venue === 'Bybit') disconnectFromBybit(symbol);
      if (venue === 'Deribit') disconnectFromDeribit(symbol);
    };
  }, [venue, symbol]);

  const handleSubmit = (data: SimulationFormValues) => {
    setVenue(data.venue);
    setSimulatedOrder(data);
  };

  return (
    <main className="bg-gray-900 min-h-screen text-white p-6">
      <div className="max-w-[100vw] mx-auto space-y-6">
        {/* Header */}
        <header className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold"> Trading Dashboard</h1>
        <Select value={venue} onValueChange={(value) => setVenue(value as 'OKX' | 'Bybit' | 'Deribit')}>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Select venue" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="OKX">OKX</SelectItem>
    <SelectItem value="Bybit">Bybit</SelectItem>
    <SelectItem value="Deribit">Deribit</SelectItem>
  </SelectContent>
</Select>
        </header>

        {/* 3-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-[1.3fr_2.5fr_2fr] gap-4">
          {/* Left Column - Simulation */}
          <section className="bg-gray-800 rounded-lg p-4 shadow">
            <h2 className="text-xl font-semibold  mb-4">
               Simulate Order Placement
            </h2>
            <SimulationForm onSubmitSim={handleSubmit} />
          </section>

          {/* Middle Column - Live Orderbook */}
          <section className="bg-gray-800 rounded-lg p-4 shadow max-h-[85vh] overflow-y-auto">
            <h2 className="text-xl font-semibold  mb-4">
               Orderbook ({symbol})
            </h2>
            {/* <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <h3 className="text-green-300 mb-2">Bids</h3>
                <div className="space-y-1">
                  {orderbook?.bids?.map((level, i) => (
                    <div
                      key={i}
                      className="grid grid-cols-3 text-xs text-green-400"
                    >
                      <div>{level.price.toFixed(2)}</div>
                      <div>{level.quantity.toFixed(3)}</div>
                      <div>{level.total?.toFixed(3) ?? '-'}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-red-300 mb-2">Asks</h3>
                <div className="space-y-1">
                  {orderbook?.asks?.map((level, i) => (
                    <div
                      key={i}
                      className="grid grid-cols-3 text-xs text-red-400"
                    >
                      <div>{level.price.toFixed(2)}</div>
                      <div>{level.quantity.toFixed(3)}</div>
                      <div>{level.total?.toFixed(3) ?? '-'}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div> */}
            <div className="grid grid-cols-2 gap-6 text-sm">
  {/* Bids */}
  <div>
    <h3 className="text-green-400 font-semibold mb-2">Bids</h3>
    <div className="grid grid-cols-3 text-xs text-muted-foreground mb-1 px-1 font-medium">
      <div>Price</div>
      <div>Amount</div>
      <div>Total</div>
    </div>
    <div className="space-y-1">
      {orderbook?.bids?.map((level, i) => (
        <div
          key={i}
          className="grid grid-cols-3 text-xs text-green-400 px-1"
        >
          <div>{level.price.toFixed(2)}</div>
          <div>{level.quantity.toFixed(3)}</div>
          <div>{level.total?.toFixed(3) ?? '-'}</div>
        </div>
      ))}
    </div>
  </div>

  {/* Asks */}
  <div>
    <h3 className="text-red-400 font-semibold mb-2">Asks</h3>
    <div className="grid grid-cols-3 text-xs text-muted-foreground mb-1 px-1 font-medium">
      <div>Price</div>
      <div>Amount</div>
      <div>Total</div>
    </div>
    <div className="space-y-1">
      {orderbook?.asks?.map((level, i) => (
        <div
          key={i}
          className="grid grid-cols-3 text-xs text-red-400 px-1"
        >
          <div>{level.price.toFixed(2)}</div>
          <div>{level.quantity.toFixed(3)}</div>
          <div>{level.total?.toFixed(3) ?? '-'}</div>
        </div>
      ))}
    </div>
  </div>
</div>

          </section>

          {/* Right Column - Simulation Output */}
          <section className="bg-gray-800 rounded-lg p-4 shadow overflow-y-auto max-h-[85vh]">
            <h2 className="text-xl font-semibold  mb-4">
               Market Depth & Simulation Details
            </h2>
            {simulatedOrder ? (
              <OrderbookViewer
                venue={simulatedOrder.venue}
                symbol={simulatedOrder.symbol}
                simulatedOrder={simulatedOrder}
              />
            ) : (
              <div className="text-gray-400">
                Submit an order to view simulation results.
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}
