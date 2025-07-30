import React from 'react';

const BlogHero = () => {
  return (
    <div className="relative h-96 bg-gray-800 overflow-hidden">
      {/* Hero Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=1200" 
          alt="Blog Hero" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Cleaning Tips & Insights
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Expert advice and professional cleaning solutions
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogHero;