import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
const agriculturalServices = [
  { 
    title: "Farming of Cereals and Grains", 
    img: "/agric_1.jpg", 
    desc: "Specialized cultivation and harvesting techniques for high-yield cereal crops like maize, rice, and wheat, ensuring quality produce for large-scale supply.", 
  }, 
  { 
    title: "Orchard Development", 
    img: "/agric_2.webp", 
    desc: "Comprehensive services for establishing, managing, and maintaining fruit orchards, from initial land preparation to successful tree maturity and harvesting.", 
  }, 
  { 
    title: "Agricultural Produce Processing and Packaging", 
    img: "/agric_3.jpg", 
    desc: "State-of-the-art facilities and processes for sorting, cleaning, quality control, and packaging of raw produce into consumer-ready or wholesale formats.", 
  }, 
  { 
    title: "Agricultural Produce Marketing", 
    img: "/agric_4.jpeg", 
    desc: "Strategic market access, branding, and distribution services to connect farm produce directly to wholesalers, retailers, and final consumers locally and globally.", 
  }, 
  { 
    title: "Agricultural and Allied Industries", 
    img: "/agric_5.webp", 
    desc: "Support and supply chain management for businesses across the agriculture ecosystem, including feed, fertilizer, farm machinery, and agro-chemical services.", 
  }, 
  { 
    title: "General Agricultural Business Consultancy Services", 
    img: "/agric_6.jpg", 
    desc: "Providing expert advice on farm management, financial planning, climate-smart agriculture, and optimization strategies to maximize farm profitability and sustainability.", 
  }, 
];

const otherUnits = [
 {
    title: "Cleaning and Facility Management Unit",
    img: "/cleaner_consult.png",
    desc: "Professional cleaning and facility management services for homes and businesses.",
  link:'/units/cleaning'
  },
  {
    title: "Consultancy Unit",
    img: "/consultant.jpg",
    desc: "We provide business consulting and strategy development.",
    link:'/units/consultancy'
  },
  {
    title: "Information and Communication Technology (ICT) Unit",
    img: "/ict_consult.png",
    desc: "We offer ICT services including web development, networking, and software development.",
    link:'/units/ict'
  },
];
const page = () => {
  return (
     <div className="min-h-screen bg-gray-50  mt-20 max-md:mt-12">
      {/* Hero Section */}
      <section   style={{ backgroundImage: "linear-gradient(rgba(0, 51, 102, 0.8), rgba(0, 51, 102, 0.8)), url('/consultant.jpg')" }} className="bg-cover bg-top text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-3">Agriculture Unit</h1>
        <p className="text-lg">Our Agriculture Unit has the following Services.</p>
      </section>

      {/* Consultancy Grid */}
      <section className="h-full max-w-7xl space-x-3 space-y-3 mx-auto px-4 py-10 justify-center item-center flex flex-row flex-wrap">
        {agriculturalServices.map((item, i) => (
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
        <div className="bg-blue-950 shadow-md hover:shadow-lg rounded-md overflow-hidden transition flex-1 min-w-96 min-h-72 w-full flex flex-row align-middle items-center justify-center max-w-4xl">
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
        <div className="h-full max-w-7xl space-x-3 space-y-3 mx-auto px-4 py-10 justify-center item-center flex flex-row flex-wrap ">
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
           <Link href={unit.link}>   <button className="text-white bg-sky-600 float-left w-fit p-2 px-4 mt-0 rounded-xs hover:bg-gray-700 hover:text-white font-semibold">
      Learn More
    </button></Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default page