import React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, LabelList } from 'recharts';
import type { ChartData } from '@/data/dashboardData';

interface TimeChartProps {
  data: ChartData;
}

const TimeChart: React.FC<TimeChartProps> = ({ data }) => {
  const chartData = data.labels.map((label, index) => ({
    name: label,
    value: data.data[index]
  }));

  return (
    <div className="chart-container">
      <h3 className="text-white text-base font-semibold mb-4 text-center">
        Fasce Orarie Produttive
      </h3>
      <div className="h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
            <XAxis 
              dataKey="name" 
              tick={{ fill: '#00FF66', fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis hide />
            <defs>
              <linearGradient id="timeGradient" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stopColor="#00AA33" />
                <stop offset="100%" stopColor="#00FF66" />
              </linearGradient>
            </defs>
            <Bar dataKey="value" radius={[8, 8, 0, 0]} barSize={50}>
              {chartData.map((_, index) => (
                <Cell key={`cell-${index}`} fill="url(#timeGradient)" stroke="none" />
              ))}
              <LabelList 
                dataKey="value" 
                position="top" 
                fill="#00FF66"
                fontSize={12}
                fontWeight={600}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TimeChart;
