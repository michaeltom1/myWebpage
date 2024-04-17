import Index from "./Pages/Index";
import Header from "./Pages/Header";
import Sections from "./Pages/Sections";
import Footer from "./Pages/Footer";
function App() {
  return (
    <>
      <body className="dark:bg-[#0b1120] bg-white text-black dark:text-white">
        <Index />
        <Header />
        <Sections />
        <Footer />
      </body>
    </>
  );
}

export default App;
