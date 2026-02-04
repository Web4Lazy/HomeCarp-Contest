import React from 'react';
import { Trophy, Medal } from 'lucide-react';
import type { Prize } from '@/data/dashboardData';

interface PrizeSectionProps {
  prize: Prize;
}

const PrizeSection: React.FC<PrizeSectionProps> = ({ prize }) => {
  const neonStyle = {
    filter: 'drop-shadow(0 0 12px rgba(0, 255, 102, 0.8)) drop-shadow(0 0 25px rgba(0, 255, 102, 0.5))'
  };

  const medalColors = [
    { label: '1° Classificato', color: '#FFD700', glow: 'drop-shadow(0 0 10px rgba(255, 215, 0, 0.8)) drop-shadow(0 0 20px rgba(255, 215, 0, 0.5))' },
    { label: '2° Classificato', color: '#C0C0C0', glow: 'drop-shadow(0 0 10px rgba(192, 192, 192, 0.8)) drop-shadow(0 0 20px rgba(192, 192, 192, 0.5))' },
    { label: '3° Classificato', color: '#CD7F32', glow: 'drop-shadow(0 0 10px rgba(205, 127, 50, 0.8)) drop-shadow(0 0 20px rgba(205, 127, 50, 0.5))' }
  ];

  return (
    <section id="prize-section" className="prize-container my-8 md:my-12">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-6 md:gap-12 items-center">
        {/* Prize Image */}
        <div className="flex justify-center md:justify-start">
          <img
            src={prize.image}
            alt="Prize"
            className="max-w-[280px] md:max-w-[350px] w-full rounded-xl md:rounded-2xl transition-transform duration-400 hover:scale-105"
            style={{
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5), 0 0 40px rgba(0, 255, 68, 0.3)',
              border: '2px solid rgba(0, 255, 68, 0.3)'
            }}
          />
        </div>

        {/* Prize Content */}
        <div>
          <span className="text-xs uppercase tracking-wider green-text font-semibold flex items-center gap-1.5">
            <span className="inline-flex" style={neonStyle}>
              <Trophy size={14} strokeWidth={1.5} style={{ color: '#00FF66' }} />
            </span>
            Prossimo Premio
          </span>
          
          <h2 className="text-2xl md:text-[2.5rem] font-bold text-white mt-2 mb-3">
            {prize.title}
          </h2>
          
          <h3 className="text-xl md:text-[1.8rem] font-bold gradient-text mb-4">
            {prize.name}
          </h3>
          
          <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
            {prize.description}
          </p>

          {/* Winner Badges */}
          <div className="flex flex-wrap gap-2">
            {medalColors.map((medal, index) => (
              <span
                key={index}
                className="px-3 py-1.5 rounded-2xl text-xs font-medium transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-1.5"
                style={{
                  background: 'rgba(0, 255, 68, 0.1)',
                  border: '1px solid rgba(0, 255, 68, 0.3)',
                  color: medal.color
                }}
              >
                <span className="inline-flex" style={{ filter: medal.glow }}>
                  <Medal size={14} strokeWidth={1.5} style={{ color: medal.color }} />
                </span>
                {medal.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrizeSection;
