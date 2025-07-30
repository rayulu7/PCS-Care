import React, { useEffect } from 'react';

const Banner = () => {
  useEffect(() => {
  
    import('flowbite').then(({ initFlowbite }) => {
      initFlowbite();
    });
  }, []);

  const carouselItems = [
    { 
      src: '/Homebanner1.jpg',
      alt: 'Banner 1'
    },
    { 
      src: '/Homebanner2.jpg',
      alt: 'Banner 2' 
    },
    { 
      src: '/Homebanner1.jpg',
      alt: 'Banner 3'
    }
  ];

  return (
    <div id="default-carousel" className="relative w-full mx-auto py-4 mb-2 mt-2" data-carousel="slide">
     
      <div className="relative h-48 sm:h-64 md:h-80 lg:h-96 overflow-hidden rounded-lg">
        {carouselItems.map((item, index) => (
          <div 
            key={`slide-${index}`}
            className="hidden duration-700 ease-in-out" 
            data-carousel-item
          >
            <img 
              src={item.src} 
              className="absolute block w-full h-full object-cover" 
              alt={item.alt}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://i.pinimg.com/736x/da/09/ed/da09edb81c790549db8980a5aa976dec.jpg';
              }}
              loading="lazy"
            />
          </div>
        ))}
      </div>
      
     
      <div className="absolute z-30 flex -translate-x-1/2 bottom-4 left-1/2 space-x-2">
        {carouselItems.map((_, index) => (
          <button
            key={`indicator-${index}`}
            type="button"
            className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-white/30 hover:bg-white/50 transition-colors"
            aria-current={index === 0}
            aria-label={`Slide ${index + 1}`}
            data-carousel-slide-to={index}
          ></button>
        ))}
      </div>
      
      
      <button 
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-2 sm:px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
      >
        <span className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-2 group-focus:ring-white/70 group-focus:outline-none transition-all">
          <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button 
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-2 sm:px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
      >
        <span className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-2 group-focus:ring-white/70 group-focus:outline-none transition-all">
          <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Banner;