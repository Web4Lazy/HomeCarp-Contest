import React from 'react';

interface HighlightCardProps {
  icon: string;
  title: string;
  value: string;
  detail: string;
}

const HighlightCard: React.FC<HighlightCardProps> = ({ icon, title, value, detail }) => {
  return (
    <div className="glass-card p-6 transition-all duration-400 hover:-translate-y-1.5 hover:border-[rgba(0,255,68,0.4)]">
      <span className="text-xs uppercase text-[var(--text-muted)] tracking-wider">
        {icon} {title}
      </span>
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
