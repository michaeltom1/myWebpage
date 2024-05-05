// import React from 'react'

import { MdCall, MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { FiMessageSquare } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";


function Contact() {
  return (
    <div>
      <section id="contact" className="pb-8 ">
        <div className="flex place-content-center items-center">
          <span className="font-extrabold text-3xl px-4">
            <MdCall />
          </span>
          <h2 className="text-center font-extrabold text-[2rem]">CONTACT ME</h2>
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
            <button type="submit" className="w-[100%] text-white">
              {" "}
              Submit
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Contact
