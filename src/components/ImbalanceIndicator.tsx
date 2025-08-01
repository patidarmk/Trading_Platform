import React from 'react';

interface ImbalanceIndicatorProps {
  totalBids: number;
  totalAsks: number;
}

const ImbalanceIndicator: React.FC<ImbalanceIndicatorProps> = ({
  totalBids,
  totalAsks,
}) => {
  const totalVolume = totalBids + totalAsks;
  const bidPercentage = (totalBids / totalVolume) * 100;
  const askPercentage = 100 - bidPercentage;

  return (
    <div className="w-full max-w-xl mx-auto p-4">
      <h2 className="text-lg font-semibold mb-2">Order Book Imbalance</h2>
      <div className="flex h-6 w-full rounded overflow-hidden shadow-md border border-gray-300">
        <div
          className="bg-green-500 text-white text-xs flex items-center justify-end pr-2"
          style={{ width: `${bidPercentage}%` }}
        >
          {bidPercentage.toFixed(1)}%
        </div>
        <div
          className="bg-red-500 text-white text-xs flex items-center justify-start pl-2"
          style={{ width: `${askPercentage}%` }}
        >
          {askPercentage.toFixed(1)}%
        </div>
      </div>
    </div>
  );
};

export default ImbalanceIndicator;
