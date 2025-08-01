'use client';

import SimulationForm, {
  SimulationFormValues,
} from '@/components/SimulationForm';

import OrderbookViewer from '@/components/OrderbookViewer';
import TimingTabs from '@/components/TimingTabs';
// import OrderbookViewer from './OrderbookViewer';
import { useState } from 'react';

// import SimulationForm, { SimulationFormValues } from './SimulationForm';

export default function OrderSimulationPage() {
  const [simulatedOrder, setSimulatedOrder] = useState<
    SimulationFormValues | undefined
  >(undefined);

  // Called when form submits
  function handleSimSubmit(data: SimulationFormValues) {
    setSimulatedOrder(data);
  }

  const [selectedTiming, setSelectedTiming] = useState('Immediate');

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-8">
      <h1 className="text-2xl font-bold mb-4">Order Simulation</h1>

      {/* Form to simulate order */}
      <SimulationForm onSubmitSim={handleSimSubmit} />

      {/* Orderbook visualization */}
      {simulatedOrder && (
        <OrderbookViewer
          venue={simulatedOrder.venue}
          symbol={simulatedOrder.symbol}
          simulatedOrder={simulatedOrder}
        />
      )}
      <TimingTabs active={selectedTiming} onSelect={setSelectedTiming} />
    </div>
  );
}
