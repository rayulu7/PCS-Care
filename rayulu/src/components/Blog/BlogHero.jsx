import React from 'react';

const BlogHero = () => {
  return (
    <div className="relative h-[60vh] md:h-[80vh] bg-gray-800 overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="./Banner.jpg" 
          alt="Blog Hero" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <div className="text-center text-white">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 md:mb-4">
            Cleaning Tips & Insights
          </h1>
          <p className="text-sm sm:text-base md:text-xl text-gray-200 max-w-xl md:max-w-2xl mx-auto">
            Expert advice and professional cleaning solutions
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogHero;
