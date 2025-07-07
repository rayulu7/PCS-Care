import { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight, FaStar } from 'react-icons/fa';

const TestimonialCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  
  const allTestimonials = [
    {
      id: 1,
      rating: 5,
      quote: "On-time service, completely satisfied with the excellent work and even within the budget. Staff was professional, polite, and hygienic.",
      author: "Raj",
      location: "Resident from Vanasthalipuram"
    },
    {
      id: 2,
      rating: 5,
      quote: "Done intensive cleaning services today. I was really impressed with PCS staff, who followed all COVID protocols, including wearing masks and maintaining cleanliness.",
      author: "Ganesh",
      location: "Resident from Kompally"
    },
    {
      id: 3,
      rating: 5,
      quote: "Very good service and attitude by the staff of PCS Care. Work wise, so professional and more keen on customer satisfaction.",
      author: "Karunakar",
      location: "Scape Interiors"
    },
    {
      id: 4,
      rating: 5,
      quote: "Excellent marble polishing service. They transformed our office floors to look brand new!",
      author: "Priya",
      location: "Office Manager, Hyderabad"
    },
    {
      id: 5,
      rating: 5,
      quote: "The team was punctual, professional, and delivered beyond our expectations. Our marble floors have never looked better!",
      author: "Arjun",
      location: "Hotel Owner, Bangalore"
    },
    {
      id: 6,
      rating: 5,
      quote: "Impeccable service with attention to detail. They respected our space and completed the work without any disruption.",
      author: "Neha",
      location: "Corporate Office, Pune"
    },
    {
      id: 7,
      rating: 5,
      quote: "Five years of stains removed in just one session! The team knew exactly how to handle our delicate marble surfaces.",
      author: "Sanjay",
      location: "Heritage Home Owner, Chennai"
    }
  ];


  const testimonialSlides = [];
  for (let i = 0; i < allTestimonials.length; i += 2) {
    testimonialSlides.push(allTestimonials.slice(i, i + 2));
  }


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev === testimonialSlides.length - 1 ? 0 : prev + 1));
    }, 5000); 

    return () => clearInterval(interval);
  }, [testimonialSlides.length]);

  const nextSlide = () => {
    setCurrentSlide(prev => (prev === testimonialSlides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev === 0 ? testimonialSlides.length - 1 : prev - 1));
  };

  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, i) => (
      <FaStar 
        key={i} 
        className={`${i < rating ? 'text-yellow-400' : 'text-gray-300'} inline-block`} 
      />
    ));
  };

  return (
    <div className="max-w-6xl mx-auto my-16 px-4 relative group">
      <h2 className="text-3xl font-bold text-center mb-12">Testimonials</h2>
      
  
      <button 
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 p-3 text-gray-600 hover:text-blue-600 transition-colors rounded-full hover:bg-gray-100"
        aria-label="Previous testimonials"
      >
        <FaArrowLeft className="h-6 w-6" />
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 p-3 text-gray-600 hover:text-blue-600 transition-colors rounded-full hover:bg-gray-100"
        aria-label="Next testimonials"
      >
        <FaArrowRight className="h-6 w-6" />
      </button>

   
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {testimonialSlides.map((slide, slideIndex) => (
            <div 
              key={`slide-${slideIndex}`} 
              className="w-full flex-shrink-0 px-4"
            >
              <div className={`grid ${slide.length === 2 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'} gap-8`}>
                {slide.map((testimonial) => (
                  <div 
                    key={testimonial.id} 
                    className="bg-white p-8 border-t-2 border-gray-500 shadow-lg rounded-lg h-full transition-all duration-300 hover:shadow-xl"
                  >
                    <div className="mb-4">
                      {renderStars(testimonial.rating)}
                    </div>
                    <blockquote className="font-crimson text-gray-600 italic mb-6 text-lg leading-relaxed">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="font-semibold">
                      <p className="text-gray-800 text-lg font-spartan">{testimonial.author}</p>
                      <p className="text-gray-500 text-sm font-spartan">{testimonial.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;