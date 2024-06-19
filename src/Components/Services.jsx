import { MdWork } from "react-icons/md";
import { FaPaintBrush } from "react-icons/fa";
import { BsBarChartFill } from "react-icons/bs";
import { FaCode } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { global } from "../Styles/globalStyle";
import { Link } from "react-router-dom";
import { service } from "../Styles/serviceStyle";

function Services() {
  return (
    <>
      <div>
        <section id="services">
          <div className={`${global.subhead}`}>
            <h2 className={`${global.subheadIcon}`}>
              <MdWork />
            </h2>
            <h2 className={`${global.subheadH2}`}>MY SERVICES</h2>
          </div>
          <hr className={`${service.serviceHr}`} />

          <div className={`${service.displayGrid}`}>
            <div className={`${service.serviceBox}`}>
              <span className="text-[3rem]">
                <FaCode color="#38bdf8" />
              </span>
              <div>
                <h3 className={`${service.serviceBoxHeading}`}>
                  Web Development
                </h3>
                <p className="px-4">
                  I am a Frontend Web developer dedicated to crafting visually
                  stunning and functionally robust digital experiences
                </p>
              </div>
              <button className="mt-2">
                <Link to="servicePage">Read more</Link>
              </button>
            </div>
            <div className={`${service.serviceBox}`}>
              <span className="text-[3rem]">
                <FaPaintBrush color="#38bdf8" />
              </span>
              <div>
                <h3 className={`${service.serviceBoxHeading}`}>
                  Graphic Design
                </h3>
                <p className="px-4">
                  I do all kinds of Graphic Design. Ranging from Banners,
                  Flyers, Certificates, Business cards etc.
                </p>
              </div>
              <button className="mt-2">
                <Link to="servicePage">Read more</Link>
              </button>
            </div>
            <div className={`${service.serviceBox}`}>
              <span className="text-[3rem] shadow-2xl shadow-[#38bdf8]">
                <BsBarChartFill color="#38bdf8" />
              </span>
              <div>
                <h3 className={`${service.serviceBoxHeading}`}>
                  Digital Marketing
                </h3>
                <p>I have expertices in digital Marketing.</p>
              </div>
              <button className="mt-2">
                <Link to="servicePage">Read more</Link>
              </button>
            </div>
            <div className={`${service.serviceBox} ${service.serviceBox4}`}>
              <span className="text-[3rem] bg-transparent">
                <IoMdPerson />
              </span>
              <div className="text">
                <h3 className={`${service.serviceBoxHeading}`}>
                  Tutor
                </h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              </div>
              <button className="mt-2">
                <Link to="servicePage">Read more</Link>
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Services;
