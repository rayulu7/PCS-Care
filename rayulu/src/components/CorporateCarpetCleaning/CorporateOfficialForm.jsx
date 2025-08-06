import React, { useState } from "react";

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
    <div className="bg-black py-12 px-4 font-poppins">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start">
      
        <div className="md:w-7/12 text-center md:text-left px-4">
          <h1
            className="
              text-[51px]
              font-extrabold
              text-white
              leading-[85px]
              mt-4 md:mt-0
            "
          >
            Professional Corporate<br />
            Cleaning Services Since 
            {/* &amp; */}
            <br />
            2005
          </h1>
           <p className = "text-base md:text-lg font-poppins text-white leading-relaxed">Get&nbsp; Best&nbsp; Corporate/Industrial&nbsp; Cleaning&nbsp; &&nbsp; Maintenance&nbsp; Services&nbsp; on &nbsp;par &nbsp;with&nbsp;&nbsp;  international&nbsp;&nbsp;  standards&nbsp; &nbsp; using&nbsp;&nbsp;  the&nbsp;&nbsp;  state-of-the-art&nbsp; machinery&nbsp; and&nbsp; chemicals</p>
          <h4 className="text-[22px] text-white mt-6 tracking-wide">
            Hyderabad &ndash; Bengaluru &ndash; Pune &ndash; Mumbai &ndash; Chennai
          </h4>
        </div>

       
        <div
          className="
            mt-8 md:mt-0
            md:w-[470px] w-full h-[590px]
            bg-white rounded-lg shadow-lg
            p-8 overflow-auto
            mx-4
          "
        >
          <h2 className="text-xl font-bold mb-6 text-gray-800">Contact us</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4" autoComplete="off">
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
                <option key={city} value={city}>{city}</option>
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
                <option key={svc} value={svc}>{svc}</option>
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