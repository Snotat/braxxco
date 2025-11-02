import Image from 'next/image'
import React from 'react'
import { BiPhone } from 'react-icons/bi'
import { FaLocationDot } from 'react-icons/fa6'
import { IoMail } from 'react-icons/io5'
import { PiPhoneCallFill } from 'react-icons/pi'
import { RiMvAiLine } from 'react-icons/ri'

const page = () => {
  return (
    <div className="flex flex-col items-center w-full mt-20 max-md:mt-12">
      <section
        style={{ backgroundImage: "linear-gradient(rgba(0, 51, 102, 0.8), rgba(0, 51, 102, 0.8)), url('/hero_img.jpg')" }}
      className="relative w-full h-[60vh]  text-white flex flex-col justify-center bg-cover items-center text-center px-6">
        <div className="relative max-w-3xl">
          <h1 className="text-2xl md:text-4xl font-semibold mb-4">
            One Project, One Service, One Trusted Team.
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-sky-300">
            CONTACT US
          </h2>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="w-full bg-white py-16 px-6">
        <div className="grid md:grid-cols-3 max-w-6xl mx-auto text-center">
          {/* Visit Us */}
          <div className="flex flex-col items-center px-6 md:border-r border-neutral-700 last:border-none">
            <div className="bg-sky-100 p-4 rounded-full mb-4">
              <FaLocationDot className="text-sky-600 w-8 h-8"/> 
            </div>
            <h3 className="font-bold text-lg mb-2">VISIT US</h3>
            <p className="text-gray-600 mb-2">
              You can come visit us at our physical location
            </p>
            <a
              href="https://maps.google.com/?q=Plot+274,+Wole+Olanipekun+Street,+CBD,+Abuja"
              target="_blank"
              className="text-sky-700 font-medium hover:underline"
            >
              Plot 274, Wole Olanipekun Street, CBD, Abuja.
            </a>
          </div>

          {/* Call Us */}
          <div className="flex flex-col items-center px-6 md:border-r border-neutral-700 last:border-none">
            <div className="bg-sky-100 p-4 rounded-full mb-4">
              <PiPhoneCallFill className="text-sky-600 w-8 h-8" />
            </div>
            <h3 className="font-bold text-lg mb-2">CALL US</h3>
            <p className="text-gray-600 mb-2">
              Reach out to us through any of our mobile numbers
            </p>
            <div className="flex flex-col text-sky-600 font-medium">
              <a href="tel:+234812345678" className="hover:underline">
                +234812345678
              </a>
              <a href="tel:+234905736256" className="hover:underline">
                +234912345678
              </a>
            </div>
          </div>

          {/* Email Us */}
          <div className="flex flex-col items-center px-6">
            <div className="bg-sky-100 p-4 rounded-full mb-4">
              <IoMail className="text-sky-600 w-8 h-8" />
            </div>
            <h3 className="font-bold text-lg mb-2">CONTACT US</h3>
            <p className="text-gray-600 mb-2">
              Make enquiries from us through our email
            </p>
            <a
              href="admin@braxxco.com"
              className="text-sky-600 font-medium hover:underline"
            >
             admin@braxxco.com
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default page