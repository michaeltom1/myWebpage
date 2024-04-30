import {
  MdCall,
  MdGroup,
  MdMail,
  MdOutlineDriveFileRenameOutline,
} from "react-icons/md";
import { MdWork } from "react-icons/md";

import certificate from "../assets/FULL GIST CERTIFICATE2.jpg";
import calender from "../assets/calender 2022.jpg";
import bookcover from "../assets/XComputer Book cover.jpg";
import avatar from "../assets/AvatarMaker (1).png";
import websitebg from "../assets/webbg.png";
import woman from "../assets/woman (1).jpg";
import netflix from "../assets/netflix-screenshot.png";
import loginp from "../assets/Screenshot-login.png";
import certificateblue from "../assets/blue-certificate.jpg";
import card from "../assets/card SRG.jpg";
import fridgew from "../assets/fridge-woman.jpg";
import codeZone from "../assets/codeZone.jpg";
import codeMark from "../assets/card mark smith.jpg";

import boy from "../assets/boy.jpg";
import About from "../Components/About";
import Services from "../Components/Services";
import { BiMessage } from "react-icons/bi";

// import Testimonials from "../Components/Testimonials"
import { FiMessageSquare } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";

function Sections() {
  return (
    <>
      <div className="sec2 bg-red-500-">
        <About />
        <Services />
        {/* under const */}
        <section
          id="projects"
          className="px-5 sm:px-20 sm:py-10 sec2  md:pt-16"
        >
          <h2 className="text-center font-extrabold text-[2rem]">
            <span className="material-symbols-outlined mx-3">work</span>
            {/* <MdWork /> */}
            PROJECTS
          </h2>
          <hr className="border-[#38bdf8]" />
          <div className="p-5 text-lg text-center items-center md:text-[22px]">
            <p>
              Explore a curated selection of my projects, including website
              designs, logo creations, branding campaigns, and more. Each
              project comes with a brief description highlighting the
              objectives, challenges, and solutions implemented
            </p>
          </div>
          <div className="flex flex-col md:flex-row py-5 gap-5">
            <a href="https://michael-tom2.vercel.app/">
              <div className="w-[100%] rounded-md  place-content-center justify-center flex bg-slate-100 dark:bg-slate-900 p-2 text-black dark:text-white  md:h-full md:rounded-none flex-grow">
                <img
                  src={websitebg}
                  alt="webpage sample"
                  className="rounded-md"
                />
              </div>
            </a>
            <a href="https://michael-t55.github.io/Login-form/">
              <div className="w-[100%] rounded-md mb-5 md:mb-2 place-content-center justify-center flex bg-slate-100 dark:bg-slate-900 p-2 text-black dark:text-white md: md:h-full md:rounded-none">
                <img
                  src={netflix}
                  alt="webpage sample"
                  className="rounded-md"
                />
              </div>
            </a>
            <a href="https://michael-t55.github.io/Login-form/">
              <div className="w-[100%] rounded-md  place-content-center justify-center flex bg-slate-100 dark:bg-slate-900 p-2 text-black dark:text-white  md:h-full md:rounded-none">
                <img src={loginp} alt="webpage sample" className="rounded-md" />
              </div>
            </a>
          </div>
          <div className="flex flex-col md:flex-row py-5 gap-5">
            <div className="w-[100%] rounded-md mb-5 place-content-center justify-center flex bg-slate-100 dark:bg-slate-900 p-2 text-black dark:text-white md: md:h-full md:rounded-none">
              <img
                src={certificateblue}
                alt="webpage sample"
                className="rounded-md"
              />
            </div>

            <div className="w-[100%] rounded-md mb-5 place-content-center justify-center flex bg-slate-100 dark:bg-slate-900 p-2 text-black dark:text-white md: md:h-full md:rounded-none md:h-">
              <img src={card} alt="webpage sample" className="rounded-md" />
            </div>
          </div>
          <div className="flex flex-col md:flex-row py-5 gap-5">
            <div className="w-[100%] rounded-md  place-content-center justify-center flex bg-slate-100 dark:bg-slate-900 p-2 text-black dark:text-white  md:h-full md:rounded-none">
              <img src={fridgew} alt="webpage sample" className="rounded-md " />
            </div>

            <div className=" md:w-full  rounded-md mb-5 place-content-center justify-center flex bg-slate-100 dark:bg-slate-900 p-2 text-black dark:text-white md: md:h-full md:rounded-none">
              <img src={codeZone} alt="webpage sample" className="rounded-md" />
            </div>

            <div className=" md:h-[100%] rounded-md mb-5 place-content-center justify-center flex bg-slate-100 dark:bg-slate-900 p-2 text-black dark:text-white md:rounded-none">
              <img
                src={codeMark}
                alt="webpage sample"
                className="rounded-md  "
              />
            </div>
          </div>

          <div className=" flex flex-col md:flex-row justify-center items-center md:gap-2 md:items-start">
            <div className=" justify-center flex bg-slate-100 rounded-xl dark:bg-slate-800 p-2 mb-2 text-black dark:text-white md:w-4/5 md:rounded-none md:h-[27.5rem]">
              <img src={certificate} alt="certificate picture" className="" />
            </div>
            <div className=" justify-center flex bg-slate-100 rounded-xl dark:bg-slate-800 p-2 mb-2 text-black dark:text-white w-4/5 md:w-1/2 md:h-[27.5rem]  md:rounded-none hover:">
              <img src={bookcover} alt="bookcover" className="" />
            </div>

            <div className=" justify-center flex bg-slate-100 rounded-xl dark:bg-slate-800 p-2 mb-2 text-black dark:text-white w-4/5 md:w-1/2 md:rounded-none md:h-[27.5rem]">
              <img src={calender} alt="calender" className="" />
            </div>
          </div>

          {/* under const2 */}

          {/* <Testimonials/> */}

          <section id="testimonials">
            <div className="flex place-content-center items-center">
              <span className="text-[2rem] font-bold text-3xl px-4">
                <MdGroup />
              </span>
              <h2 className="text-center font-extrabold text-[2rem]">
                TESTIMONIALS
              </h2>
            </div>
            <hr className="border-[#38bdf8]" />
            <div className="p-5 text-center items-center text-lg md:text-[22px]">
              <p>
                Hear what my clients have to say! Testimonials from satisfied
                clients underscore my dedication, professionalism, and ability
                to deliver exceptional results
              </p>
            </div>

            <div className="lg:grid lg:grid-cols-3 gap-5 sm:block">
              <figure className="bg-slate-100 rounded-xl dark:bg-slate-800 hover:border border-slate-400 p-5 mb-2 text-black dark:text-white transition-all">
                <div className="flex items-center">
                  <img
                    className="w-24 h-24 rounded-full"
                    src={boy}
                    alt=""
                    width={384}
                    height={512}
                  />

                  <figcaption className="px-5">
                    <div>
                      <b>Eduok Tom</b>
                    </div>
                    <div>Web Developer</div>
                  </figcaption>
                </div>
                <div className="pt-6 space-y-4">
                  <blockquote>
                    <p className="text-lg px-10 ">
                      &quot;Michael pushes boundaries. His unconventional
                      designs challenge norms and leave a lasting impression.
                      His creativity knows no bounds, and our brand is forever
                      transformed because of it.&quot;
                    </p>
                  </blockquote>
                </div>
              </figure>
              <figure className="bg-slate-100 rounded-xl dark:bg-slate-800 hover:border border-slate-400 p-5 mb-2 text-black dark:text-white">
                <div className="flex items-center">
                  <img
                    className="w-24 h-24 rounded-full"
                    src={avatar}
                    alt=""
                    width={384}
                    height={512}
                  />
                  <figcaption className="px-5">
                    <div>
                      <b>Sam Jeff</b>
                    </div>
                    <div>Graphic Designer</div>
                  </figcaption>
                </div>

                <div className="pt-6 space-y-4">
                  <blockquote>
                    <p className="text-lg px-10 ">
                      &quot;Michael&#39;s attention to detail is awe-inspiring.
                      His pixel-perfect designs elevate our user experience.
                      Whether it&#39;s a mobile app or a website, He crafts
                      interfaces that users love to explore.&quot;
                    </p>
                  </blockquote>
                </div>
              </figure>
              <figure className="bg-slate-100 rounded-xl dark:bg-slate-800 hover:border border-slate-400 p-5 mb-2 text-black dark:text-white">
                <div className="flex items-center">
                  <img
                    className="w-24 h-24 rounded-full"
                    src={woman}
                    alt=""
                    width={384}
                    height={512}
                  />
                  {/* pb-2 px-10 */}
                  <figcaption className="px-5">
                    <div>
                      <b>Zap cooperation</b>
                    </div>
                    <div></div>
                  </figcaption>
                </div>

                <div className="pt-6 space-y-4">
                  <blockquote>
                    <p className="text-lg px-10 ">
                      Michael&#39;s designs speak louder than words. His took
                      our branding to new heights with elegant logos,
                      captivating visuals, and cohesive color schemes. His
                      ability to convey our brand story through graphics is
                      unmatched.
                    </p>
                  </blockquote>
                </div>
              </figure>
            </div>
          </section>

          {/* under const 3 */}
          <section id="contact" className="pb-8">
            <div className="flex place-content-center items-center">
              <span className="font-extrabold text-3xl px-4">
                <MdCall />
              </span>
              <h2 className="text-center font-extrabold text-[2rem]">
                CONTACT ME
              </h2>
            </div>
            <hr className="border-[#38bdf8]" />
            <div className="p-5 text-center items-center text-lg md:text-[22px]">
              <p>
                Ready to start a project together? Reach out to me via email or
                connect with me on Facebook and WhatsApp
              </p>
            </div>
            <form className="w-[100%] h-60 dark:bg-slate-900 bg-slate-100 rounded-md border border-slate-500/100 hover:border-slate-400 items-center md:w-1/2 sm:w-full ">
              <div className=" items-center m-4 pb-2 border-b-2 flex  gap-2 justify-between pr-2 ">
                <input
                  type="text"
                  placeholder="Name"
                  required
                  className="bg-transparent "
                />
                <MdOutlineDriveFileRenameOutline />
              </div>

              <div className=" items-center m-4 pb-2 border-b-2 flex  gap-2 justify-between pr-2">
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className="bg-transparent "
                />
                <span className="text-xl font-extrabold">
                  <MdOutlineMail />
                </span>
              </div>
              <div className=" items-center m-4 pb-2 border-b-2 flex  gap-2 justify-between pr-2">
                <input
                  type="text"
                  placeholder="Message"
                  required
                  className="bg-transparent "
                />
                <span className="text-xl">
                  <FiMessageSquare />
                </span>
              </div>
              <div className=" items-center m-4 pb-2 flex  gap-2 justify-between pr-2">
                <button type="submit" className="w-[100%]">
                  {" "}
                  Submit
                </button>
              </div>
            </form>
          </section>
        </section>
      </div>
    </>
  );
}

export default Sections;
