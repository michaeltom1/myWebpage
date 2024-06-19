// import React from 'react'

import Nav from "../Components/Nav";

import webpage from "../assets/webbg.png";
import netflix from "../assets/netflix-screenshot.png";
import login from "../assets/Screenshot-login.png";

import blueCertificate from "../assets/blue-certificate.jpg";
import fullGistCertificate from "../assets/fullgist.jpg";
import calender from "../assets/calender 2022.jpg";
import bookCover from "../assets/XComputer Book cover.jpg";
import card1 from "../assets/card mark smith.jpg";
import card2 from "../assets/card SRG.jpg";
import flyer from "../assets/codeZone.jpg";
import fridgeWoman from "../assets/fridge-woman.jpg";
import Footer from "../Components/Footer";

export default function ServicesPage() {
  return (
    <div id="servicePage">
      <Nav />
      <div className="h-screen0 pt-16 md:mx-16 mx-2">
        <nav className="bg-sky-500  my-2 p-2 rounded-md">
          <h1 className="font-bold text-5xl">
            <a href="#">Services</a>
          </h1>
        </nav>
        <hr className="border-[#38bdf8]" />
        <div className="p-5 text-lg text-center items-center md:text-[22px]">
          <p>
            Explore a curated selection of my projects, including website
            designs, logo creations, branding campaigns, and more.
          </p>
        </div>
        <section className="webdev pt-0 rounded-md p-2">
          <h2 className="text-2xl font-bold py-4">Web Development Services </h2>
          <div className="grid gap-4 md:flex overflow-x-auto slider">
            <img
              src={webpage}
              alt="myWebpage"
              className="rounded-xl shadow-md w-[30rem] h-[20rem]"
            />
            <img
              src={netflix}
              alt="myWebpage"
              className="rounded-xl shadow-md w-[30rem] h-[20rem]"
            />
            <img
              src={login}
              alt="myWebpage"
              className="rounded-xl shadow-md w-[30rem] h-[20rem]"
            />
          </div>
        </section>
        <section
          id="graphicDesign"
          className="webdev pt-0- rounded-md p-2 pt-16"
        >
          <h2 className="text-2xl font-bold py-4">Graphic Design Services </h2>
          <div className="flex flex-col gap-4 sm:flex-row flex-wrap">
            <img
              src={blueCertificate}
              alt="myWebpage"
              className="rounded-xl shadow-md w-[30rem] h-[20rem]"
            />
            <img
              src={card2}
              alt="myWebpage"
              className="rounded-xl shadow-md md:w-[30rem] h-[20rem]"
            />
            <img
              src={fullGistCertificate}
              alt="myWebpage"
              className="rounded-xl shadow-md w-2/6 "
            />
            <img
              src={flyer}
              alt="myWebpage"
              className="rounded-xl shadow-md md:w-1/3"
            />
            <img
              src={fridgeWoman}
              alt="myWebpage"
              className="rounded-xl shadow-md md:w-1/3"
            />
            <img
              src={calender}
              alt="myWebpage"
              className="rounded-xl shadow-md md:w-1/3 w-full"
            />
            <img
              src={bookCover}
              alt="myWebpage"
              className="rounded-xl shadow-md md:w-1/3 w-full"
            />
            <img
              src={card1}
              alt="myWebpage"
              className="rounded-xl shadow-md md:w-1/3"
            />
            
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
