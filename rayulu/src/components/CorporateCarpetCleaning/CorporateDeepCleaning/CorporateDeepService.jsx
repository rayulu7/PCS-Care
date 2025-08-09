

const CorporateDeepSer = () => {
  return (
    <section  className="bg-white py-12 mb-24">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-between px-[15px]">

        {/* LEFT IMAGE BLOCK */}
        <div className="w-[570px] h-[405px]">
          <img
            src= "/deepcleaning1.avif"
            alt="Deep Cleaning"
            className="w-[570px] h-[380px] object-cover rounded-md"
          />
        </div>
  


        {/* RIGHT TEXT BLOCK */}
        <div className="w-[570px] h-[380px] mt-10 md:mt-0 ml-0 md:ml-6">
          <h2
            className="text-[37px] font-bold mb-6"
            style={{
              color: '#1c1d3e',
              letterSpacing: '1px',
              textAlign: 'justify',
              margin: 0,
            }}
          >
            Manufacturing Units<br />
            and Industrial Deep<br />
            Cleaning Services:<br />
            
          </h2>

          <p
            className="text-[16px]"
            style={{
              fontWeight: 400,
              lineHeight: '27px',
              letterSpacing: '1px',
              fontFamily: '"Poppins", sans-serif',
              textAlign: 'justify',
              margin: 0,
            }}
          >
            Due to the presence of a lot of machinery and their continuous production work, Industries and Manufacturing Units contain a lot of dust, unhygienic materials, chemicals, etc. So, our way of approach and efforts towards cleaning will change
          </p>
          <p
            className="text-[16px]"
            style={{
              fontWeight: 400,
              lineHeight: '27px',
              letterSpacing: '1px',
              fontFamily: '"Poppins", sans-serif',
              textAlign: 'justify',
              margin: 0,
            }}
          >
             1. Dust and Debris Removal <br />
2. Floor Scrubbing with an industrial-grade machine to make your commercial space clean and neat <br />
3. Stain Removal from floor and tiles <br />
4. Ventilation System Cleaning<br />
5. And more.
          </p>
          <p className="text-[16px]"
            style={{
              fontWeight: 400,
              lineHeight: '27px',
              letterSpacing: '1px',
              fontFamily: '"Poppins", sans-serif',
              textAlign: 'justify',
              margin: 0,
            }}>Keep your office, commercial spaces, industrial and manufacturing units dust-free, clean and hygienic with our best and most professional commercial and office deep cleaning services. As our team has decades of expertise, we know how to treat any space to make it clean and shine.</p>
        </div>

        

      </div>
    </section>
  );
};

export default CorporateDeepSer;