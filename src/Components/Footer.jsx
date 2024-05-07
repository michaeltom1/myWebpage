
import { FaSquareFacebook } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { LiaLinkedin } from "react-icons/lia";
import { SiGmail } from "react-icons/si";

function Footer() {
  return (
    <>
      <footer className="dark:bg-[#080c16] bg-slate-100 py-5 relative">
        <div>
          <a href="#">
            <h2 className="text-center font-bold text-[1rem] text-[#45bef1]">
              MICHAEL TOM
            </h2>
          </a>
          <div className="flex place-content-center gap-4 py-2 text-[#38bdf8] text-2xl items-center">
            <a href="#">
              <FaSquareFacebook />
            </a>
            <a href="#">
              <FiInstagram />
            </a>
            <a href="#" className="text-3xl">
              <LiaLinkedin />
            </a>
            <a href="#">
              <SiGmail />
            </a>
          </div>
          <p className="text-center font-bold text-sm text-slate-500">
            © Copyright Michael Tom. Design And Developed By Michael
          </p>
        </div>
        <a href="#">
          <button className="absolute bottom-2 m-1 p-1 bg-inherit rounded-sm font-extrabold text-lg md:bg-[#0014c7] md:p-3 right-5 text-slate-800 dark:text-slate-200 md:text-white">
            &#x2191;
          </button>
        </a>
      </footer>
    </>
  );
}

export default Footer;
