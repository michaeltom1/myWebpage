import Resume from "../assets/Michael Resume.pdf";

import TypedComponent from "./TypedComponent";

function Header() {

 
 

  return (
    <>
      <header className="px-[20px] md:pt-0 pt-10  bg-custom-gradient-light dark:bg-custom-gradient-dark">
        <div className="fadeInTop  pt-16 rounded-lg p-2 h-[60vh] place-content-center grid md:h-[100vh]">
          <h1
            className={` text-slate-800 md:text-[5rem] font-extrabold text-center sm:text-5xl text-6xl dark:text-white`}
          >
            HI<span className="text-[#38bdf8]">,</span> I AM <br />
            MICHAEL <br />
            TOM<span className="text-[#38bdf8]">.</span>
          </h1>
          <h2 className="text-center text-[1rem] mt-10 font-bold md:text-[2rem] uppercase dark:text-white text-slate-800">
            I&#39;m a&thinsp;
            <span className=" text-[#38bdf8]">
              <TypedComponent />
            </span>
          </h2>

          <a href={Resume} download="Michael_resume" className="text-center">
            <button className="text-center bg-[#38bdf8] mt-5">
              Download Resume
            </button>
          </a>
        </div>
      </header>
    </>
  );
}

export default Header;
