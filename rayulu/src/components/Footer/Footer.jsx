import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#f1f3fa] text-[#1a1a1a] py-10 px-5 md:px-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex justify-between items-start gap-8 md:gap-10">
        
        <div className="flex flex-col items-center sm:items-start w-full">
          <img src="/logo.png" alt="PCS Care" className="w-20 h-20 mb-3" />
        </div>

        <div className="w-full text-center sm:text-left">
          <h2 className="text-lg font-semibold text-[#2c2c54] mb-3">Our Links</h2>
          <ul className="space-y-2">
            <li>
              <Link to="/partner" className="font-bold hover:text-orange-500 cursor-pointer transition-colors block">
                Partner with us
              </Link>
            </li>
            <li>
              <Link to="/blog" className="font-bold hover:text-orange-500 cursor-pointer transition-colors block">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        <div className="w-full text-center sm:text-left">
          <h2 className="text-lg font-semibold text-[#2c2c54] mb-3">Get In Touch</h2>
          <div className="space-y-2">
            <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-2 text-sm">
              <FaMapMarkerAlt className="text-orange-500" />
              <span><strong>Location :</strong> Hyderabad, India</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-2 text-sm">
              <FaPhoneAlt className="text-orange-500" />
              <span><strong>Phone :</strong> +91 93926 12314 / 12</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-2 text-sm">
              <FaEnvelope className="text-orange-500" />
              <span><strong>Email :</strong> sales@pcscare.in</span>
            </div>
          </div>
        </div>

        <div className="flex justify-center sm:justify-start space-x-4 w-full">
          <Link to="#" className="w-8 h-8 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300">
            <FaFacebookF />
          </Link>
          <Link to="#" className="w-8 h-8 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300">
            <FaTwitter />
          </Link>
          <Link to="#" className="w-8 h-8 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300">
            <FaInstagram />
          </Link>
        </div>
      </div>

      <hr className="my-6 border-gray-300" />

      <div className="text-center text-sm">
        Copyright © 2024 <span className="text-orange-500 font-semibold">PCS Care</span> All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;