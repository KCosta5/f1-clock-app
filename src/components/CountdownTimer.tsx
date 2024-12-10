import React, { useEffect, useState } from 'react';
import { getTimeRemaining } from '../utils/timeUtils';

interface CountdownTimerProps {
  raceDate: Date;
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({ raceDate }) => {
  const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining(raceDate));

  useEffect(() => {
    const timer = setInterval(() => {
      const remaining = getTimeRemaining(raceDate);
      setTimeRemaining(remaining);
      
      if (!remaining) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [raceDate]);

  if (!timeRemaining) {
    return <div className="text-red-600 font-semibold">Race has started!</div>;
  }

  return (
    <div className="grid grid-cols-4 gap-4">
      {[
        { label: 'Days', value: timeRemaining.days },
        { label: 'Hours', value: timeRemaining.hours },
        { label: 'Minutes', value: timeRemaining.minutes },
        { label: 'Seconds', value: timeRemaining.seconds },
      ].map(({ label, value }) => (
        <div key={label} className="text-center">
          <div className="text-3xl font-bold">{value}</div>
          <div className="text-sm text-gray-600">{label}</div>
        </div>
      ))}
    </div>
  );
};