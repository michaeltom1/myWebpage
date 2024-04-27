import { useState } from "react";

function Nav() {
  const [clicked, setClicked] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const changeNavbarBg = () => {
    // console.log(scrollY)
    if (window.scrollY >= 50) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeNavbarBg);
  return (
    <>
      <div>
        <nav
          className={`navbar flex items-center p-2 justify-between px-4 sm:px-16 w-[100%] bg-fixed fixed z-10 top-0 dark:md:bg-transparent md:bg-transparent dark:bg-[#041644] md:items-center bg-slate-700  ${
            navbar ? "navbar active" : "navbar"
          }`}
        >
          <div className="logo">
            <button>
              <a href="/">Michael</a>
            </button>
          </div>
          <div>
            <ul
              className={`md:relative md:gap-5 md:m-0 md:bg-transparent0 md:flex-row md:p-0 md:py-0 md:h-0 md:w-full md:items-center md:right-0 dark:bg-slate-900 bg-slate-200 h-[30rem] absolute rounded-xl p-5 flex flex-col gap-5  top-0 w-4/5 pt-10 -right-full m-2  ${
                clicked ? "sideNav" : "nav-side"
              }`}
              onClick={handleClick}
            >
              <li>
                <a
                  href="#"
                  className="text-sky-500 hover:text-sky-400 font-bold hover:underline"
                >
                  HOME
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-sky-400 font-bold hover:underline"
                >
                  ABOUT
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-sky-400 font-bold hover:underline"
                >
                  PROJECTS
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="hover:text-sky-400 font-bold hover:underline"
                >
                  TESTIMONIALS
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className={`hover:text-sky-400 font-bold hover:underline`}
                >
                  CONTACT
                </a>
              </li>
            </ul>
          </div>

          <button className="button p-0 li md:hidden leading-[8px] text-[20px] text-center grid place-content-center bg-inherit ">
            <div className="absolute right-5 top-5 font-extrabold ">
              <i
                id="bar"
                className={`${
                  clicked
                    ? "fas fa-times text-slate-500 dark:text-white"
                    : "fas fa-bars"
                }`}
                onClick={handleClick}
              ></i>
            </div>
          </button>
        </nav>
      </div>
    </>
  );
}

export default Nav;
