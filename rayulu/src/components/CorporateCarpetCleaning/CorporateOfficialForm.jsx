import React, { useState } from "react";
import { Link } from "react-router-dom";

const cities = ["Hyderabad", "Bengaluru", "Pune", "Mumbai", "Chennai"];

const services = [
  "Carpet Cleaning",
  "Marble Polishing",
  "Sofa Cleaning",
  "Deep Cleaning",
  "Chair Cleaning",
  "Pest Control",
  "Workstation panels/Rollers/Blinds Cleaning"
];

export default function CorporateOfficialForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    service: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted:\n" + JSON.stringify(form, null, 2));
  };

  return (
    <div className="bg-black min-h-screen py-8 sm:py-12 px-4 font-poppins">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center">
        
        {/* Left Content */}
        <div className="md:w-7/12 text-center md:text-left px-2 sm:px-4">
          <h1
            className="
              mb-4 sm:mb-8
              text-[32px] sm:text-[40px] md:text-[51px]
              font-extrabold
              text-white
              leading-[42px] sm:leading-[60px] md:leading-[85px]
              mt-4 md:mt-0
            "
          >
            Professional Corporate<br />
            Cleaning Services Since 
            <br />
            2005
          </h1>
          <p className="mt-4 sm:mt-8 text-sm sm:text-base md:text-lg text-white leading-relaxed">
            Get Best Corporate/Industrial Cleaning &amp; Maintenance Services on par with international standards using state-of-the-art machinery and chemicals
          </p>
        </div>

        {/* Right Form */}
        <div
          className="
            mt-6 md:mt-0
            md:w-[470px] w-full
            bg-white rounded-lg shadow-lg
            p-4 sm:p-6 md:p-8
            overflow-auto
            mx-0 sm:mx-4
          "
        >
          <div className="flex justify-between items-center mb-4 sm:mb-6">
            <h2 className="text-lg sm:text-xl font-bold text-gray-800">
              Contact us
            </h2>
            <Link 
              to="/residential-services" 
              className="text-xs sm:text-sm text-orange-600 hover:text-blue-800 cursor-pointer ml-2 whitespace-nowrap"
            >
              Click here for Residential
            </Link>
          </div>
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:gap-4" autoComplete="off">
            <input
              type="text"
              name="name"
              required
              className="border rounded px-3 py-2 sm:px-4 sm:py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-gray-100 text-sm sm:text-base"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
            />
            <input
              type="tel"
              name="phone"
              required
              className="border rounded px-3 py-2 sm:px-4 sm:py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-gray-100 text-sm sm:text-base"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              required
              className="border rounded px-3 py-2 sm:px-4 sm:py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-gray-100 text-sm sm:text-base"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
            />
            <select
              name="city"
              required
              className="border rounded px-3 py-2 sm:px-4 sm:py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-gray-100 text-sm sm:text-base"
              value={form.city}
              onChange={handleChange}
            >
              <option value="">Choose City</option>
              {cities.map((city) => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
            <select
              name="service"
              required
              className="border rounded px-3 py-2 sm:px-4 sm:py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-gray-100 text-sm sm:text-base"
              value={form.service}
              onChange={handleChange}
            >
              <option value="">Choose Service</option>
              {services.map((svc) => (
                <option key={svc} value={svc}>{svc}</option>
              ))}
            </select>
            <button
              type="submit"
              className="
                bg-yellow-500 
                text-white 
                font-bold 
                py-2 sm:py-3 
                rounded 
                hover:bg-yellow-600 
                transition
                text-sm sm:text-base
              "
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}