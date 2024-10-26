import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Hero from "./Components/home/Hero";
import About from "./Components/home/About";
import Services from "./Components/home/Services";
import Projects from "./Components/home/Projects";
import Contact from "./Components/home/Contact";
const Home = () => {
  return (
    <>
      <NavBar />
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
