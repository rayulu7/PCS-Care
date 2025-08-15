// src/components/CorporateServicesSection.jsx
import React from 'react'

export default function CorporateAbout() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center gap-12 items-start">

        {/* LEFT: IMAGE (470×775) */}
        <div className="relative w-full md:w-[470px] h-[400px] md:h-[775px]">
          <img
            src="./corporate_index.avif"
            alt="Industrial / Corporate Cleaning"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
          {/* subtle striped overlay */}
          <div
            className="absolute inset-0 rounded-lg pointer-events-none"
            style={{
              background:
                'repeating-linear-gradient(45deg, rgba(255,255,255,0.2), rgba(255,255,255,0.2) 10px, transparent 10px, transparent 20px)'
            }}
          />
        </div>

        {/* RIGHT: CONTENT */}
        <div className="relative rounded-lg overflow-hidden p-4 md:p-8 w-full">
          {/* Label */}
          <span className="font-poppins text-[15px] text-[#FFA500] block mb-2">
            About Company
          </span>

          {/* Heading */}
          <h2 className="font-poppins font-bold text-2xl sm:text-3xl md:text-[37px] leading-[1.3] md:leading-[60px] text-[#1C1D3E] mb-6">
            All Corporate / Industrial Cleaning
            <br className="hidden md:block" />
            &amp; Maintenance Services under one roof
          </h2>

          {/* First paragraph */}
          <p
            className="
              font-poppins text-[15px] leading-[27px] text-black text-justify
              w-full md:w-[570px]
              pt-[27px] pb-[29px] m-0
            "
          >
            PCS Care was established with the aim of providing the state-of-the-art services to
            corporate clients using the best machinery and chemicals available. In an otherwise
            unorganized sector, we provide professional service so as to take best care of your
            carpets, upholstery, floors etc. using eco-friendly, bio-degradable chemicals.
          </p>

          {/* "19+ Years" + second paragraph */}
          <div className="flex flex-col sm:flex-row items-start mt-8">
            {/* Callout */}
            <div className="flex-shrink-0 text-center mb-6 sm:mb-0 sm:mr-6">
              <span className="font-poppins block text-6xl sm:text-[80px] leading-none text-[#FFA500]">
                19+
              </span>
              <span className="font-poppins text-2xl sm:text-[30px] font-bold text-[#1C1D3E] block mt-2">
                Years of
                <br />
                Experience
              </span>
            </div>

            {/* Second paragraph */}
            <p
              className="
                font-poppins text-[15px] leading-[27px] text-black text-justify
                w-full sm:w-auto
                mt-0 sm:mt-[10px] mx-0 sm:mx-[15px] mb-0
              "
            >
              Established in the year 2005 by professionals with vast experience in facility
              management, our well-trained staff are providing services to large corporate
              companies in Hyderabad, Bangalore, Mumbai, Pune and Chennai. Presently we are
              serving more than 400 corporate and commercial establishments.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}