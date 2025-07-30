import React, { useEffect, useState } from 'react';

const Digit = ({ value, isActive }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isActive) {
      const duration = 2000; 
      const startTime = Date.now();
      
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const current = Math.floor(progress * (value + 1));
        
        setDisplayValue(current % 10);
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setDisplayValue(value);
        }
      };
      
      requestAnimationFrame(animate);
    } else {
      setDisplayValue(0);
    }
  }, [isActive, value]);

  return (
    <div className="inline-block w-6 text-center text-white text-4xl font-bold">
      {displayValue}
    </div>
  );
};

const StaggeredCounter = ({ number, trigger }) => {
  const digits = String(number).split('').map(Number);

  return (
    <div className="flex justify-center">
      {digits.map((digit, index) => (
        <Digit key={index} value={digit} isActive={trigger} />
      ))}
    </div>
  );
};

export default StaggeredCounter;