import React from 'react'

const HeroSection = () => {
  return (
    <div className="relative bg-cover bg-center h-[500px] mt-20 max-md:mt-12 w-full flex items-center justify-center text-white" 
          style={{ backgroundImage: "linear-gradient(rgba(0, 51, 102, 0.8), rgba(0, 51, 102, 0.8)), url('/hero_img.jpg')" }}>
      
      <div className="text-center px-4 max-w-4xl">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-2">
          ONE TEAM YOU CAN TRUST FOR EVERYTHING YOUR BUSINESS NEEDS
        </h1>
        <p className="text-lg sm:text-xl font-light mb-8">
          We build, supply, register, clean, move, and manage; so you never have to chase multiple vendors again.
        </p>
        
        <div className="flex justify-center space-x-4">
          <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-md hover:bg-white hover:text-blue-600 transition duration-300">
            Learn More
          </button>
          <button className="px-8 py-3 bg-blue-500 text-white font-semibold rounded-md border-2 border-blue-500 hover:bg-blue-600 transition duration-300">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  )
}

export default HeroSection