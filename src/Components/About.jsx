


import michael from "../assets/michael.png";
import Nav from "./Nav";
import { FaFacebook } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { LiaLinkedin } from "react-icons/lia";
import { RxLinkedinLogo } from "react-icons/rx";

import { SiGmail } from "react-icons/si";


function About() {
    return (
      <>
        {location.pathname === "/" ? "" : <Nav />}
        <section
          id="about"
          className="mx-0 bg-custom-gradient-light dark:bg-custom-gradient-dark text-slate-800 dark:text-white"
        >
          <h2 className="text-center font-extrabold text-[2rem]">ABOUT ME</h2>
          <div className="px-5 md:px-20">
            <hr className="border-[#38bdf8]" />
          </div>
          <div className="md:px-28">
            <div className="flex flex-col gap-5 md:flex-row md:py-5 py-5 ">
              <div className="flex justify-center bg-slate-500- md:block md:relative place-content-center items-center">
                <img
                  src={michael}
                  alt=""
                  className="rounded-full w-4/5 bg-slate-100 dark:bg-slate-800 md:w-full md:rounded-xl "
                />
                <div className="bg-slate-100 dark:bg-slate-800 items-center hidden md:flex place-content-center rounded-md mt-2">
                  <div className="flex place-content-center gap-4 py-2 text-[#38bdf8] text-4xl items-center">
                    <a href="#">
                      <FaSquareFacebook />
                    </a>
                    <a href="#">
                      <FiInstagram />
                    </a>

                    <a href="#" className="text-5xl-">
                      <RxLinkedinLogo />
                    </a>
                    <a href="#">
                      <SiGmail />
                    </a>
                  </div>
                </div>
              </div>
              <div className="px-10 text-lg text-center items-center md:text-[22px] pb-5  md:text-left md:w-[50rem]">
                <p>
                  Greetings! I&apos;m Michael Tom, a passionate web developer
                  and graphic designer with over a year of experience in
                  crafting visually appealing websites and stunning graphic
                  designs. My portfolio showcases my journey and expertise in
                  these fields.
                </p>
              </div>
            </div>
          </div>
          <div className="flex place-content-center gap-4 py-2 text-[#38bdf8] text-4xl md:hidden items-center">
            <a href="#">
              <FaFacebook />
            </a>
            <a href="#">
              <FiInstagram />
            </a>

            <a href="#" className="text-5xl">
              <LiaLinkedin />
            </a>
            <a href="#">
              <SiGmail />
            </a>
          </div>
        </section>
      </>
    );
}

export default About;