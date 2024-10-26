import NavBar from "../components/NavBar,jsx";
import Footer from "../components/Footer";
import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Services from "../components/home/Services";
import Projects from "../components/home/Projects";
import Contact from "../components/home/Contact";
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
