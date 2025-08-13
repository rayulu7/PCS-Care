import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronDown, FiChevronUp, FiChevronRight } from 'react-icons/fi';
import { throttle } from 'lodash';
import Head from './Head';

const Navbar = () => {
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    {
      name: 'Services',
      path: '/corporate-services',
      dropdown: true,
      sublinks: [
        { name: 'Carpet Cleaning', path: '/Corporate-services/carpet-cleaning' },
        { name: 'Marble Polishing', path: '/marble-polishing' },
        { name: 'Sofa Cleaning', path: '/sofa-cleaning' },
        { name: 'Chair Cleaning', path: '/chair-cleaning' },
        { name: 'Pest Control', path: '/pest-control' },
        { name: 'Workstation Panels/Rollers/Blinds Cleaning', path: '/workstation-cleaning' },
        { name: 'Deep Cleaning', path: '/deep-cleaning' },
      ],
    },
    // {
    //   name: 'Home Services',
    //   path: '/form',
    //   dropdown: true,
    //   sublinks: [
    //     { name: 'Carpet Cleaning', path: '/home-services/carpet-cleaning' },
    //     { name: 'Marble Polishing', path: '/home-services/marble-polishing' },
    //     { name: 'Sofa Cleaning', path: '/form' },
    //     {
    //       name: 'Deep Cleaning',
    //       path: '/form',
    //       children: [
    //         { name: 'Deep Cleaning - Vacant', path: '/home-services/deep-cleaning/vacant' },
    //         { name: 'Deep Cleaning Occupied', path: '/home-services/deep-cleaning/occupied' },
    //         { name: 'Deep Cleaning - Villa / Duplex / Triplex', path: '/home-services/deep-cleaning/full-home' },
    //         { name: 'Intensive Deep Cleaning', path: '/home-services/deep-cleaning/intensive' },
    //       ],
    //     },
    //   ],
    // },
    { name: 'Contact Us', path: '/contact' },
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState({});
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState({});
  const [deepCleaningOpen, setDeepCleaningOpen] = useState(false);
  const [mobileDeepCleaningOpen, setMobileDeepCleaningOpen] = useState(false);

  const handleScroll = useCallback(
    throttle(() => {
      setIsScrolled(window.scrollY > 10);
    }, 100),
    []
  );

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMobileDropdown = (index) => {
    setMobileDropdownOpen((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const toggleMobileDeepCleaning = () => {
    setMobileDeepCleaningOpen(!mobileDeepCleaningOpen);
  };

  const handleDesktopDropdownEnter = (index) => {
    setDesktopDropdownOpen((prev) => ({
      ...prev,
      [index]: true,
    }));
  };

  const handleDesktopDropdownLeave = (index) => {
    setDesktopDropdownOpen((prev) => ({
      ...prev,
      [index]: false,
    }));
  };

  const closeAllMenus = () => {
    setIsMenuOpen(false);
    setMobileDropdownOpen({});
    setMobileDeepCleaningOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <Head />
      <nav
        className={`transition-all duration-500 ${
          isScrolled
            ? 'bg-white/95 shadow-lg backdrop-blur-md py-2 sm:py-3 md:py-4 text-gray-700'
            : 'py-3 sm:py-4 md:py-6 text-gray-800'
        }`}
      >
        <div className="flex items-center justify-between px-3 sm:px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-32 max-w-7xl mx-auto">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <img 
              src="/logo.png" 
              className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 object-contain" 
              alt="Company Logo" 
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-6 2xl:gap-8 flex-1 justify-center">
            {navLinks?.map((link, i) => (
              <div 
                key={i} 
                className="relative"
                onMouseEnter={() => link.dropdown && handleDesktopDropdownEnter(i)}
                onMouseLeave={() => link.dropdown && handleDesktopDropdownLeave(i)}
              >
                <Link
                  to={link.path}
                  className="flex items-center font-['League_Spartan'] text-base xl:text-lg font-medium hover:text-[#f47b00] transition-colors duration-200 py-2 px-2"
                >
                  {link.name}
                  {link.dropdown && <FiChevronDown className="ml-1 text-sm" />}
                </Link>

                {link.dropdown && desktopDropdownOpen[i] && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 bg-white shadow-xl rounded-lg border border-gray-100 py-2 z-50 min-w-64 max-w-72">
                    {link.sublinks?.map((sublink, j) => (
                      <div key={j} className="relative group/sub">
                        <div className="flex justify-between items-center hover:bg-[#f47b00] hover:text-white">
                          <Link
                            to={sublink.path}
                            className="flex-1 px-4 py-3 text-sm text-gray-800 hover:text-white transition-colors duration-200 whitespace-nowrap"
                          >
                            {sublink.name}
                          </Link>
                          {sublink.children && (
                            <span className="px-2">
                              <FiChevronRight className="text-xs" />
                            </span>
                          )}
                        </div>

                        {sublink.children && (
                          <div className="absolute top-0 left-full ml-1 bg-white shadow-xl rounded-lg border border-gray-100 py-2 z-50 min-w-60 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200">
                            {sublink.children?.map((child, k) => (
                              <Link
                                key={k}
                                to={child.path}
                                className="block px-4 py-3 text-sm hover:bg-[#f47b00] hover:text-white text-gray-800 whitespace-nowrap transition-colors duration-200"
                              >
                                {child.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Login Button */}
          <Link 
            className="hidden lg:flex items-center flex-shrink-0" 
            to="/registration-certificate"
          >
            <button className="bg-black text-white px-4 xl:px-6 py-2 rounded-full hover:bg-[#f47b00] transition-colors duration-300 text-sm xl:text-base">
              Login
            </button>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden flex-shrink-0 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <svg
              className={`h-5 w-5 sm:h-6 sm:w-6 ${isScrolled ? 'text-gray-700' : 'text-gray-800'}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-black/50 lg:hidden transition-opacity duration-300 ${
            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
          style={{ top: isScrolled ? '60px' : '80px' }}
          onClick={closeAllMenus}
        />

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 h-screen w-full max-w-sm bg-[#f47b00] text-white lg:hidden transform transition-transform duration-300 overflow-y-auto ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{ top: isScrolled ? '60px' : '80px', maxHeight: 'calc(100vh - 60px)' }}
        >
          <div className="p-4 sm:p-6 space-y-4">
            {navLinks.map((link, i) => (
              <div key={i} className="border-b border-white/20 last:border-b-0 pb-4 last:pb-0">
                <div
                  className="flex items-center justify-between py-2 cursor-pointer"
                  onClick={() => link.dropdown ? toggleMobileDropdown(i) : closeAllMenus()}
                >
                  <Link 
                    to={link.path} 
                    className="text-base sm:text-lg font-medium flex-1"
                    onClick={(e) => !link.dropdown && closeAllMenus()}
                  >
                    {link.name}
                  </Link>
                  {link.dropdown && (
                    <span className="ml-2">
                      {mobileDropdownOpen[i] ? <FiChevronUp /> : <FiChevronDown />}
                    </span>
                  )}
                </div>

                {link.dropdown && mobileDropdownOpen[i] && (
                  <div className="mt-3 space-y-2 bg-white/10 rounded-lg p-3">
                    {link.sublinks?.map((sublink, j) => (
                      <div key={j}>
                        {sublink.children ? (
                          <div>
                            <div 
                              className="flex justify-between items-center py-2 cursor-pointer hover:bg-white/10 rounded px-2"
                              onClick={toggleMobileDeepCleaning}
                            >
                              <span className="text-sm sm:text-base">{sublink.name}</span>
                              <FiChevronRight 
                                className={`ml-2 transform transition-transform ${
                                  mobileDeepCleaningOpen ? 'rotate-90' : ''
                                }`} 
                              />
                            </div>
                            {mobileDeepCleaningOpen && (
                              <div className="mt-2 space-y-1 bg-white/10 rounded p-2">
                                {sublink.children?.map((child, k) => (
                                  <Link
                                    key={k}
                                    to={child.path}
                                    className="block py-2 px-3 text-sm hover:bg-white/10 rounded transition-colors"
                                    onClick={closeAllMenus}
                                  >
                                    {child.name}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        ) : (
                          <Link
                            to={sublink.path}
                            className="block py-2 px-2 text-sm sm:text-base hover:bg-white/10 rounded transition-colors"
                            onClick={closeAllMenus}
                          >
                            {sublink.name}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Mobile Login Button */}
            <div className="pt-4">
              <Link to="/registration-certificate" onClick={closeAllMenus}>
                <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors duration-300 w-full text-sm sm:text-base">
                  Login
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;