import React, { useEffect, useState } from 'react';

interface Bubble {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

const Bubbles: React.FC = () => {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    // Generate initial bubbles
    const initialBubbles: Bubble[] = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 20 + 8,
      duration: Math.random() * 10 + 12,
      delay: Math.random() * 15,
      opacity: Math.random() * 0.4 + 0.1,
    }));
    setBubbles(initialBubbles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 1 }}>
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="absolute rounded-full"
          style={{
            left: `${bubble.left}%`,
            bottom: '-50px',
            width: bubble.size,
            height: bubble.size,
            background: `radial-gradient(circle at 30% 30%, rgba(0, 255, 102, ${bubble.opacity + 0.2}), rgba(0, 255, 102, ${bubble.opacity * 0.5}))`,
            boxShadow: `0 0 ${bubble.size / 2}px rgba(0, 255, 102, ${bubble.opacity}), inset 0 0 ${bubble.size / 4}px rgba(255, 255, 255, 0.1)`,
            animation: `bubble-rise ${bubble.duration}s ease-in-out ${bubble.delay}s infinite`,
          }}
        />
      ))}
      
      <style>{`
        @keyframes bubble-rise {
          0% {
            transform: translateY(0) translateX(0) scale(1);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          50% {
            transform: translateY(-50vh) translateX(${Math.random() > 0.5 ? '' : '-'}20px) scale(1.1);
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-110vh) translateX(${Math.random() > 0.5 ? '' : '-'}40px) scale(0.8);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Bubbles;
