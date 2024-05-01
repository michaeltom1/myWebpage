// import { FaCircleMinus, FaCirclePlus } from "react-icons/fa6";
import { MdWork } from "react-icons/md";
import { FaPaintbrush } from "react-icons/fa6";
import { FaPaintBrush } from "react-icons/fa";
import { BsBarChartFill } from "react-icons/bs";
import { FaCode } from "react-icons/fa";

import { BiBarChartAlt } from "react-icons/bi";
import { BsPersonVideo } from "react-icons/bs";
import { GoPersonFill } from "react-icons/go";
import { IoMdPerson } from "react-icons/io";

function Services() {
  return (
    <>
      <div>
        <section id="services" className="pt-16 services">
          <div className="text-center flex items-center font-extrabold place-content-center">
            <h2 className="text-3xl m-3 text-[#35c2ff]">
              <MdWork />
            </h2>
            <h2 className=" text-[2rem] flex items-center">MY SERVICES</h2>
          </div>
          <hr className="border-[#38bdf8]" />

          <div className=" sm:grid sm:grid-cols-2- md:grid-cols-3 ">
            <div className="service-box bg-slate-800 text-center justify-center flex-col flex items-center rounded-2xl border-sky-400 border-y-4 hover:my-4 place-content-center transition-all transform  py-5 my-5 sm:mx-2 shadow-colored">
              <span className="text-[3rem]">
                <FaCode color="#38bdf8" />
              </span>
              <div className="text">
                <h3 className="font-extrabold text-2xl">Web Development</h3>
                <p className="px-4">
                  I am a Frontend Web developer dedicated to crafting visually
                  stunning and functionally robust digital experiences
                </p>
              </div>
              <button className="mt-2">
                <a href="servicePage">Read more</a>
              </button>
            </div>
            <div className="service-box bg-slate-800 text-center justify-center flex-col flex items-center rounded-2xl border-sky-400 border-y-4 hover:my-4 place-content-center transition-all transform py-5 my-5 sm:mx-2 shadow-colored">
              <span className="text-[3rem]">
                <FaPaintBrush color="#38bdf8" />
              </span>
              <div className="text">
                <h3 className="font-extrabold text-2xl">Graphic Design</h3>
                <p className="px-4">
                  I do all kinds of Graphic Design. Ranging from Banners,
                  Flyers, Certificates, Business cards etc.
                </p>
              </div>
              <button className="mt-2">
                <a href="servicePage#graphicDesign">Read more</a>
              </button>
            </div>
            <div className="service-box bg-slate-800 text-center justify-center flex-col flex items-center rounded-2xl border-sky-400 border-y-4 hover:my-4 place-content-center transition-all transform py-5 my-5 sm:mx-2 shadow-colored">
              <span className="text-[3rem] shadow-2xl shadow-[#38bdf8]">
                <BsBarChartFill color="#38bdf8" />
              </span>
              <div className="text">
                <h3 className="font-extrabold text-2xl">Digital Marketing</h3>
                <p>I have expertices in digital Marketing.</p>
              </div>
              <button className="mt-2">
                <a href="servicePage">Read more</a>
              </button>
            </div>
            <div className="service-box bg-slate-800 text-center justify-center flex-col flex items-center rounded-2xl border-sky-400 border-y-4 hover:my-4 place-content-center transition-all transform py-5 my-5 sm:mx-2 flex-grow col-span-3 shadow-colored">
              <span className="text-[3rem] bg-transparent">
                <IoMdPerson />
              </span>
              <div className="text">
                <h3 className="font-extrabold text-2xl">Web Development</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              </div>
              <button className="mt-2">
                <a href="servicePage">Read more</a>
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Services;
