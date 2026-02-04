import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';
import type { ChartData } from '@/data/dashboardData';

interface TypeChartProps {
  data: ChartData;
}

const TypeChart: React.FC<TypeChartProps> = ({ data }) => {
  const chartData = data.labels.map((label, index) => ({
    name: label,
    value: data.data[index]
  }));

  const colors = ['#00FF66', '#00CC44', '#009922'];

  return (
    <div className="chart-container relative">
      <h3 className="text-white text-base font-semibold mb-4 text-center">
        Distribuzione Tipologie
      </h3>
      <div className="h-[380px] relative">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="45%"
              innerRadius={90}
              outerRadius={140}
              paddingAngle={2}
              dataKey="value"
              stroke="none"
            >
              {chartData.map((_, index) => (
                <Cell key={`cell-${index}`} fill={colors[index]} />
              ))}
            </Pie>
            <Legend 
              verticalAlign="bottom" 
              height={36}
              formatter={(value) => <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '12px' }}>{value}</span>}
            />
          </PieChart>
        </ResponsiveContainer>
        
        {/* Black center circle with centered image */}
        <div 
          className="absolute left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2 pointer-events-none flex items-center justify-center"
          style={{ 
            width: '170px',
            height: '170px',
            borderRadius: '50%',
            background: '#030503',
            boxShadow: 'inset 0 0 30px rgba(0, 0, 0, 0.8)'
          }}
        >
          <img
            src="https://i.postimg.cc/jdWcJWn7/MAIS.png"
            alt=""
            className="w-[100px] h-[100px] rounded-full object-cover"
            style={{
              boxShadow: '0 0 25px rgba(0, 255, 68, 0.4)'
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default TypeChart;
