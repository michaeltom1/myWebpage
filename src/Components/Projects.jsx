

// import React from 'react'

import netflix from "../assets/netflix-screenshot.png"
import bluepage from "../assets/webbg.png"
import fullgist from "../assets/fullgist.jpg"
import p1 from "../assets/p1.jpg"
import app1 from "../assets/app-1.jpg"
import login from "../assets/Screenshot-login.png";

import { MdWork } from "react-icons/md";
function Projects() {
  return (
    <div>
      <section id="projects">
        <div className="text-center flex items-center font-extrabold place-content-center ">
          <h2 className="text-3xl m-3">
            <MdWork />
          </h2>
          <h2 className=" text-[2rem] flex items-center">Recent Projects</h2>
        </div>
        <hr className="border-[#38bdf8] py-5" />

        <div className="grid gap-2 md:gap-5 md:grid-cols-3 sm:grid-cols-2">
          <img src={netflix} alt="" className="p-img rounded-xl" />
          <img src={bluepage} alt="" className="p-img rounded-xl" />
          <img src={fullgist} alt="" className="p-img rounded-xl" />
          <img src={login} alt="" className="p-img rounded-xl" />
          <img src={p1} alt="" className="p-img rounded-xl" />
          <img src={app1} alt="" className="p-img rounded-xl" />
        </div>
      </section>
    </div>
  );
}

export default Projects
