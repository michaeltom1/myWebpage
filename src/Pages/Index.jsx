

function Index() {
  return (
    <>
      <nav className="flex items-center  bg-[#041644] p-2 justify-between shadow-sm px-4 ">
        <div>
          <button className="btn-m hover:p-[0.6em]">Michael</button>
        </div>
        <ul className="gap-5 hover:p-1 hidden md:flex">
          <li className="hover:bg-blue-400">HOME</li>
          <li className="hover:bg-blue-400">ABOUT ME</li>
          <li className="hover:bg-blue-400">PROJECTS</li>
          <li className="hover:bg-blue-400">TESTIMONIALS</li>
          <li className="hover:bg-blue-400">CONTACTS</li>
        </ul>
        <button className="p-0 li md:hidden leading-[8px] text-[20px] text-center grid place-content-center bg-inherit ">
          {/* <span className="material-symbols-outlined">menu</span> */}
          <span className="material-symbols-outlined">more_vert</span>
        </button>
      </nav>
    </>
  );
}

export default Index;
