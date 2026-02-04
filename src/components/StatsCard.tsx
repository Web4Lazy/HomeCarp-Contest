import React from 'react';
import { useAnimatedNumber } from '@/hooks/useAnimatedNumber';

interface StatsCardProps {
  icon: string;
  value: number;
  label: string;
  delay?: number;
}

const StatsCard: React.FC<StatsCardProps> = ({ icon, value, label, delay = 0 }) => {
  const animatedValue = useAnimatedNumber(value);
  
  return (
    <div 
      className="glass-card p-6 md:p-10 text-center cursor-pointer animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="text-3xl md:text-[2.5rem] mb-2">{icon}</div>
      <div 
        className="text-2xl md:text-[3rem] font-black green-text green-text-shadow"
      >
        {animatedValue.toLocaleString()}
      </div>
      <div className="text-[0.65rem] md:text-[0.85rem] uppercase tracking-[1px] text-[var(--text-muted)] mt-2">
        {label}
      </div>
    </div>
  );
};

export default StatsCard;
