
import Nav from "../Components/Nav";
import Sections from "./Sections";
import Footer from "../Components/Footer";
import Header from "../Components/Header"
import { useEffect, useState } from "react";

export default function Home() {
  


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
  



  return (
    <div>
      <Nav />
      <Header />
      <Sections />
      <Footer />

      <button className={`fixed top-10 z-10 `} onClick={themeSwitch}>
        CT
      </button>
    </div>
  );
}
