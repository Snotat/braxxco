import Image from 'next/image'
import React from 'react'
import { BsInstagram, BsTwitterX } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa6'


const Footer = () => {
  return (
    <div className='w-full py-5 flex  align-middle shadow-lg text-base space-y-4 font-semibold justify-center items-center  flex-col bg-neutral-50'>
        
              <div className="relative w-14 h-14 max-md:w-10 max-md:h-10"> {/* Tailwind controls width & height */}
          <Image
            src="/logo.jpeg"
            alt="Logo"
            fill
            className="object-contain"
          />
        </div>
        <div className="flex flex-col text-center gap-0 tracking-tighter align-middle justify-center">
            <span className='font-bold text-center justify-center align-middle'>
    Office Address
</span>
<span className='font-light'>
   Plot 247, Wole Olanipekun Street, CBD, Abuja
</span>
        </div>

<div className=" flex flex-row gap-3">
    <BsInstagram/>
   <FaFacebookF />
    <BsTwitterX/>
</div>
    </div>
  )
}

export default Footer