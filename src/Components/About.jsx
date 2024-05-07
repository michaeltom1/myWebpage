import Nav from "./Nav";
import michael from "../assets/michael.png";
import { FaSquareFacebook } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { LiaLinkedin } from "react-icons/lia";
import { RxLinkedinLogo } from "react-icons/rx";
import { SiGmail } from "react-icons/si";
import { aboutcss } from "../Styles/aboutStyle";
import { global } from "../Styles/globalStyle";

function About() {
  return (
    <>
      {location.pathname === "/" ? "" : <Nav />}
      <section id="about" className={`${aboutcss.about}`}>
        <h2 className={`${aboutcss.h2}`}>ABOUT ME</h2>
        <div className={`${global.hrDiv}`}>
          <hr className={`${global.hr}`} />
        </div>
        <div className={`${aboutcss.sectionPadding}`}>
          <div className={`${aboutcss.main}`}>
            <div className={`${aboutcss.imgCenter}`}>
              <img src={michael} alt="" className={`${aboutcss.img}`} />
              <div className={`${aboutcss.socialMd}`}>
                <div className={`${aboutcss.socialMdItems}`}>
                  <a href="#">
                    <FaSquareFacebook />
                  </a>
                  <a href="#">
                    <FiInstagram />
                  </a>
                  <a href="#">
                    <RxLinkedinLogo />
                  </a>
                  <a href="#">
                    <SiGmail />
                  </a>
                </div>
              </div>
            </div>
            <div className={`${aboutcss.aboutText}`}>
              <p>
                Greetings! I&apos;m Michael Tom, a passionate web developer and
                graphic designer with over a year of experience in crafting
                visually appealing websites and stunning graphic designs. My
                portfolio showcases my journey and expertise in these fields.
              </p>
            </div>
          </div>
        </div>
        <div className={`${aboutcss.socialSm}`}>
          <a href="#">
            <FaSquareFacebook />
          </a>
          <a href="#">
            <FiInstagram />
          </a>
          <a href="#" className="text-5xl">
            <LiaLinkedin />
          </a>
          <a href="#">
            <SiGmail />
          </a>
        </div>
      </section>
    </>
  );
}
export default About;
