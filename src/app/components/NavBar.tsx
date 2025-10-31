import Image from 'next/image';
import React from 'react';
import logo from '../../../public/logo.jpeg'

const NavBar = () => {
  return (
  <nav className="w-full mx-auto px-[5%] h-fit py-3  flex flex-row space-x-[10%] justify-between items-center">
      <Image src='/logo.jpeg' width={50} height={50} className=" object-contain" alt=""  />
        
        <div className="w-full flex-1 flex align-middle justify-center space-x-[10%] font-semibold text-gray-700">
          <a href="#" className="hover:text-blue-600 transition duration-150">
            Home
          </a>
          <a href="#" className="hover:text-blue-600 transition duration-150">
            Departments
          </a>
          <a href="#" className="hover:text-blue-600 transition duration-150">
            Contact Us
          </a>
        </div>

      </nav>
  )
}

export default NavBar