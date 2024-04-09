
function Header() {
  return (
    <>
      <header className="px-[20px]">
        <div className=" m-2 rounded-lg p-2 border-red border-teal-100 h-[60vh] place-content-center grid">
          <h1 className="text-slate-900 font-extrabold text-5xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white">
            HI, I AM <br />
            MICHAEL <br />
            TOM.
          </h1>
          <h3 className="text-center text-[1rem] mt-10 font-bold">
            GRAPHIC DESIGNER AND WEB DEVELOPER
          </h3>
          <button className="text-center bg-[#38bdf8] mt-5">
            Download Resume
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
