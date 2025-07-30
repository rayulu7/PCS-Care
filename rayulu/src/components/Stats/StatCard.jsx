import React, { useState } from 'react';
import StaggeredCounter from './StaggeredCounter';

const StatCard = ({ number, label }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="flex flex-col items-center p-6 rounded-lg hover:bg-orange-600 transition-colors"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <StaggeredCounter number={number} trigger={isHovered} />
      <p className="text-white text-lg font-semibold mt-2">{label}</p>
    </div>
  );
};

export default StatCard;