import React, { useState, useEffect, useRef } from 'react';
import { FaBuilding, FaUsers, FaThumbsUp, FaSprayCan } from 'react-icons/fa';

// Digit animation for staggered counter
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
    <div className="inline-block w-4 sm:w-5 text-center text-white text-xl sm:text-2xl lg:text-3xl font-bold">
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

// Animated counter for simple count-up
const AnimatedCounter = ({ target, delay, trigger }) => {
  const [count, setCount] = useState(0);
  const duration = 3000;
  const increment = target / (duration / 16);

  useEffect(() => {
    if (!trigger) return;
    let start = null;
    let animationId;
    let timeoutId;

    const startAnimation = () => {
      const step = (timestamp) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const nextCount = Math.min(increment * (progress / 16), target);

        setCount(Math.floor(nextCount));
        if (progress < duration) {
          animationId = requestAnimationFrame(step);
        } else {
          setCount(target);
        }
      };
      animationId = requestAnimationFrame(step);
    };

    timeoutId = setTimeout(startAnimation, delay);

    return () => {
      clearTimeout(timeoutId);
      cancelAnimationFrame(animationId);
    };
  }, [target, delay, trigger]);

  return <span>{count.toLocaleString()}</span>;
};

// Main Stats component
const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);

  const stats = [
    { number: 5, label: 'Cities', icon: <FaBuilding className="text-white mb-2 w-6 h-6 sm:w-8 sm:h-8" /> },
    { number: 10000, label: 'Happy Customers', icon: <FaUsers className="text-white mb-2 w-6 h-6 sm:w-8 sm:h-8" /> },
    { number: 400, label: 'Corporate Clients', icon: <FaThumbsUp className="text-white mb-2 w-6 h-6 sm:w-8 sm:h-8" /> },
    { number: 20000000, label: 'Sq. Ft Cleaned', icon: <FaSprayCan className="text-white mb-2 w-6 h-6 sm:w-8 sm:h-8" /> },
  ];

  // Scroll trigger detection
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) observer.unobserve(statsRef.current);
    };
  }, []);

  return (
    <div className="min-h-[40vh] sm:min-h-[50vh] bg-[#fd7e14] flex items-center justify-center px-4 py-8 sm:px-6 sm:py-12">
      <div
        ref={statsRef}
        className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 w-full max-w-4xl mx-auto"
      >
        {stats.map((stat, i) => (
          <div
            key={i}
            className="flex flex-col items-center p-3 sm:p-4 bg-white/20 rounded-lg backdrop-blur-sm hover:bg-white/30 transition-all duration-300"
          >
            {stat.icon}
            <div className="text-white text-xl sm:text-2xl md:text-3xl font-bold">
              <AnimatedCounter target={stat.number} delay={i * 300} trigger={isVisible} />
              {i === 3 && '+'}
            </div>
            <p className="text-white text-xs sm:text-sm md:text-base mt-1 text-center font-medium">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;