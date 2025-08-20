import React, { useState } from "react";
import { Phone, MapPin, Mail } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    requirement: "",
    name: "",
    email: "",
    phone: "",
    city: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section id = "contact-us" className="py-12 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Contact Us Heading */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-500">
            Know More
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Side - Contact Information */}
          <div className="space-y-8 md:space-y-10">
            {/* Header */}
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight sm:leading-snug">
                Have Any Questions?
                <br />
                Let's Connect
              </h2>
              <p className="mt-4 text-base md:text-lg text-gray-600 max-w-lg">
                We're here to help you. Reach out for inquiries, collaborations,
                or support and we'll respond promptly.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-5 md:space-y-6">
              {/* Phone */}
              <div className="flex items-center space-x-4">
                <div className="p-2 md:p-3 bg-orange-100 rounded-full">
                  <Phone className="w-5 h-5 md:w-6 md:h-6 text-orange-600" />
                </div>
                <p className="text-base md:text-lg font-medium text-gray-800">
                  +91-93926 12314 / 12
                </p>
              </div>

              {/* Location */}
              <div className="flex items-center space-x-4">
                <div className="p-2 md:p-3 bg-orange-100 rounded-full">
                  <MapPin className="w-5 h-5 md:w-6 md:h-6 text-orange-600" />
                </div>
                <p className="text-base md:text-lg font-medium text-gray-800">
                  Mansoorabad, Hyderabad
                </p>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-4">
                <div className="p-2 md:p-3 bg-orange-100 rounded-full">
                  <Mail className="w-5 h-5 md:w-6 md:h-6 text-orange-600" />
                </div>
                <p className="text-base md:text-lg font-medium text-gray-800">
                  sales@pcscare.in
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white shadow-lg md:shadow-xl rounded-xl md:rounded-2xl p-6 sm:p-8 md:p-10 border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
              {/* Requirement */}
              <div>
                <textarea
                  name="requirement"
                  value={formData.requirement}
                  onChange={handleInputChange}
                  placeholder="Tell us about your requirement..."
                  rows={4}
                  className="w-full px-4 py-3 text-sm md:text-base border border-gray-300 rounded-lg md:rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 resize-none shadow-sm"
                />
              </div>

              {/* Name + Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  className="px-4 py-3 text-sm md:text-base border border-gray-300 rounded-lg md:rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 shadow-sm"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email"
                  className="px-4 py-3 text-sm md:text-base border border-gray-300 rounded-lg md:rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 shadow-sm"
                />
              </div>

              {/* Phone + City */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Your Phone Number"
                  className="px-4 py-3 text-sm md:text-base border border-gray-300 rounded-lg md:rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 shadow-sm"
                />
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  placeholder="Your City"
                  className="px-4 py-3 text-sm md:text-base border border-gray-300 rounded-lg md:rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 shadow-sm"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 md:py-4 px-6 rounded-lg md:rounded-xl shadow-md md:shadow-lg transition-all duration-200 text-sm md:text-base"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;