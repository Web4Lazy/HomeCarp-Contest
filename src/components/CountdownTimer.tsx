import React, { useState, useEffect } from 'react';
import { useCountdown } from '@/hooks/useCountdown';

const CountdownTimer: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const countdown = useCountdown();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      setIsExpanded(true);
    }
  }, [isMobile]);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    
    if (isMobile) {
      setIsExpanded(!isExpanded);
    } else {
      // Scroll to prize section on desktop
      document.getElementById('prize-section')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (isMobile && isExpanded) {
      const handleOutsideClick = () => setIsExpanded(false);
      document.addEventListener('click', handleOutsideClick);
      return () => document.removeEventListener('click', handleOutsideClick);
    }
  }, [isMobile, isExpanded]);

  const containerSize = isMobile ? (isExpanded ? 140 : 60) : 160;

  return (
    <div
      onClick={handleClick}
      className="fixed cursor-pointer transition-all duration-400"
      style={{
        bottom: isMobile ? 20 : 30,
        right: isMobile ? 20 : 30,
        zIndex: 1000,
        width: containerSize,
        height: containerSize,
        borderRadius: '50%',
        background: 'radial-gradient(ellipse at center, rgba(10, 25, 10, 0.95) 0%, rgba(5, 15, 5, 0.98) 100%)',
        border: '2px solid #00FF66',
        boxShadow: '0 0 20px rgba(0, 255, 68, 0.4), 0 0 40px rgba(0, 255, 68, 0.2), inset 0 0 15px rgba(0, 255, 68, 0.1)',
      }}
    >
      {/* Bomb Fuse */}
      <div 
        className="absolute left-1/2"
        style={{
          top: -15,
          transform: 'translateX(-50%)',
          width: 4,
          height: 20,
          background: 'linear-gradient(to top, #333, #666)',
          borderRadius: 2,
          opacity: isExpanded ? 1 : 0,
          transition: 'opacity 0.3s ease'
        }}
      >
        {/* Spark */}
        <div 
          className="absolute animate-fuse-spark"
          style={{
            top: -8,
            left: '50%',
            width: 10,
            height: 10,
            background: '#00FF66',
            borderRadius: '50%',
            boxShadow: '0 0 15px #00FF66, 0 0 30px #00FF66'
          }}
        />
      </div>

      {/* Rotating Ring */}
      <div 
        className="absolute inset-[5%] rounded-full animate-timer-rotate"
        style={{
          border: '2px solid rgba(0, 255, 68, 0.3)',
          borderTopColor: '#00FF66',
          opacity: isExpanded ? 1 : 0,
          transition: 'opacity 0.3s ease'
        }}
      />

      {/* Tick Marks */}
      <div 
        className="absolute inset-0 flex items-center justify-center"
        style={{ opacity: isExpanded ? 1 : 0, transition: 'opacity 0.3s ease' }}
      >
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              width: 2,
              height: 6,
              background: 'rgba(0, 255, 68, 0.4)',
              transformOrigin: `center ${containerSize / 2 - 4}px`,
              transform: `rotate(${i * 30}deg)`,
              top: 4
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-2">
        {isMobile && !isExpanded ? (
          <span className="text-2xl">💣</span>
        ) : (
          <>
            <span 
              className="text-[0.55rem] uppercase green-text font-semibold text-center leading-tight mb-1"
              style={{ opacity: isExpanded ? 1 : 0, transition: 'opacity 0.3s ease' }}
            >
              🏆 Prossimo Premio
            </span>
            
            <div 
              className="text-center"
              style={{ opacity: isExpanded ? 1 : 0, transition: 'opacity 0.3s ease' }}
            >
              <div className="flex items-center justify-center gap-1">
                <div className="text-center">
                  <span 
                    className="font-mono font-black green-text"
                    style={{ 
                      fontSize: isMobile ? '1rem' : '1.3rem',
                      textShadow: '0 0 10px rgba(0, 255, 68, 0.8)'
                    }}
                  >
                    {countdown.weeks}
                  </span>
                  <div className="text-[0.45rem] text-[var(--text-muted)]">Sett</div>
                </div>
                <span className="green-text animate-blink mx-0.5">:</span>
                <div className="text-center">
                  <span 
                    className="font-mono font-black green-text"
                    style={{ 
                      fontSize: isMobile ? '1rem' : '1.3rem',
                      textShadow: '0 0 10px rgba(0, 255, 68, 0.8)'
                    }}
                  >
                    {countdown.days}
                  </span>
                  <div className="text-[0.45rem] text-[var(--text-muted)]">Giorni</div>
                </div>
              </div>
              
              <div className="flex items-center justify-center gap-1 mt-0.5">
                <div className="text-center">
                  <span 
                    className="font-mono font-black green-text"
                    style={{ 
                      fontSize: isMobile ? '1rem' : '1.3rem',
                      textShadow: '0 0 10px rgba(0, 255, 68, 0.8)'
                    }}
                  >
                    {String(countdown.hours).padStart(2, '0')}
                  </span>
                  <div className="text-[0.45rem] text-[var(--text-muted)]">Ore</div>
                </div>
                <span className="green-text animate-blink mx-0.5">:</span>
                <div className="text-center">
                  <span 
                    className="font-mono font-black green-text"
                    style={{ 
                      fontSize: isMobile ? '1rem' : '1.3rem',
                      textShadow: '0 0 10px rgba(0, 255, 68, 0.8)'
                    }}
                  >
                    {String(countdown.minutes).padStart(2, '0')}
                  </span>
                  <div className="text-[0.45rem] text-[var(--text-muted)]">Min</div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CountdownTimer;
