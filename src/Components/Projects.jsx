import netflix from "../assets/netflix-screenshot.png";
import bluepage from "../assets/webbg.png";
import fullgist from "../assets/fullgist.jpg";
import p1 from "../assets/p1.jpg";
import app1 from "../assets/app-1.jpg";
import login from "../assets/Screenshot-login.png";
import { MdWork } from "react-icons/md";
import { global } from "../Styles/globalStyle";

function Projects() {
  const displayGrid = "grid gap-2 md:gap-5 md:grid-cols-3 sm:grid-cols-2";
  return (
    <div>
      <section id="projects">
        <div className={`${global.subhead}`}>
          <h2 className={`${global.subheadIcon}`}>
            <MdWork />
          </h2>
          <h2 className={`${global.subheadH2}`}>Recent Projects</h2>
        </div>
        <hr className={`${global.hr}`} />
        <div className={`${displayGrid}`}>
          <img src={netflix} alt="" className="p-img rounded-xl" />
          <img src={bluepage} alt="" className="p-img rounded-xl" />
          <img src={fullgist} alt="" className="p-img rounded-xl" />
          <img src={login} alt="" className="p-img rounded-xl" />
          <img src={p1} alt="" className="p-img rounded-xl" />
          <img src={app1} alt="" className="p-img rounded-xl" />
        </div>
      </section>
    </div>
  );
}
export default Projects;
