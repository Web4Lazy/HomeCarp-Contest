import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';
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
  
  // Chart dimensions
  const chartSize = 300;
  const outerRadius = 140;
  const innerRadius = 90;
  const centerX = chartSize / 2;
  const centerY = chartSize / 2;
  
  // Inner circle should match innerRadius exactly
  const innerCircleSize = innerRadius * 2;

  return (
    <div className="chart-container relative">
      <h3 className="text-white text-base font-semibold mb-4 text-center">
        Distribuzione Tipologie
      </h3>
      <div className="relative flex flex-col items-center">
        {/* Chart wrapper with fixed aspect ratio */}
        <div className="relative" style={{ width: chartSize, height: chartSize }}>
          <PieChart width={chartSize} height={chartSize}>
            <Pie
              data={chartData}
              cx={centerX}
              cy={centerY}
              innerRadius={innerRadius}
              outerRadius={outerRadius}
              paddingAngle={2}
              dataKey="value"
              stroke="none"
            >
              {chartData.map((_, index) => (
                <Cell key={`cell-${index}`} fill={colors[index]} />
              ))}
            </Pie>
          </PieChart>
          
          {/* Black center circle - positioned exactly at center, matching innerRadius */}
          <div 
            className="absolute pointer-events-none overflow-hidden"
            style={{ 
              width: innerCircleSize,
              height: innerCircleSize,
              borderRadius: '50%',
              background: '#030503',
              boxShadow: 'inset 0 0 40px rgba(0, 0, 0, 0.9)',
              left: centerX - innerRadius,
              top: centerY - innerRadius,
            }}
          >
            {/* Image fills the entire inner circle */}
            <img
              src="https://i.postimg.cc/jdWcJWn7/MAIS.png"
              alt=""
              className="w-full h-full object-cover"
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
