

const CorporateMarbleService = () => {
  return (
    <section id="mp1" className="bg-white py-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-between px-[15px]">

        {/* LEFT TEXT BLOCK */}
        <div className="w-[570px] h-[405px]">
          <h2
            className="text-[37px] font-bold mb-6"
            style={{
              color: '#1c1d3e',
              letterSpacing: '1px',
              textAlign: 'justify',
              margin: 0,
            }}
          >
            Professional Marble<br />
            Polishing Services for<br />
            Industry and Manufacturing<br />
            Units:
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
            Industries and Manufacturing units have floors that are not similar to the corporate offices due to their specific purposes. Moreover, industry and manufacturing unit floors get dirty sooner compared to other corporate offices, and therefore require frequent floor cleaning. To remove dirt, remove scratches, kill allergens from your floor, you need a professional marble cleaning company and team like PCS Care.
          </p>
        </div>

        {/* RIGHT IMAGE BLOCK */}
        <div className="w-[570px] h-[380px] mt-10 md:mt-0 ml-0 md:ml-6">
          <img
            src= "/polish_marble_service.jpg"
            alt="Marble Polishing"
            className="w-[570px] h-[380px] object-cover rounded-md"
          />
        </div>

      </div>
    </section>
  );
};

export default CorporateMarbleService;