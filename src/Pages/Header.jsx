import Resume from "../assets/Michael Resume.pdf";

function Header() {
  return (
    <>
      <header className="header px-[20px] md:pt-0 pt-10">
        <div className="fadeInTop  pt-16 rounded-lg p-2 h-[60vh] place-content-center grid md:h-[100vh]">
          <h1
            className={` text-slate-800 md:text-[5rem] font-extrabold text-center sm:text-5xl text-6xl dark:text-white`}
          >
            HI, I AM <br />
            MICHAEL <br />
            TOM.
          </h1>
          <h3
            className="text-center text-[1rem] mt-10 font-bold md:text-[2rem]"
            onClick={alert}
          >
            WEB DEVELOPER AND GRAPHIC DESIGNER 
          </h3>

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
