// src/components/CorporateServicesSection.jsx
import React from 'react'


export default function CorporateAbout() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center gap-12 items-start">

        {/* LEFT: IMAGE (470×775) */}
        <div className="relative w-[470px] h-[775px]">
          <img
            src= "./corporate_index.avif"
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
        <div className="relative rounded-lg overflow-hidden p-8">
          {/* Label */}
          <span className="font-poppins text-[15px] text-[#FFA500] block mb-2">
            About Company
          </span>

          {/* Heading */}
          <h2 className="font-poppins font-bold text-[37px] leading-[60px] text-[#1C1D3E] mb-6">
            All Corporate / Industrial Cleaning
            <br />
            &amp; Maintenance Services under one roof
          </h2>

          {/* First paragraph (570×218) */}
          <p
            className="
              font-poppins text-[15px] leading-[27px] text-black text-justify
              w-[570px] h-[218px]
              pt-[27px] pb-[29px] m-0
            "
          >
            PCS Care was established with the aim of providing the state-of-the-art services to
            corporate clients using the best machinery and chemicals available. In an otherwise
            unorganized sector, we provide professional service so as to take best care of your
            carpets, upholstery, floors etc. using eco-friendly, bio-degradable chemicals.
          </p>

          {/* “19+ Years” + second paragraph (600×243) */}
          <div className="flex items-start">
            {/* Callout */}
            <div className="flex-shrink-0 text-center mr-6">
              <span className="font-poppins block text-[80px] leading-none text-[#FFA500]">
                19+
              </span>
              <span className="font-poppins text-[30px] font-bold text-[#1C1D3E] block mt-2">
                Years of
                <br />
                Experience
              </span>
            </div>

            {/* Second paragraph */}
            <p
              className="
                font-poppins text-[15px] leading-[27px] text-black text-justify
                w-[600px] h-[243px]
                mt-[10px] mx-[15px] mb-0
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