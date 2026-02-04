import React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, LabelList } from 'recharts';
import { Target, Fish } from 'lucide-react';
import type { ChartData, BrandSpotlight } from '@/data/dashboardData';

interface BaitChartProps {
  data: ChartData;
  brandSpotlight: BrandSpotlight;
}

const BaitChart: React.FC<BaitChartProps> = ({ data, brandSpotlight }) => {
  const chartData = data.labels.map((label, index) => ({
    name: label,
    value: data.data[index]
  }));

  const colors = ['#00FF66', '#00EE55', '#00DD44', '#00CC33', '#00BB22'];

  return (
    <div className="chart-container">
      <h3 className="text-white text-base font-semibold mb-4 text-center">
        Esche Più Usate
      </h3>
      <div className="h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData} layout="vertical" margin={{ left: 20, right: 50 }}>
            <XAxis type="number" hide />
            <YAxis 
              type="category" 
              dataKey="name" 
              tick={{ fill: '#00FF66', fontSize: 12, fontWeight: 500 }}
              width={110}
              axisLine={false}
              tickLine={false}
            />
            <Bar dataKey="value" radius={[0, 8, 8, 0]} barSize={36}>
              {chartData.map((_, index) => (
                <Cell key={`cell-${index}`} fill={colors[index]} stroke="none" />
              ))}
              <LabelList 
                dataKey="value" 
                position="right" 
                fill="#00FF66"
                fontSize={13}
                fontWeight={600}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Brand Spotlight */}
      <div 
        className="mt-6 p-4 rounded-xl"
        style={{
          background: 'rgba(0, 255, 68, 0.05)',
          border: '1px solid rgba(0, 255, 68, 0.15)'
        }}
      >
        <span className="text-xs uppercase font-semibold tracking-wider flex items-center gap-1.5" style={{ color: '#00FF66' }}>
          <span 
            className="inline-flex"
            style={{
              filter: 'drop-shadow(0 0 12px rgba(0, 255, 102, 0.8)) drop-shadow(0 0 25px rgba(0, 255, 102, 0.5))'
            }}
          >
            <Target size={14} strokeWidth={1.5} style={{ color: '#00FF66' }} />
          </span>
          Brand con più catture
        </span>
        <div className="flex items-center gap-4 mt-3">
          <div 
            className="w-[70px] h-[70px] rounded-lg flex items-center justify-center"
            style={{
              background: 'rgba(0, 255, 68, 0.1)',
              border: '1px solid rgba(0, 255, 68, 0.3)'
            }}
          >
            <span 
              className="inline-flex"
              style={{
                filter: 'drop-shadow(0 0 12px rgba(0, 255, 102, 0.8)) drop-shadow(0 0 25px rgba(0, 255, 102, 0.5))'
              }}
            >
              <Fish size={32} strokeWidth={1.5} style={{ color: '#00FF66' }} />
            </span>
          </div>
          <div>
            <div className="text-lg font-bold text-white">{brandSpotlight.name}</div>
            <div className="text-sm" style={{ color: '#00FF66' }}>
              {brandSpotlight.catches.toLocaleString()} catture questo mese
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BaitChart;
