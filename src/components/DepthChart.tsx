import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import React from 'react';

interface DepthDataPoint {
  price: number;
  cumulativeSize: number;
  side: 'bid' | 'ask';
}

interface DepthChartProps {
  depthData: DepthDataPoint[];
}

const DepthChart: React.FC<DepthChartProps> = ({ depthData }) => {
  const bids = depthData.filter((d) => d.side === 'bid');
  const asks = depthData.filter((d) => d.side === 'ask');

  return (
    <div className="w-full h-64 p-4">
      <h2 className="text-xl font-semibold mb-2">Market Depth Chart</h2>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart>
          <XAxis
            dataKey="price"
            type="number"
            domain={['auto', 'auto']}
            tickFormatter={(price) => price.toFixed(2)}
          />
          <YAxis dataKey="cumulativeSize" tickFormatter={(size) => `${size}`} />
          <Tooltip
            formatter={(value: any, name: any) => [
              value,
              name === 'cumulativeSize' ? 'Size' : name,
            ]}
          />
          <Area
            type="stepAfter"
            dataKey="cumulativeSize"
            data={bids}
            stroke="#22c55e"
            fill="#22c55e40"
            name="Bids"
          />
          <Area
            type="stepAfter"
            dataKey="cumulativeSize"
            data={asks}
            stroke="#ef4444"
            fill="#ef444440"
            name="Asks"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DepthChart;
