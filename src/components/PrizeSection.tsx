import React from 'react';
import type { Prize } from '@/data/dashboardData';

interface PrizeSectionProps {
  prize: Prize;
}

const PrizeSection: React.FC<PrizeSectionProps> = ({ prize }) => {
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
          <span className="text-xs uppercase tracking-wider green-text font-semibold">
            🏆 Prossimo Premio
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
            {['🥇 1° Classificato', '🥈 2° Classificato', '🥉 3° Classificato'].map((badge, index) => (
              <span
                key={index}
                className="px-3 py-1.5 rounded-2xl text-xs font-medium green-text transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: 'rgba(0, 255, 68, 0.1)',
                  border: '1px solid rgba(0, 255, 68, 0.3)'
                }}
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrizeSection;
