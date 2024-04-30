import React from "react";

import Header from "./Header";
import Sections from "./Sections";
import Footer from "./Footer";

import Nav from "../Components/Nav";

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
