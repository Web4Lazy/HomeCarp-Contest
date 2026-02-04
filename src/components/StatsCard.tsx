import React from 'react';
import { useAnimatedNumber } from '@/hooks/useAnimatedNumber';
import { Users, Zap, Sparkles, Fish, LucideIcon } from 'lucide-react';

interface StatsCardProps {
  icon: LucideIcon;
  value: number;
  label: string;
  delay?: number;
}

const StatsCard: React.FC<StatsCardProps> = ({ icon: Icon, value, label, delay = 0 }) => {
  const animatedValue = useAnimatedNumber(value);
  
  return (
    <div 
      className="glass-card p-6 md:p-10 text-center cursor-pointer animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div 
        className="flex justify-center mb-3"
        style={{
          filter: 'drop-shadow(0 0 12px rgba(0, 255, 102, 0.8)) drop-shadow(0 0 25px rgba(0, 255, 102, 0.5))'
        }}
      >
        <Icon 
          size={40} 
          strokeWidth={1.5}
          className="md:w-12 md:h-12"
          style={{ color: '#00FF66' }}
        />
      </div>
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

// Export icon mappings for convenience
export { Users, Zap, Sparkles, Fish };
