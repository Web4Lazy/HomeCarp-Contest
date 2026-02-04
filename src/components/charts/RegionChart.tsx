import React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, LabelList, Tooltip } from 'recharts';
import type { ChartData } from '@/data/dashboardData';

interface RegionChartProps {
  data: ChartData;
}

const RegionChart: React.FC<RegionChartProps> = ({ data }) => {
  const chartData = data.labels.map((label, index) => ({
    name: label,
    value: data.data[index]
  }));

  // Generate 10 shades of green from lightest to darkest
  const colors = [
    '#00FF66', '#00EE5C', '#00DD52', '#00CC48', '#00BB3E',
    '#00AA34', '#00992A', '#008820', '#007716', '#00660C'
  ];

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div 
          className="px-3 py-2 rounded-lg"
          style={{
            background: 'rgba(5, 15, 5, 0.95)',
            border: '1px solid rgba(0, 255, 68, 0.5)',
            boxShadow: '0 4px 20px rgba(0, 255, 68, 0.2)'
          }}
        >
          <p style={{ color: '#00FF66' }} className="text-sm font-semibold">{label}</p>
          <p style={{ color: '#33FF88' }} className="text-sm">{payload[0].value.toLocaleString()} pescatori</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="chart-container">
      <h3 className="text-white text-base font-semibold mb-4 text-center">
        🗺️ Distribuzione Geografica
      </h3>
      <div className="h-[350px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData} layout="vertical" margin={{ left: 10, right: 50 }}>
            <XAxis type="number" hide />
            <YAxis 
              type="category" 
              dataKey="name" 
              tick={{ fill: '#00FF66', fontSize: 11 }}
              width={110}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip 
              content={<CustomTooltip />} 
              cursor={{ fill: 'rgba(0, 255, 68, 0.15)' }}
            />
            <Bar dataKey="value" radius={[0, 8, 8, 0]} barSize={22}>
              {chartData.map((_, index) => (
                <Cell key={`cell-${index}`} fill={colors[index]} stroke="none" />
              ))}
              <LabelList 
                dataKey="value" 
                position="right" 
                fill="#00FF66"
                fontSize={11}
                formatter={(value: number) => value.toLocaleString()}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RegionChart;
