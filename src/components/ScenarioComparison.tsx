import React, { useState } from 'react';

import SimulatedOrderMetrics from './SimulatedOrderMetrics';

interface FillLevel {
  price: number;
  size: number;
}

interface Scenario {
  label: string;
  delay: number; // in seconds
  levels: FillLevel[];
}

interface ScenarioComparisonProps {
  scenarios: Scenario[];
  orderSide: 'buy' | 'sell';
  quantity: number;
}

const ScenarioComparison: React.FC<ScenarioComparisonProps> = ({
  scenarios,
  orderSide,
  quantity,
}) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Timing Scenario Comparison</h2>

      <div className="flex space-x-2 mb-4">
        {scenarios.map((scenario, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
              activeTab === index
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {scenario.label}
          </button>
        ))}
      </div>

      <SimulatedOrderMetrics
        orderSide={orderSide}
        quantity={quantity}
        levels={scenarios[activeTab].levels}
      />
    </div>
  );
};

export default ScenarioComparison;
