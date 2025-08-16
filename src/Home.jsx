import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Hero from "./Components/home/Hero";
import About from "./Components/home/About";
import Services from "./Components/home/Services";
import Projects from "./Components/home/Projects";
import Contact from "./Components/home/Contact";
import SectionDock from "./Components/SectionDock";

const Home = () => {
  return (
    <>
      <NavBar />
      <SectionDock />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
