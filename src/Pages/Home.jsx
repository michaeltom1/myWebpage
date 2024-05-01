// import React from "react";
import Header from "./Header";
import Nav from "../Components/Nav";
import Sections from "./Sections";
import Footer from "../Components/Footer";

export default function Home() {
  return (
    <div>
      <Nav />
      <Header />
      <Sections />
      <Footer />
      {/* <ServicesPage /> */}
    </div>
  );
}
