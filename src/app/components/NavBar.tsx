import Image from 'next/image';
import React from 'react';
import logo from '../../../public/logo.jpeg'

const NavBar = () => {
  return (
  <nav className="w-full mx-auto px-[5%] h-fit py-3 max-md:py-1  fixed flex bg-white align-middle z-10 top-0 left-0 right-0 flex-row space-x-[10%] justify-between items-center">
      <div className="relative w-14 h-14 max-md:w-10 max-md:h-10"> {/* Tailwind controls width & height */}
  <Image
    src="/logo.jpeg"
    alt="Logo"
    fill
    className="object-contain"
  />
</div>
        
        <div className="w-full flex-1 flex align-middle justify-center item-center space-x-[10%] font-semibold text-gray-700 text-lg 2xl:text-2xl max-md:text-base text-center">
          <a href="#" className="hover:text-sky-600 transition duration-150">
            Home
          </a>
          <a href="#" className="hover:text-sky-600 transition duration-150">
            Units
          </a>
          <a href="#" className="hover:text-sky-600 transition duration-150">
            Contact
          </a>
        </div>
      </nav>
  )
}

export default NavBar