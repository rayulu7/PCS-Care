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
        { name: 'Marble Polishing', path: '/form' },
        { name: 'Sofa Cleaning', path: '/form' },
        { name: 'Chair Cleaning', path: '/form' },
        { name: 'Pest Control', path: '/form' },
        { name: 'Workstation Panels/Rollers/Blinds Cleaning', path: '/form' },
        { name: 'Deep Cleaning', path: '/form' },
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

  const toggleMobileDropdown = (index) => {
    setMobileDropdownOpen((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const toggleMobileDeepCleaning = () => {
    setMobileDeepCleaningOpen(!mobileDeepCleaningOpen);
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 ">
      <Head />
      <nav
        className={`transition-all duration-500 ${
          isScrolled
            ? 'bg-white/80 shadow-md backdrop-blur-lg py-3 md:py-4 text-gray-700 mb-2'
            : 'py-4 md mb-2:py-6 text-gray-800 mb-2'
        }`}
      >
        <div className="flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 max-w-7xl mx-auto">
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo.png" className="h-12 w-12 object-contain" alt="Company Logo" />
          </Link>

          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks?.map((link, i) => (
              <div key={i} className="relative group">
                <Link
                  to={link.path}
                  className="flex items-center font-['League_Spartan'] text-lg font-medium hover:text-[#f47b00] transition-colors duration-200"
                >
                  {link.name}
                  {link.dropdown && <FiChevronDown className="ml-1" />}
                </Link>

                {link.dropdown && (
                  <ul className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded w-64 py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    {link.sublinks?.map((sublink, j) => (
                      <li
                        key={j}
                        className={`relative ${link.name === 'Home Services' && sublink.name === 'Deep Cleaning' ? 'group' : ''}`}
                      >
                        <div 
                          className="flex justify-between items-center hover:bg-[#f47b00] hover:text-white"
                          onMouseEnter={() => link.name === 'Home Services' && sublink.name === 'Deep Cleaning' && setDeepCleaningOpen(true)}
                          onMouseLeave={() => link.name === 'Home Services' && sublink.name === 'Deep Cleaning' && setDeepCleaningOpen(false)}
                        >
                          <Link
                            to={sublink.path}
                            className="flex-1 px-4 py-2 text-sm text-gray-800 hover:text-white transition-colors duration-200"
                          >
                            {sublink.name}
                          </Link>
                          {link.name === 'Home Services' && sublink.name === 'Deep Cleaning' && (
                            <span className="px-2">
                              <FiChevronRight />
                            </span>
                          )}
                        </div>

                        {link.name === 'Home Services' && sublink.name === 'Deep Cleaning' && (
                          <ul 
                            className={`absolute top-0 left-full bg-white shadow-lg rounded w-56 py-2 z-50 ${deepCleaningOpen ? 'block' : 'hidden'}`}
                            onMouseEnter={() => setDeepCleaningOpen(true)}
                            onMouseLeave={() => setDeepCleaningOpen(false)}
                          >
                            {sublink.children?.map((child, k) => (
                              <li key={k}>
                                <Link
                                  to={child.path}
                                  className="block px-4 py-2 text-sm hover:bg-[#f47b00] hover:text-white text-gray-800"
                                >
                                  {child.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          <Link className="hidden md:flex items-center gap-4" to="/registration-certificate">
            <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-[#f47b00] transition-colors duration-300">
              Register
            </button>
          </Link>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <svg
              className={`h-6 w-6 ${isScrolled ? 'text-gray-700' : 'text-gray-800'}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        <div
          className={`fixed top-0 left-0 w-full h-screen flex flex-col md:hidden items-center justify-center gap-6 text-base font-medium transition-transform duration-500 ${
            isMenuOpen ? 'translate-x-0 bg-[#f47b00] text-white p-6' : '-translate-x-full'
          }`}
          style={{ top: 'calc(64px + 1rem)' }} 
        >
          <button
            className="absolute top-4 right-4 text-white"
            onClick={() => setIsMenuOpen(false)}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {navLinks.map((link, i) => (
            <div key={i} className="w-full text-center">
              <div
                className="flex items-center justify-center w-full gap-1 py-2 cursor-pointer"
                onClick={() => toggleMobileDropdown(i)}
              >
                <Link to={link.path} className="text-lg">{link.name}</Link>
                {link.dropdown && (mobileDropdownOpen[i] ? <FiChevronUp /> : <FiChevronDown />)}
              </div>

              {link.dropdown && mobileDropdownOpen[i] && (
                <ul className="mt-2 w-full bg-white text-black rounded">
                  {link.sublinks?.map((sublink, j) => (
                    <div key={j} className="text-center">
                      {link.name === 'Home Services' && sublink.name === 'Deep Cleaning' ? (
                        <div className="block">
                          <div 
                            className="flex justify-center items-center px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                            onClick={toggleMobileDeepCleaning}
                          >
                            <span className="flex-1 text-center">{sublink.name}</span>
                            <FiChevronRight className={`ml-2 transform transition-transform ${mobileDeepCleaningOpen ? 'rotate-90' : ''}`} />
                          </div>
                          {mobileDeepCleaningOpen && (
                            <ul className="bg-gray-50 rounded">
                              {sublink.children?.map((child, k) => (
                                <li key={k} className="text-center">
                                  <Link
                                    to={child.path}
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                                    onClick={() => setIsMenuOpen(false)}
                                  >
                                    {child.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ) : (
                        <Link
                          to={sublink.path}
                          className="block py-2 px-4 text-sm hover:bg-gray-100"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {sublink.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </ul>
              )}
            </div>
          ))}

          <Link to="/registration-certificate" className="w-full text-center">
            <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-[#f47b00] transition-colors duration-300 w-full max-w-xs">
              Register
            </button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;