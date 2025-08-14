import { useState, useEffect, useRef, useCallback } from "react";
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";

// ======= Data =======
const TESTIMONIALS = [
  { id: 1, rating: 5, quote: "On-time service, completely satisfied with the excellent work and even within the budget. Staff was professional, polite, and hygienic.", author: "Raj", location: "Resident from Vanasthalipuram" },
  { id: 2, rating: 5, quote: "Done intensive cleaning services today. I was really impressed with PCS staff, who followed all COVID protocols, including wearing masks and maintaining cleanliness.", author: "Ganesh", location: "Resident from Kompally" },
  { id: 3, rating: 5, quote: "Very good service and attitude by the staff of PCS Care. Work wise, so professional and more keen on customer satisfaction.", author: "Karunakar", location: "Scape Interiors" },
  { id: 4, rating: 5, quote: "Excellent marble polishing service. They transformed our office floors to look brand new!", author: "Priya", location: "Office Manager, Hyderabad" },
  { id: 5, rating: 5, quote: "The team was punctual, professional, and delivered beyond our expectations. Our marble floors have never looked better!", author: "Arjun", location: "Hotel Owner, Bangalore" },
  { id: 6, rating: 5, quote: "Impeccable service with attention to detail. They respected our space and completed the work without any disruption.", author: "Neha", location: "Corporate Office, Pune" },
  { id: 7, rating: 5, quote: "Five years of stains removed in just one session! The team knew exactly how to handle our delicate marble surfaces.", author: "Sanjay", location: "Heritage Home Owner, Chennai" }
];

const SLIDE_INTERVAL = 5000;

export default function TestimonialCarousel() {
  const [itemsPerSlide, setItemsPerSlide] = useState(getItemsPerSlide());
  const [currentIndex, setCurrentIndex] = useState(itemsPerSlide); // start in middle for infinite loop
  const [transitioning, setTransitioning] = useState(false);
  const containerRef = useRef(null);
  const autoSlideRef = useRef(null);
  const touchStartX = useRef(0);

  function getItemsPerSlide() {
    if (window.innerWidth < 768) return 1; // mobile
    if (window.innerWidth < 1024) return 1; // tablet
    return 2; // desktop
  }

  const slides = [
    ...TESTIMONIALS.slice(-itemsPerSlide),
    ...TESTIMONIALS,
    ...TESTIMONIALS.slice(0, itemsPerSlide)
  ];

  useEffect(() => {
    const handleResize = () => {
      const newCount = getItemsPerSlide();
      setItemsPerSlide(newCount);
      setCurrentIndex(newCount);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    startAutoSlide();
    return stopAutoSlide;
  }, [currentIndex, itemsPerSlide]);

  const startAutoSlide = () => {
    stopAutoSlide();
    autoSlideRef.current = setInterval(() => {
      nextSlide();
    }, SLIDE_INTERVAL);
  };

  const stopAutoSlide = () => {
    if (autoSlideRef.current) clearInterval(autoSlideRef.current);
  };

  const nextSlide = useCallback(() => {
    if (!transitioning) {
      setTransitioning(true);
      setCurrentIndex((prev) => prev + 1);
    }
  }, [transitioning]);

  const prevSlide = useCallback(() => {
    if (!transitioning) {
      setTransitioning(true);
      setCurrentIndex((prev) => prev - 1);
    }
  }, [transitioning]);

  const handleTransitionEnd = () => {
    setTransitioning(false);
    if (currentIndex >= slides.length - itemsPerSlide) {
      setCurrentIndex(itemsPerSlide);
    } else if (currentIndex < itemsPerSlide) {
      setCurrentIndex(slides.length - itemsPerSlide * 2);
    }
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e) => {
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (diff > 50) prevSlide();
    if (diff < -50) nextSlide();
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [prevSlide, nextSlide]);

  const renderStars = (rating) =>
    Array.from({ length: 5 }, (_, i) => (
      <FaStar key={i} className={`${i < rating ? "text-yellow-400" : "text-gray-300"} inline-block`} />
    ));

  return (
    <div className="max-w-7xl mx-auto my-16 px-4 relative group">
      <h2 className="text-3xl font-bold text-center mb-12">Testimonials</h2>

      {/* Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 p-3 text-gray-600 hover:text-blue-600 rounded-full hover:bg-gray-100 z-10"
        aria-label="Previous testimonials"
      >
        <FaArrowLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 p-3 text-gray-600 hover:text-blue-600 rounded-full hover:bg-gray-100 z-10"
        aria-label="Next testimonials"
      >
        <FaArrowRight className="h-6 w-6" />
      </button>

      {/* Carousel */}
      <div
        ref={containerRef}
        className="overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(100 / itemsPerSlide) * currentIndex}%)`,
            transition: transitioning ? "transform 0.5s ease" : "none"
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {slides.map((t, idx) => (
            <div
              key={`${t.id}-${idx}`}
              className="flex-shrink-0 px-4"
              style={{ width: `${100 / itemsPerSlide}%` }}
              aria-label={`Testimonial from ${t.author}`}
            >
              <div className="bg-white p-8 border-t-2 border-gray-500 shadow-lg rounded-lg h-full hover:shadow-xl transition-all">
                <div className="mb-4">{renderStars(t.rating)}</div>
                <blockquote className="text-gray-600 italic mb-6 text-lg leading-relaxed">
                  "{t.quote}"
                </blockquote>
                <div className="font-semibold">
                  <p className="text-gray-800 text-lg">{t.author}</p>
                  <p className="text-gray-500 text-sm">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
