import React from "react";
import BasicNavbar from "../components/Navbar"; // Ensure the path is correct
import Footer from "../components/Footer"; // Ensure the path is correct
import CSSBasics from "../materi/Css"; // Ensure the path is correct
import Intro from "../components/Intro";
import Hero from "../components/Hero";

const Materi = () => {
  return (
    <div>
      <BasicNavbar />
      <Intro />
      <CSSBasics />
      <Hero />
      <Footer />
    </div>
  );
};

export default Materi;
