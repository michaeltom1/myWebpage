
import About from "../Components/About";
import Services from "../Components/Services";
import Projects from "../Components/Projects";
import Testimonials from "../Components/Testimonials";
import Contact from "../Components/Contact";

function Sections() {
  return (
    <>
        <About />
      <div className="sec2 mx-2 md:mx-16">
        <Services />
        <Projects />
        <Testimonials />
        <Contact />
      </div>
    </>
  );
}

export default Sections;
