import { headercss } from "../Styles/Style";
import Resume from "../assets/Michael Resume.pdf";
import TypedComponent from "./TypedComponent";

function Header() {
  return (
    <>
      <header className={`${headercss.header}`}>
        <div className={`${headercss.subhead}`}>
          <h1 className={`${headercss.h1}`}>
            HI<span className={`${headercss.textColor}`}>,</span> I AM <br />
            MICHAEL <br />
            TOM<span className={`${headercss.textColor}`}>.</span>
          </h1>
          <h2 className={`${headercss.h2}`}>
            I&#39;m a&thinsp;
            <span className={`${headercss.textColor}`}>
              <TypedComponent />
            </span>
          </h2>
          <a
            href={Resume}
            download="Michael_resume"
            className="text-center"
          >
            <button className={`text-center mt-5 `}>Download Resume</button>
          </a>
        </div>
      </header>
    </>
  );
}

export default Header;
