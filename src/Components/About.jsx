


import michael from "../assets/michael.png";
import Nav from "./Nav";


//bg-slate-500 border border-slate-800 ro

//flex bg-sky-600 items-center justify-between gap-10

function About() {
    return (
      <>
        {location.pathname === "/" ? "" : <Nav />}
        <section id="about" className="header mx-0  ">
          <h2 className="text-center font-extrabold text-[2rem]">ABOUT ME</h2>
          <div className="px-5 md:px-20">
            <hr className="border-[#38bdf8]" />
          </div>
          <div className="md:px-28">
            <div className="flex flex-col gap-5 md:flex-row md:py-5 py-5 ">
              <div className="flex justify-center">
                <img
                  src={michael}
                  alt=""
                  className="rounded-full w-4/5 bg-slate-800 md:w-full md:rounded-xl"
                />
              </div>
              <div className="px-10 text-lg text-center items-center md:text-[22px] pb-5 md:w-4/5 md:text-left md:w-[50rem]">
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
        </section>
      </>
    );
}

export default About;