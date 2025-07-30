
import React, { useState, useRef, useEffect } from 'react'

import { Clock, ChevronDown } from 'lucide-react'
import HomeMarbleHeading from '../HomeMarblePolishing/HomeMarbleHeading'
import HomeMarbleTerms from './HomeMarbleTerms'


export default function HomeMarble() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    quantity: 1,
    time: '',
    date: ''
  })
  const [showExtras, setShowExtras] = useState(false)
  const extras = ['Sofa Cleaning', 'Mattress Cleaning', 'Chairs & Dining Chairs']
  const containerRef = useRef(null)

  useEffect(() => {
    const handler = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setShowExtras(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const handleInput = (e) =>
    setFormData(f => ({ ...f, [e.target.name]: e.target.value }))
  const changeQty = (dir) =>
    setFormData(f => ({ ...f, quantity: Math.max(1, f.quantity + dir) }))
  const calcTotal = () => 1499 * formData.quantity
  const onSubmit = (e) => {
    e.preventDefault()
    alert('Thank you! We will contact you soon.')
  }

  return (
    <>
    <HomeMarbleHeading />
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         
          <div className="bg-white rounded-2xl shadow-lg border-l-4 border-orange-500 overflow-hidden">
         
            <img
              src= "/marble.png"
              alt="Marble Polishing"
              className="w-full h-auto object-cover"
            />

           
            <div className="p-8 space-y-6">
              <h3 className="text-2xl font-bold text-gray-800">
                Our Process
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>
                  <strong>Stage 1</strong> – Prior site inspection.
                </li>
                <li>
                  <strong>Stage 2</strong> – Grinding using diamond pads to remove lippage.
                </li>
                <li>
                  <strong>Stage 3</strong> – Honing to remove minor scratches and restore shine.
                </li>
                <li>
                  <strong>Stage 4</strong> – Polishing powder application for high gloss.
                </li>
              </ul>
            </div>
          </div>

        
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Contact us <span className="text-orange-500">(Hyderabad only)</span>
            </h3>

            <button className="w-full mb-6 bg-yellow-300 rounded-lg py-3 font-semibold text-white">
              Price on Site Visit
            </button>

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
                  onClick={() => setShowExtras(v => !v)}
                  className="w-full px-4 py-3 bg-gray-200 border border-gray-300 rounded-lg flex justify-between items-center cursor-pointer"
                >
                  <span>Add More Services</span>
                  <ChevronDown className="w-5 h-5 text-gray-600" />
                </div>
                {showExtras && (
                  <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-auto">
                    {extras.map(svc => (
                      <label
                        key={svc}
                        className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => {
                          setFormData(fd => {
                            const has = fd.additionalServices?.includes(svc)
                            return {
                              ...fd,
                              additionalServices: has
                                ? fd.additionalServices.filter(s => s !== svc)
                                : [...(fd.additionalServices || []), svc]
                            }
                          })
                        }}
                      >
                        <input
                          type="checkbox"
                          checked={formData.additionalServices?.includes(svc)}
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

             
               
              
            </form>
          </div>
        </div>
      </div>
    </section>
    <HomeMarbleTerms />
    </>
  )
}