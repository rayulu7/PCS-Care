

import React, { useState, useRef, useEffect } from 'react';

import { Clock, ChevronDown } from 'lucide-react';
import Homecarpetquestions from './HomecarpetQuestions';
import HomeCarpetHeading from './HomeCarpetHeading';
import HomeCarpetTypes from './HomeCarpetTypes';
import ChooseUs from '../../Form/ChooseUs';

export default function Homecarpet() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'premium',
    quantity: 1,
    time: '',
    date: '',
    additionalServices: []
  });
  const [showServices, setShowServices] = useState(false);
  const containerRef = useRef(null);
  const extras = ['Sofa Cleaning', 'Mattress Cleaning', 'Chairs & Dining Chairs'];

  useEffect(() => {
    const onClickOutside = e => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setShowServices(false);
      }
    };
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, []);

  const handleInput = e =>
    setFormData(fd => ({ ...fd, [e.target.name]: e.target.value }));

  const changeQty = inc =>
    setFormData(fd => ({ ...fd, quantity: Math.max(1, fd.quantity + inc) }));

  const toggleExtra = svc =>
    setFormData(fd => {
      const has = fd.additionalServices.includes(svc);
      return {
        ...fd,
        additionalServices: has
          ? fd.additionalServices.filter(s => s !== svc)
          : [...fd.additionalServices, svc]
      };
    });

  const toggleAll = () =>
    setFormData(fd => ({
      ...fd,
      additionalServices:
        fd.additionalServices.length === extras.length ? [] : [...extras]
    }));

  const calcTotal = () => {
    const base = formData.service === 'premium' ? 1499 : 999;
    return base * formData.quantity;
  };

  const onSubmit = e => {
    e.preventDefault();
    alert('Thank you! We will contact you soon.');
  };

  return (
    <div className = "mt-4">
    <HomeCarpetHeading />
    <div className="bg-white">
      
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Our Pricing Plans
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
          
            <div className="group relative overflow-hidden rounded-2xl bg-gray-50 border-2 border-orange-200 p-8
                            hover:shadow-xl hover:scale-[1.02] transition-transform duration-300">
              <div className="absolute top-0 right-0 bg-orange-500 px-4 py-1 rounded-bl-lg text-sm font-semibold text-white">
                POPULAR
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-2">Premium</h4>
              <div className="text-4xl font-bold text-orange-500 mb-6">
                ₹1499 <span className="text-lg text-gray-600">per piece</span>
              </div>
              <button className="w-full rounded-lg bg-orange-500 py-3 font-semibold text-white
                                 hover:bg-orange-600 transition-colors">
                Book Now
              </button>
            </div>

            
            <div className="group relative overflow-hidden rounded-2xl bg-gray-50 border-2 border-gray-200 p-8
                            hover:shadow-xl hover:scale-[1.02] transition-transform duration-300">
              <h4 className="text-2xl font-bold text-gray-800 mb-2">Economy</h4>
              <div className="text-4xl font-bold text-blue-500 mb-6">
                ₹999 <span className="text-lg text-gray-600">per piece</span>
              </div>
              <button className="w-full rounded-lg bg-blue-500 py-3 font-semibold text-white
                                 hover:bg-blue-600 transition-colors">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </section>

   
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
         
          <div className="space-y-10">
         
            <img
              src= "/homecarpet.jpg"
              alt="Person vacuuming"
              className="w-full object-cover rounded-lg shadow-lg mx-auto"
            />

          
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Our Process (Premium)
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li><strong>Stage 1</strong> – Dry vacuuming to remove loose dust.</li>
                <li><strong>Stage 2</strong> – Application of foam to bind the dust particles.</li>
                <li><strong>Stage 3</strong> – Extraction of dust + foam, leaving carpet 100% dust-free & refreshed.</li>
              </ul>
              <p className="mt-4 bg-green-50 p-3 rounded text-green-800">
                <strong>Chemicals used:</strong> Greenseal-certified (USA), biodegradable eco-friendly.
              </p>
              <p className="mt-2 italic text-gray-600">
                *Highly recommended for branded & expensive carpets.
              </p>
            </div>

         
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Our Process (Economy)
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li><strong>Stage 1</strong> – Dry vacuuming to remove loose dust.</li>
                <li><strong>Stage 2</strong> – Application of foam to bind the dust particles.</li>
                <li><strong>Stage 3</strong> – Extraction of dust + foam, leaving carpet 100% dust-free & refreshed.</li>
              </ul>
              <p className="mt-4 bg-green-50 p-3 rounded text-green-800">
                <strong>Chemicals used:</strong> Eco-friendly & biodegradable Taski/equivalent chemicals.
              </p>
              <p className="mt-2 text-gray-600">
                Drying time: 2–4 hours.
              </p>
            </div>
          </div>

         
          <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Contact us <span className="text-orange-500">(Hyderabad only)</span>
            </h3>
            <form onSubmit={onSubmit} className="space-y-6">
              <input
                name="name"
                value={formData.name}
                onChange={handleInput}
                required
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg"
              />
              <input
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInput}
                required
                placeholder="Phone Number"
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg"
              />
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInput}
                required
                placeholder="Email"
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg"
              />

              <input
                value="Hyderabad"
                disabled
                className="w-full px-4 py-3 bg-gray-200 border border-gray-300 rounded-lg text-gray-600"
              />
              <select
                name="service"
                value={formData.service}
                onChange={handleInput}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg"
              >
                <option value="premium">Premium</option>
                <option value="economy">Economy</option>
              </select>

              <div className="flex items-center space-x-4">
                <button
                  type="button"
                  onClick={() => changeQty(-1)}
                  className="w-12 h-12 bg-orange-500 text-white rounded-lg font-bold text-xl"
                >−</button>
                <span className="text-2xl font-bold">{formData.quantity}</span>
                <button
                  type="button"
                  onClick={() => changeQty(1)}
                  className="w-12 h-12 bg-orange-500 text-white rounded-lg font-bold text-xl"
                >+</button>
              </div>

              <div>
                <label className="block text-gray-700 mb-1">Total Amount</label>
                <div className="text-2xl font-bold text-orange-500">
                  ₹{calcTotal()}
                </div>
              </div>

              <select
                name="time"
                value={formData.time}
                onChange={handleInput}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg"
              >
                <option value="">Select Time</option>
                <option value="10-16">10 AM – 4 PM</option>
                <option value="13-19">1 PM – 7 PM</option>
              </select>

              <input
                name="date"
                type="date"
                value={formData.date}
                onChange={handleInput}
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg"
              />

              <div ref={containerRef} className="relative">
                <div
                  onClick={() => setShowServices(v => !v)}
                  className="w-full px-4 py-3 bg-gray-200 border border-gray-300 rounded-lg flex justify-between items-center cursor-pointer"
                >
                  <span>Add More Services</span>
                  <ChevronDown className="w-5 h-5 text-gray-600" />
                </div>
                {showServices && (
                  <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-auto">
                    <label
                      className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={toggleAll}
                    >
                      <input
                        type="checkbox"
                        checked={formData.additionalServices.length === extras.length}
                        readOnly
                        className="w-5 h-5 text-purple-600 border-gray-300 rounded"
                      />
                      <span className="ml-2 font-medium">Select All</span>
                    </label>
                    {extras.map(svc => (
                      <label
                        key={svc}
                        className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => toggleExtra(svc)}
                      >
                        <input
                          type="checkbox"
                          checked={formData.additionalServices.includes(svc)}
                          readOnly
                          className="w-5 h-5 text-purple-600 border-gray-300 rounded"
                        />
                        <span className="ml-2">{svc}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-bold text-lg"
              >
                Submit Booking
              </button>

              <div className="flex items-center space-x-4 text-gray-600 text-sm pt-4 border-t">
                <Clock className="w-4 h-4" />
                <span>Drying Time: 60 Mins</span>
                <span>•</span>
                <span>Manpower: 2</span>
              </div>
            </form>
          </div>
        </div>
      </section>
      
    </div>
    <HomeCarpetTypes />
    <ChooseUs />
    <Homecarpetquestions />
    </div>
  );
}