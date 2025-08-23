import { navItems } from "../data/data";
import Button from "../feature/Button";
import { MichaelResume } from "../assets/assets";
import {
  LuMenu,
  LuX,
  LuHome,
  LuUser,
  LuBriefcase,
  LuFolderOpen,
  LuMail,
} from "react-icons/lu";

import { useState, useEffect, useRef } from "react";
const NavBar = () => {
  const [toggle, setToggle] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const handleClick = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    lastScrollY.current = typeof window !== "undefined" ? window.scrollY : 0;
    const onScroll = () => {
      const current = window.scrollY;
      // always show when near top
      if (current < 80) {
        setIsVisible(true);
        lastScrollY.current = current;
        return;
      }
      // don't hide when mobile menu is open
      if (!toggle) {
        setIsVisible(true);
        lastScrollY.current = current;
        return;
      }

      if (current > lastScrollY.current + 10) {
        // scrolling down
        setIsVisible(false);
      } else if (current < lastScrollY.current - 10) {
        // scrolling up
        setIsVisible(true);
      }
      lastScrollY.current = current;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [toggle]);
  return (
    <>
      <header
        className={`backdrop-blur-lg bg-white/20 border border-white/20 shadow-xl py-3 fixed left-4 right-4 top-4 z-50 rounded-2xl transition-all duration-500 max-w-screen-xl mx-auto ${
          isVisible ? "translate-y-0 opacity-100" : "-translate-y-28 opacity-0"
        }`}
      >
        <nav className="mx-auto w-11/12 md:w-4/5 flex justify-between items-center">
          <div>
            <Button
              text="Michael"
              className="transition-all duration-300 hover:scale-105 text-2xl p-2 hidden md:block"
              padding="py-2 px-4"
            />
            <Button
              text="M"
              className="transition-all duration-300 hover:scale-105 text-2xl p-2 md:hidden"
              padding="py-2 px-4"
            />
          </div>
          <ul className="hidden md:flex gap-6 text-white font-medium">
            {navItems.map((item) =>
              item.isResume ? (
                <li key={item.id}>
                  <Button
                    text={item.name}
                    linkTo={MichaelResume}
                    target="_blank"
                    className="!px-6 !py-2 !rounded-xl !font-bold !shadow-lg"
                  />
                </li>
              ) : (
                <li key={item.id}>
                  <a
                    href={item.url}
                    className="font-bold uppercase px-4 py-2 rounded-xl transition-all duration-300 hover:bg-white/30 hover:text-sky-400 hover:scale-105"
                  >
                    {item.name}
                  </a>
                </li>
              )
            )}
          </ul>
          <span
            onClick={handleClick}
            className={`md:hidden z-50 cursor-pointer fixed right-8 top-5 transition-all duration-500 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "-translate-y-28 opacity-0"
            }`}
          >
            <span
              className={`inline-block transition-transform duration-500 ${
                toggle ? "" : "rotate-180"
              }`}
            >
              {toggle ? (
                <LuMenu size={34} className="text-white drop-shadow-lg" />
              ) : (
                <LuX size={34} className="text-white drop-shadow-lg" />
              )}
            </span>
          </span>
        </nav>
      </header>
      {/* Mobile Modal: appears below header, not blocking header contents */}
      <div
        className={`md:hidden fixed left-4 right-4 top-[calc(4rem+1rem)] mt-4 rounded-2xl z-40 overflow-hidden transition-all duration-500 ${
          toggle
            ? "opacity-0 scale-95 pointer-events-none"
            : "opacity-100 scale-100"
        } backdrop-blur-lg bg-white/20 border border-white/20 shadow-xl max-w-screen-xl mx-auto`}
      >
        <div className="relative p-4 overflow-hidden">
          <ul
            className={`text-white font-medium space-y-4 mt-8 transform transition-transform duration-500 ${
              toggle
                ? "translate-x-[-40px] translate-y-[-40px] opacity-0"
                : "translate-x-0 translate-y-0 opacity-100"
            }`}
          >
            {navItems.map((item) => {
              if (item.isResume) {
                return (
                  <li key={item.id}>
                    <Button
                      text="Resume"
                      linkTo={MichaelResume}
                      className="my-6"
                      target="_blank"
                    />
                  </li>
                );
              }
              let Icon;
              switch (item.name) {
                case "Home":
                  Icon = LuHome;
                  break;
                case "About":
                  Icon = LuUser;
                  break;
                case "Services":
                  Icon = LuBriefcase;
                  break;
                case "Projects":
                  Icon = LuFolderOpen;
                  break;
                case "Contact":
                  Icon = LuMail;
                  break;
                default:
                  Icon = null;
              }
              return (
                <li key={item.id} className="flex items-center gap-2">
                  {Icon && <Icon size={20} className="text-sky-300" />}
                  <a
                    href={item.url}
                    onClick={handleClick}
                    className="font-bold uppercase px-4 py-2 rounded-xl transition-all duration-300 hover:bg-white/30 hover:text-sky-400 hover:scale-105"
                  >
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
