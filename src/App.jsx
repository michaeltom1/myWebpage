import { BrowserRouter, Route, Routes } from "react-router-dom";
import ServicesPage from "./Pages/ServicesPage";
import NoPage from "./Pages/NoPage";
import Home from "./Pages/Home";
import Test from "./Pages/Test";
import About from "./Components/About";
import Services from "./Components/Services";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/test" element={<Test />} />
            <Route path="/services" element={<Services />} />
            <Route path="/servicePage" element={<ServicesPage />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
