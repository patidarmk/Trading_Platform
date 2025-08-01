import React from 'react';

interface FillLevel {
  price: number;
  size: number;
}

interface SimulatedOrderMetricsProps {
  orderSide: 'buy' | 'sell';
  quantity: number;
  levels: FillLevel[];
}

const SimulatedOrderMetrics: React.FC<SimulatedOrderMetricsProps> = ({
  orderSide,
  quantity,
  levels,
}) => {
  let remainingQty = quantity;
  let totalCost = 0;
  let filledQty = 0;
  let priceImpact = 0;

  for (const level of levels) {
    const fillSize = Math.min(remainingQty, level.size);
    totalCost += fillSize * level.price;
    filledQty += fillSize;
    remainingQty -= fillSize;
    if (remainingQty <= 0) break;
  }

  const avgFillPrice = filledQty > 0 ? totalCost / filledQty : 0;
  const entryPrice = levels.length > 0 ? levels[0].price : 0;
  priceImpact =
    orderSide === 'buy'
      ? ((avgFillPrice - entryPrice) / entryPrice) * 100
      : ((entryPrice - avgFillPrice) / entryPrice) * 100;

  const fillPercentage = (filledQty / quantity) * 100;
  const slippageWarning = priceImpact > 1 || fillPercentage < 100;

  return (
    <div className="bg-white rounded-xl shadow-md p-4 w-full max-w-xl mx-auto">
      <h3 className="text-lg font-semibold mb-3">Simulated Order Metrics</h3>
      <ul className="text-sm space-y-1">
        <li>
          <strong>Order Side:</strong> {orderSide.toUpperCase()}
        </li>
        <li>
          <strong>Requested Quantity:</strong> {quantity}
        </li>
        <li>
          <strong>Filled Quantity:</strong> {filledQty}
        </li>
        <li>
          <strong>Average Fill Price:</strong> {avgFillPrice.toFixed(2)}
        </li>
        <li>
          <strong>Market Impact:</strong> {priceImpact.toFixed(2)}%
        </li>
        <li>
          <strong>Fill Percentage:</strong> {fillPercentage.toFixed(1)}%
        </li>
        {slippageWarning && (
          <li className="text-red-500 font-semibold">
            ⚠️ High Slippage Risk Detected
          </li>
        )}
      </ul>
    </div>
  );
};

export default SimulatedOrderMetrics;
