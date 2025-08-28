import React, { useState } from "react";
import { Link } from "react-router-dom";

const cities = [
  "Hyderabad",
  "Bengaluru",
  "Pune",
  "Mumbai",
  "Chennai"
];

const services = [
  "Carpet Cleaning",
  "Marble Polishing",
  "Sofa Cleaning",
  "Deep Cleaning",
  "Chair Cleaning",
  "Pest Control",
  "Workstation panels/Rollers/Blinds Cleaning"
];

export default function CorporateWorkForm() {
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
    <div
      className="min-h-screen py-12 px-4 font-poppins"
      style={{
        backgroundImage: "url('/Banner.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start">
        
        {/* Left Content */}
        <div className="md:w-7/12 text-center md:text-left px-4">
          <h1
            className="mb-8
              text-[32px] sm:text-[40px] md:text-[51px]
              font-bold
              text-orange-400
              leading-[42px] sm:leading-[60px] md:leading-[85px]
              mt-4 md:mt-0
            "
          >
            Best Office Workstation<br />
            Panels, Window Blinds & <br />
            Rollers Cleaning <br />
            Services in India
          </h1>
          <p className="mt-8 text-sm sm:text-base md:text-lg text-black leading-relaxed font-poppins">
            Get Best Corporate/Industrial Cleaning &amp; Maintenance Services on par with international standards using state-of-the-art machinery and chemicals.
          </p>
        </div>

        {/* Right Form */}
        <div
          className="
            mt-8 md:mt-0
            md:w-[470px] w-full
            bg-white rounded-lg shadow-lg
            p-6 md:p-8
            overflow-auto
            mx-0 md:mx-4
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
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
            autoComplete="off"
          >
            <input
              type="text"
              name="name"
              required
              className="border rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-gray-100"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
            />
            <input
              type="tel"
              name="phone"
              required
              className="border rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-gray-100"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              required
              className="border rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-gray-100"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
            />
            <select
              name="city"
              required
              className="border rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-gray-100"
              value={form.city}
              onChange={handleChange}
            >
              <option value="">Choose City</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
            <select
              name="service"
              required
              className="border rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-gray-100"
              value={form.service}
              onChange={handleChange}
            >
              <option value="">Choose Service</option>
              {services.map((svc) => (
                <option key={svc} value={svc}>
                  {svc}
                </option>
              ))}
            </select>
            <button
              type="submit"
              className="
                bg-yellow-500 
                text-white 
                font-bold 
                py-3 
                rounded 
                hover:bg-yellow-600 
                transition
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
