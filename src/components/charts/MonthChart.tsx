import React from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Area, AreaChart, Tooltip } from 'recharts';
import type { ChartData } from '@/data/dashboardData';

interface MonthChartProps {
  data: ChartData;
}

const MonthChart: React.FC<MonthChartProps> = ({ data }) => {
  const chartData = data.labels.map((label, index) => ({
    name: label,
    value: data.data[index]
  }));

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div 
          className="px-3 py-2 rounded-lg"
          style={{
            background: 'rgba(5, 15, 5, 0.9)',
            border: '1px solid rgba(0, 255, 68, 0.3)'
          }}
        >
          <p className="text-white text-sm font-semibold">{label}</p>
          <p className="green-text text-sm">{payload[0].value} catture</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="chart-container">
      <h3 className="text-white text-base font-semibold mb-4 text-center">
        Trend Mensile
      </h3>
      <div className="h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData} margin={{ top: 10, right: 20, bottom: 10, left: 20 }}>
            <defs>
              <linearGradient id="monthGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#00FF66" stopOpacity={0.4} />
                <stop offset="100%" stopColor="#00FF66" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis 
              dataKey="name" 
              tick={{ fill: 'rgba(255,255,255,0.7)', fontSize: 10 }}
              axisLine={false}
              tickLine={false}
              interval={0}
            />
            <YAxis hide />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#00FF44"
              strokeWidth={3}
              fill="url(#monthGradient)"
              dot={{ fill: '#00FF66', strokeWidth: 0, r: 4 }}
              activeDot={{ 
                fill: '#00FF66', 
                strokeWidth: 0, 
                r: 6,
                style: { filter: 'drop-shadow(0 0 8px #00FF66)' }
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MonthChart;
