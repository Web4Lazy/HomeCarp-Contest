import React from 'react';
import { PieChart, Pie, Cell, Legend } from 'recharts';
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
      <div className="relative flex flex-col items-center">
        {/* Chart wrapper with fixed aspect ratio */}
        <div className="relative" style={{ width: '300px', height: '300px' }}>
          <PieChart width={300} height={300}>
            <Pie
              data={chartData}
              cx={150}
              cy={150}
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
          </PieChart>
          
          {/* Black center circle with centered image */}
          <div 
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none flex items-center justify-center"
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
        
        {/* Legend */}
        <div className="flex gap-4 mt-4 justify-center flex-wrap">
          {chartData.map((item, index) => (
            <div key={item.name} className="flex items-center gap-2">
              <div 
                className="w-3 h-3 rounded-sm"
                style={{ backgroundColor: colors[index] }}
              />
              <span className="text-xs text-white/70">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TypeChart;
