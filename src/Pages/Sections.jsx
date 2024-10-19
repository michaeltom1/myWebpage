
import About from "../Components/About";
import Services from "../Components/Services";
import Projects from "../Components/Projects";
import Contact from "../Components/Contact";

function Sections() {
  return (
    <>
      <About />
      <div className="bg-white dark:bg-slate-900">
        <div className="text-slate-800 dark:text-white mx-2 md:mx-16 px-2"> 
          <Services />
          <Projects />
          <Contact />
        </div>
      </div>
    </>
  );
}

export default Sections;
