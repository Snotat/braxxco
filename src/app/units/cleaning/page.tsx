import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
const cleaningServices = [
  { 
    title: "Office/Industrial Cleaning", 
    img: "/clean_1.webp", 
    desc: "Comprehensive cleaning services tailored for corporate offices, factories, and industrial sites to maintain a healthy and compliant workspace.", 
  }, 
  { 
    title: "General House Cleaning", 
    img: "/clean_2.jpg", 
    desc: "Thorough cleaning of residential properties, including dusting, vacuuming, mopping, and sanitizing common areas and bedrooms.", 
  }, 
  { 
    title: "Garbage Evacuation & Environmental Sanitation", 
    img: "/clean_3.jpg", 
    desc: "Scheduled waste removal, secure disposal, and complete sanitation services to keep neighborhoods and commercial areas clean and hygienic.", 
  }, 
  { 
    title: "Drainage Cleaning & Disinfections", 
    img: "/clean_4.jpg", 
    desc: "Professional clearing of blocked drains, sewage lines, and gutters, followed by powerful disinfection to eliminate pathogens and odors.", 
  }, 
  { 
    title: "Specialized Roofs & Windows Cleaning", 
    img: "/clean_5.jpg", 
    desc: "Safe and effective cleaning for high-level structures, including deep cleaning of roofs, gutters, and multi-story exterior windows.", 
  }, 
  { 
    title: "Real Estate Cleaning", 
    img: "/clean_6.jpg", 
    desc: "Detailed cleaning services for properties before listing, during viewings, and after a sale (move-in/move-out cleaning).", 
  }, 
  { 
    title: "Pre/Post Construction Cleaning", 
    img: "/clean_7.jpg", 
    desc: "Removal of construction debris, dust, and residue, preparing newly built or renovated spaces for final inspection and occupancy.", 
  }, 
  { 
    title: "Structural Cleaning & Painting", 
    img: "/clean_8.avif", 
    desc: "Maintenance and restoration services, including deep cleaning of building exteriors, walls, and professional repainting services.", 
  }, 
]

const otherUnits = [
  {
    title: "Agricultural and Allied Unit",
    img: "/agric_consult.jpg",
    desc: "We provide agricultural consultancy, mechanized farming support, and supply services.",
  },
  {
    title: "Consultancy Unit",
    img: "/consultant.jpg",
    desc: "We provide business consulting and strategy development.",
  },
  {
    title: "Information and Communication Technology (ICT) Unit",
    img: "/ict_consult.png",
    desc: "We offer ICT services including web development, networking, and software development.",
  },
];
const page = () => {
  return (
     <div className="min-h-screen bg-gray-50  mt-20 max-md:mt-12">
      {/* Hero Section */}
      <section   style={{ backgroundImage: "linear-gradient(rgba(0, 51, 102, 0.8), rgba(0, 51, 102, 0.8)), url('/consultant.jpg')" }} className="bg-cover bg-top text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-3">Cleaning Unit</h1>
        <p className="text-lg">Our Cleaning Unit has the following Services.</p>
      </section>

      {/* Consultancy Grid */}
      <section className="h-full max-w-7xl space-x-3 space-y-3 mx-auto px-4 py-10 justify-center item-center flex flex-row flex-wrap">
        {cleaningServices.map((item, i) => (
          <div
            key={i}
            className="bg-white shadow-md hover:shadow-lg w-full flex flex-1 flex-col  min-w-60 max-w-80  rounded-md overflow-hidden transition"
          >
            <Image
              src={item.img}
              alt={item.title}
              width={500}
              height={300}
              className="object-cover w-full h-48"
            />
            <div className="p-3">
              <h3 className="font-bold text-gray-800 text-sm mb-1">{item.title}</h3>
              <p className="text-gray-600 text-xs mb-1">{item.desc}</p>
              
            </div>
          </div>
        ))}
        <div className="bg-blue-950 shadow-md hover:shadow-lg rounded-md overflow-hidden transition flex-1 min-w-96 min-h-72 flex flex-row align-middle items-center justify-center max-w-4xl">
            <span className='w-full p-5 flex flex-col my-auto self-center'>  <p className="text-white text-2xl max-md:text-xl font-bold mb-4">You Want <br/> to Experience <br/> the Best Service</p>
             <Link href='/contact'> <button className="text-white bg-sky-600 float-left w-fit p-2 px-4 mt-0 rounded-xs hover:bg-gray-700 hover:text-white font-semibold">
      Contact Us
    </button></Link></span>
           <div className="relative w-full h-full"> <Image
                src='/consultant.png'
                alt='consult us' 
               fill
                className="object-cover"
              /></div> 
        </div>
      </section>

      {/* Divider */}
      <hr className="border-t border-gray-300 max-w-6xl mx-auto my-12" />

      {/* Other Units */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <h2 className="text-3xl font-extrabold mb-8 text-gray-900">OTHER UNITS</h2>
        <div className="h-full max-w-7xl space-x-3 space-y-3 mx-auto px-4 py-10 justify-center item-center flex flex-row flex-wrap">
          {otherUnits.map((unit, i) => (
            <div
              key={i}
              className="bg-white shadow-md hover:shadow-lg w-full flex flex-1 flex-col  min-w-60 max-w-80  rounded-md overflow-hidden transition"
            >
              <Image
                src={unit.img}
                alt={unit.title} 
                width={500}
                height={300}
                className="object-cover w-full h-48"
              />
              <div className="p-3">
                <h3 className="font-semibold mb-2">{unit.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{unit.desc}</p>
              <button className="text-white bg-sky-600 float-left w-fit p-2 px-4 mt-0 rounded-xs hover:bg-gray-700 hover:text-white font-semibold">
      Learn More
    </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default page