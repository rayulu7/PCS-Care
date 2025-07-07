import React from 'react';

const logoData = [
  { src: "/img1.jpg",  alt: 'Client 1',  width: 199, height: 100 },
  { src: "/img2.jpg",  alt: 'Client 2',  width: 199, height: 100 },
  { src: "/img3.jpg",  alt: 'Client 3',  width: 199, height: 100 },
  { src: "/img4.jpg",  alt: 'Client 4',  width: 199, height: 100 },
  { src: "/img5.jpg",  alt: 'Client 5',  width: 199, height: 100 },
  { src: "/img6.jpg",  alt: 'Client 6',  width: 199, height: 100 },
  { src: "/img7.jpg",  alt: 'Client 7',  width: 199, height: 100 },
  { src: "/img8.jpg",  alt: 'Client 8',  width: 199, height: 100 },
  { src: "/img9.jpg",  alt: 'Client 9',  width: 199, height: 100 },
  { src: "/img10.jpg",  alt: 'Client 10',  width: 199, height: 100 },
  { src: "/img11.jpg",  alt: 'Client 11',  width: 199, height: 100 },
  { src: "/img12.jpg",  alt: 'Client 12',  width: 199, height: 100 },
  { src: "/img13.jpg",  alt: 'Client 13',  width: 199, height: 100 },

 
];

export default function ClientsCarousel() {
 
  const logos = [...logoData, ...logoData];

  return (
    <section className="py-0 bg-white">
      <h2 className="text-4xl font-semibold text-orange-600 mb-8 text-center">
        Our Clients
      </h2>

      <div className="overflow-hidden">
        <div className="slide-track flex animate-slide">
          {logos.map((logo, idx) => (
            <div key={idx} className="slide flex-shrink-0 p-4">
              <img
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="object-contain mx-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}