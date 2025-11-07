import Image from "next/image";
import HeroSection from './components/HeroSection';
import { FaBriefcase } from "react-icons/fa";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { FaPeopleGroup } from "react-icons/fa6";

export default function Home() {
  return (
        <main className="flex flex-col items-center">
<HeroSection/>

      {/* About Section */}
      <section className="py-16 px-6 max-w-6xl text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">WELCOME TO BRAXXCO-REX</h2>
        <p className="text-gray-700 leading-relaxed">
          We are: Gen. Contractor, Suppliers of Goods, Company Reg, TCC, SCUML, PENCOM, ITF, NSITF, NMDPRA License & Comp Profile development,
          ICT, Media & Publicity Consults, Logistics, Project Management & Monitoring, Property Agent, Cleaning, Landscape, and more.
        </p>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-16 px-6 w-full">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">WHY CHOOSE US</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Quality Service",
              desc: "We don’t just complete projects, we deliver them with excellence and dedication.",
              icon:<FaBriefcase  className="w-10 h-10 mx-auto text-gray-700" />
            },
            {
              title: "Customer Service",
              desc: "We value every client like a long-term partner and ensure your experience exceeds expectations.",
              icon:<TfiHeadphoneAlt className="w-10 h-10 text-gray-700 mx-auto" />
            },
            {
              title: "Expert Team",
              desc: "Our professionals are well-trained and experienced across multiple service areas.",
              icon:<FaPeopleGroup  className="w-10 h-10 mx-auto text-gray-700" />
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white shadow-md rounded-xs p-6 text-center hover:shadow-lg transition"
            >
              <div className="text-blue-600 text-4xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 max-w-6xl text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-10">OUR UNITS</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              title: "Consultancy Unit",
              desc: "We provide business consulting and strategy development.",
              image:'/consultant.jpg'
            },
            {
              title: "Agricultural and Allied Unit",
              desc: "Focusing on agribusiness, farm management, and production.",
              image:'/agric_consult.jpg'
            },
            {
              title: "Cleaning and Facility Management Unit",
              desc: "Offering professional cleaning and maintenance services.",
              image:'/cleaner_consult.png'
            },
            {
              title: "ICT Unit",
              desc: "Handling IT infrastructure, web services, and software development.",
              image:'/ict_consult.png'
            },
          ].map((unit, i) => (
          <div
  key={i}
  className="bg-white w-full shadow-md rounded-xs overflow-hidden hover:shadow-lg transition pb-5"
>
  <div className="relative w-full h-48">
    <Image
      src={unit.image}
      alt="consultant"
      fill
      className="object-cover"
    />
  </div>

  <div className="p-3 flex flex-col ">
    <h3 className="font-semibold mb-2 text-sky-600  tracking-tighter">{unit.title}</h3>
    <p className="text-gray-600 text-sm mb-4 tracking-tighter" >{unit.desc}</p>
    <button className="text-white bg-sky-600 float-left w-fit p-2 px-4 mt-0 rounded-xs hover:bg-gray-700 hover:text-white font-semibold">
      Learn More
    </button>
  </div>
</div>
          ))}
        </div>
      </section>
      <section className="bg-gray-50 py-16 px-6 w-full">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          WHAT OUR CUSTOMERS ARE SAYING
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[1, 2, 3].map((_, i) => (
            <div key={i} className="bg-white rounded-xl shadow-md p-6">
              <p className="text-gray-600 mb-6">
                Through them, we got all our offices cleaned. It was fast, affordable and also well done.
              </p>
              <div className="flex items-center gap-4">
               <Image
                  src="/ceo.jfif"
                  alt="Logo"
                  width={50}
                  height={50}
                  className="rounded-full object-contain bg-neutral-500"
                />
                <div>
                  <p className="font-semibold">Mr. Ayodele Joshua</p>
                  <p className="text-sm text-gray-500">CEO Proximity, Inc.</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section  style={{ backgroundImage: "linear-gradient(rgba(0, 51, 102, 0.8), rgba(0, 51, 102, 0.8)), url('/contact_banner.jpg')" }} className="w-full bg-cover text-white text-center py-20 px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Reach Out to Us</h2>
        <p className="text-lg mb-8 max-w-xl mx-auto">
          Let’s handle all your company’s projects for you at an affordable cost with quality delivery.
        </p>
        <button className="bg-white text-blue-900 font-semibold px-6 py-3 rounded-xs hover:bg-gray-100">
          Contact Us
        </button>
      </section>
    </main>
  );
}
