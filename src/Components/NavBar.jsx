import { FaTimes } from "react-icons/fa";
import { navItems } from "../data/data"
import Button from "../feature/Button";
import { BiMenu } from "react-icons/bi";
import { useState } from "react";
const NavBar = () => {
  const [toggle, setToggle] = useState(true)
  const handleClick = () => {
    setToggle(!toggle)
  }
  return (
    <header className="bg-primary py-2 fixed w-full z-50">
      <nav className="mx-auto w-11/12 md:w-4/5 flex justify-between items-center">
        <div>
          <Button text="Michael" />
        </div>
        <div>
          <ul className="hidden md:flex gap-4 text-white font-medium">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.url}
                  className="hover:text-sky-400 font-bold hover:underline uppercase"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          <span onClick={handleClick} className="md:hidden z-50">
            {/* {toggle ? <BiMenu fontSize={30} /> : <FaTimes fontSize={30} />} */}
            {toggle && <BiMenu fontSize={30} />}
          </span>

          <div
            className={`absolute right-2 top-4 bg-slate-800 p-4 rounded-lg w-60 z-10 ${
              !toggle ? "block" : "hidden"
            }`}
          >
            <FaTimes
              fontSize={30}
              onClick={handleClick}
              className="absolute right-2 top-2"
            />
            <ul className="text-white font-medium space-y-4">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.url}
                    onClick={handleClick}
                    className="hover:text-sky-400 font-bold hover:underline uppercase"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar