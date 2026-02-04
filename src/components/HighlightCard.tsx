import React from 'react';
import { Trophy, TrendingUp, Star } from 'lucide-react';
import type { LucideProps } from 'lucide-react';

type IconComponent = React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;

interface HighlightCardProps {
  icon: IconComponent;
  title: string;
  value: string;
  detail: string;
}

const HighlightCard: React.FC<HighlightCardProps> = ({ icon: Icon, title, value, detail }) => {
  return (
    <div className="glass-card p-6 transition-all duration-400 hover:-translate-y-1.5 hover:border-[rgba(0,255,68,0.4)]">
      <div className="flex items-center gap-2 mb-2">
        <div 
          style={{
            filter: 'drop-shadow(0 0 12px rgba(0, 255, 102, 0.8)) drop-shadow(0 0 25px rgba(0, 255, 102, 0.5))'
          }}
        >
          <Icon 
            size={20} 
            strokeWidth={1.5}
            style={{ color: '#00FF66' }}
          />
        </div>
        <span className="text-xs uppercase text-[var(--text-muted)] tracking-wider">
          {title}
        </span>
      </div>
      <div className="text-xl md:text-[1.8rem] font-bold green-text mt-2">
        {value}
      </div>
      <p className="text-sm text-[var(--text-secondary)] mt-1">
        {detail}
      </p>
    </div>
  );
};

export default HighlightCard;

// Export icons for convenience
export { Trophy, TrendingUp, Star };
