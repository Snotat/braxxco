'use client'

import Image from 'next/image';
import React, { useState } from 'react';
import logo from '../../../public/logo.png'
import Link from 'next/link';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';

const NavBar = () => {
    const [unitsec, setUnitsec] =useState(false)
  return (
  <nav className="w-full mx-auto px-[5%] border-b border-neutral-950/10 h-fit py-3 max-md:py-1 shadow-lg fixed flex bg-white align-middle z-100 top-0 left-0 right-0 flex-row space-x-[10%] justify-between items-center">
      <div className="relative w-14 h-14 max-md:w-10 max-md:h-10"> {/* Tailwind controls width & height */}
  <Image
    src="/logo.png"
    alt="Logo"
    fill
    className="object-contain cursor-pointer"
  />
</div>
        
        <div className="w-full flex-1 flex align-middle justify-center item-center space-x-[10%] font-semibold text-gray-700 text-lg 2xl:text-2xl max-md:text-base text-center">
          <Link href="/" className="hover:text-sky-600 transition duration-150 cursor-pointer">
            Home
          </Link>
          <div className=" whitespace-nowrap text-nowrap transition duration-150 relative">
             <span onClick={()=>setUnitsec(!unitsec)} className='hover:text-sky-600 flex flex-row align-middle items-center justify-center cursor-pointer'  > <span>Units</span>  <span className=''>{unitsec?<IoMdArrowDropup  className='ml-1' />:<IoMdArrowDropdown className='ml-1' />}</span></span>
           { unitsec&&<div className='w-fit h-fit flex flex-col space-y-3 border border-neutral-950/10 bg-white top-10 shadow-lg  -right-5 text-start align-middle rounded-sm justify-center p-4 pr-6 text-nowrap  absolute'>
                <Link href='/units/consultancy' className='hover:text-sky-600 '>Consultancy Unit</Link>
                <Link href='/units/agric' className='hover:text-sky-600 ' >Agriculture Unit</Link>
                <Link href='/units/cleaning' className='hover:text-sky-600 ' >Cleaning Unit</Link>
                <Link href='/units/ict' className='hover:text-sky-600 ' >ICT Unit</Link>
             </div>
        }   </div>
          <Link href="/contact" className="hover:text-sky-600  cursor-pointer transition duration-150">
            Contact
          </Link>
        </div>
      </nav>
  )
}

export default NavBar