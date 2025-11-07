import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
const itServices = [
  { 
    title: "Website Design, Development & Maintenance", 
    img: "/ict_1.jpg", // Replaced /agric_1.jpg
    desc: "Crafting modern, responsive, and secure websites from concept to launch, along with comprehensive maintenance packages to ensure optimal performance and uptime.", 
  }, 
  { 
    title: "Office Automation & Administrative Support", 
    img:"/ict_2.jpg",
    desc: "Implementing digital tools and processes (e.g., DMS, CRM, workflow automation) to streamline office tasks, boost efficiency, and provide reliable virtual administrative assistance.", 
  }, 
  { 
    title: "Supplying & Installation of Computers and Accessories", 
    img:"/ict_3.jpg",
    desc: "Sourcing, supplying, and professionally installing a wide range of computer hardware, peripherals, and essential accessories for businesses and educational institutions.", 
  }, 
  { 
    title: "Supplying & Installation of CCTV Systems", 
    img: "/ict_4.webp",
    desc: "Providing high-definition Closed-Circuit Television (CCTV) cameras and advanced surveillance systems, including professional installation and configuration for maximum security coverage.", 
  }, 
  { 
    title: "Design & Development of Computer Laboratories", 
    img: "/ict_5.jpeg",
    desc: "Expert design, setup, and equipping of modern computer labs and training centers, optimized for learning, efficiency, and network connectivity in educational and corporate settings.", 
  },
  {
    title: 'Local Area Networking (LAN) Solutions',
    img: "/ict_6.jpg",
    desc: "Comprehensive LAN installation, configuration, and management services to build fast, reliable, and secure internal networks for seamless data sharing and communication.",
  },
];

const otherUnits = [
  {
    title: "Agricultural and Allied Unit",
    img: "/agric_consult.jpg",
    desc: "We provide agricultural consultancy, mechanized farming support, and supply services.",
  },
  {
    title: "Cleaning and Facility Management Unit",
    img: "/cleaner_consult.png",
    desc: "Professional cleaning and facility management services for homes and businesses.",
  },
  {
    title: "Consultancy Unit",
    img: "/consultant.jpg",
    desc: "We provide business consulting and strategy development.",
  },
];

const page = () => {
  return (
     <div className="min-h-screen bg-gray-50  mt-20 max-md:mt-12">
      {/* Hero Section */}
      <section   style={{ backgroundImage: "linear-gradient(rgba(0, 51, 102, 0.8), rgba(0, 51, 102, 0.8)), url('/consultant.jpg')" }} className="bg-cover bg-top text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-3">ICT Unit</h1>
        <p className="text-lg">Our ICT Unit has the following Services.</p>
      </section>

      {/* Consultancy Grid */}
      <section className="h-full max-w-7xl space-x-3 space-y-3 mx-auto px-4 py-10 justify-center item-center flex flex-row flex-wrap align-middle">
        {itServices.map((item, i) => (
          <div
            key={i}
            className="bg-white shadow-md hover:shadow-lg w-full flex flex-1 flex-col  min-w-60 max-w-80  rounded-md overflow-hidden transition mx-auto"
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
        <div className="bg-blue-950 shadow-md hover:shadow-lg rounded-md overflow-hidden transition flex-1 min-w-80 w-full min-h-72 w-full flex flex-row align-middle items-center justify-center max-w-6xl">
            <span className='w-full p-5 flex flex-col my-auto self-center'>  <p className="text-white text-2xl max-md:text-xl font-bold mb-4">You Want <br/> to Experience <br/> the Best Service</p>
             <Link href='/contact'> <button className="text-white bg-sky-600 float-left w-fit p-2 px-4 mt-0 rounded-xs hover:bg-gray-700 hover:text-white font-semibold">
      Contact Us
    </button></Link></span>
           <div className="relative w-full h-full overflow-x-hidden"> <Image
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