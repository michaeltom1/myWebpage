import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const notify = () => toast("Hi there! 👋🙋‍♂️");

import { useState } from "react";
import { Link } from "react-router-dom";
import { LuMoonStar } from "react-icons/lu";
import { MdOutlineWbSunny } from "react-icons/md";
import { useEffect } from "react";

import { navcss } from "../Styles/style";

function Nav() {
  const [clicked, setClicked] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const changeNavbarBg = () => {
    // console.log(scrollY)
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeNavbarBg);

  // theme
  const [theme, setTheme] = useState("null");

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const themeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  //theme end
  return (
    <>
      <div>
        <nav
          className={`${navcss.navbar}${navbar ? "navbar active" : "navbar"}`}
        >
          <div className="logo">
            <button onClick={notify}>
              <a href="/">Michael</a>
              <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
              />
            </button>
          </div>
          <div>
            <ul
              className={`${navcss.navbarul} ${
                clicked ? "sideNav" : "nav-side"
              }`}
              onClick={handleClick}
            >
              {location.pathname === "/" ? (
                <li>
                  <a
                    href="#top"
                    className="text-sky-500 font-bold hover:underline"
                  >
                    HOME
                  </a>
                </li>
              ) : (
                <li>
                  <Link
                    to="/"
                    className=" hover:text-sky-400 font-bold hover:underline"
                  >
                    HOME
                  </Link>
                </li>
              )}

              {location.pathname === "/" ? (
                <li>
                  <a
                    href="#about"
                    className="hover:text-sky-400 font-bold hover:underline uppercase"
                  >
                    about
                  </a>
                </li>
              ) : (
                <li>
                  <a
                    href="/about"
                    className="hover:text-sky-400 font-bold hover:underline uppercase"
                  >
                    about
                  </a>
                </li>
              )}

              {location.pathname === "/servicePage" ? (
                <li>
                  <a
                    href="/#services"
                    className="text-sky-400 font-bold hover:underline uppercase"
                  >
                    services
                  </a>
                </li>
              ) : (
                <li>
                  <a
                    // this code is only true for now
                    href="#services"
                    className="hover:text-sky-400 font-bold hover:underline uppercase"
                  >
                    services
                  </a>
                </li>
              )}
              {location.pathname === "/" ? (
                <li>
                  <a
                    href="#projects"
                    className="hover:text-sky-400 font-bold hover:underline"
                  >
                    PROJECTS
                  </a>
                </li>
              ) : (
                <li>
                  <a
                    href="/#projects"
                    className="hover:text-sky-400 font-bold hover:underline"
                  >
                    PROJECTS
                  </a>
                </li>
              )}
              {location.pathname === "/" ? (
                <li>
                  <a
                    href="#testimonials"
                    className="hover:text-sky-400 font-bold hover:underline"
                  >
                    TESTIMONIALS
                  </a>
                </li>
              ) : (
                <li>
                  <a
                    href="/#testimonials"
                    className="hover:text-sky-400 font-bold hover:underline"
                  >
                    TESTIMONIALS
                  </a>
                </li>
              )}
              {location.pathname === "/" ? (
                <li>
                  <a
                    href="#contact"
                    className={`hover:text-sky-400 font-bold hover:underline`}
                  >
                    CONTACT
                  </a>
                </li>
              ) : (
                <li>
                  <a
                    href="/#contact"
                    className={`hover:text-sky-400 font-bold hover:underline`}
                  >
                    CONTACT
                  </a>
                </li>
              )}

              <li className="md:hidden">
                <Link
                  to="servicePage"
                  className={`hover:text-sky-400 font-bold hover:underline uppercase`}>
                  Service Page
                </Link>
              </li>
              <li>
                <hr className="border-slate-500 md:hidden" />
                <div className="flex justify-between pr-2 py-2 items-center">
                  <p className="dark:text-slate-400 text-slate-800 text-base font-bold md:hidden">
                    Switch theme
                  </p>
                  <button
                    onClick={themeSwitch}
                    className={`fill-sky-400/20 md:bg-transparent font-extrabold text-sky-400 md:p-0 p-2 px-4 gap-2 flex items-center bg-slate-600 text-base`}
                  >
                    {theme === "dark" ? <LuMoonStar /> : <MdOutlineWbSunny />}
                    <div className="text-slate-200 font-normal text-base md:hidden">
                      {theme === "dark" ? "Dark" : "Light"}
                    </div>
                  </button>
                </div>
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
