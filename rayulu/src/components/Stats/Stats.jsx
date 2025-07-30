import React, { useState, useEffect } from 'react';
import { FaBuilding, FaUsers, FaThumbsUp, FaSprayCan } from 'react-icons/fa';

const AnimatedCounter = ({ target, delay }) => {
  const [count, setCount] = useState(0);
  const duration = 3000;
  const increment = target / (duration / 16);

  useEffect(() => {
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
  }, [target, delay]);

  return <span>{count.toLocaleString()}</span>;
};

const Stats = () => {
  const stats = [
    { number: 5, label: 'Cities', icon: <FaBuilding size={48} className="text-white mb-3" /> },
    { number: 10000, label: 'Happy Customers', icon: <FaUsers size={48} className="text-white mb-3" /> },
    { number: 400, label: 'Corporate Clients', icon: <FaThumbsUp size={48} className="text-white mb-3" /> },
    { number: 20000000, label: 'Sq. Ft Cleaned', icon: <FaSprayCan size={48} className="text-white mb-3" /> },
  ];

  return (
    <div className="min-h-screen bg-[#fd7e14] flex items-center justify-center p-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-6xl">
        {stats.map((stat, i) => (
          <div key={i} className="flex flex-col items-center p-6 bg-white/20 rounded-lg backdrop-blur-sm">
            {stat.icon}
            <span className="text-white text-4xl font-bold">
              <AnimatedCounter 
                target={stat.number} 
                delay={i * 300}
              />
              {i === 3 && '+'}
            </span>
            <p className="text-white text-lg mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
