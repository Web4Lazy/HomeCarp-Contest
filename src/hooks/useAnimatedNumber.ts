import { useState, useEffect, useRef } from 'react';

function easeOutQuart(x: number): number {
  return 1 - Math.pow(1 - x, 4);
}

export function useAnimatedNumber(target: number, duration: number = 1500): number {
  const [value, setValue] = useState(0);
  const startTimeRef = useRef<number | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    startTimeRef.current = null;
    
    const animate = (currentTime: number) => {
      if (startTimeRef.current === null) {
        startTimeRef.current = currentTime;
      }
      
      const elapsed = currentTime - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutQuart(progress);
      const current = Math.floor(target * eased);
      
      setValue(current);
      
      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animate);
      }
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [target, duration]);

  return value;
}
