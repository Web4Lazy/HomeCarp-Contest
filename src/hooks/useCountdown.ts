import { useState, useEffect } from 'react';

interface CountdownTime {
  weeks: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function useCountdown(): CountdownTime {
  const [time, setTime] = useState<CountdownTime>({
    weeks: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date();
      const year = now.getFullYear();
      const month = now.getMonth();
      const endOfMonth = new Date(year, month + 1, 0, 12, 0, 0);
      
      const diff = endOfMonth.getTime() - now.getTime();
      
      if (diff <= 0) {
        return { weeks: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
      }
      
      const totalSeconds = Math.floor(diff / 1000);
      const totalMinutes = Math.floor(totalSeconds / 60);
      const totalHours = Math.floor(totalMinutes / 60);
      const totalDays = Math.floor(totalHours / 24);
      
      const weeks = Math.floor(totalDays / 7);
      const days = totalDays % 7;
      const hours = totalHours % 24;
      const minutes = totalMinutes % 60;
      const seconds = totalSeconds % 60;
      
      return { weeks, days, hours, minutes, seconds };
    };

    setTime(calculateTime());
    
    const interval = setInterval(() => {
      setTime(calculateTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return time;
}
