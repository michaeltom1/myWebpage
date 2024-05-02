

function Footer() {
  return (
    <>
      <footer className="dark:bg-[#080c16] py-5 relative">
        <div>
          <a href="#">
            <h2 className="text-center font-bold text-[1rem] text-[#38bdf8]">
              {/* { alert("Hello there")} */}
              MICHAEL TOM
            </h2>
          </a>
          <p className="text-center font-bold text-sm text-slate-500">
            © Copyright Michael Tom. Design And Developed By Michael
          </p>
        </div>
        <a href="#">
          <button className="absolute bottom-2 m-1 p-1 bg-inherit rounded-sm font-extrabold text-lg md:bg-[#0014c7] md:p-3 right-5">
            &#x2191;
          </button>
        </a>
      </footer>
    </>
  );
}

export default Footer;
