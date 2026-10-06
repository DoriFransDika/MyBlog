import React from "react";
import BasicNavbar from "./components/Navbar";
import Footer from "./components/Footer";
import CarouselComponent from "./components/CarouselComponent";
import "./styles.css";
import Hero from "./components/Hero";

const Examples = () => {
  return (
    <div>
      <BasicNavbar />
      <CarouselComponent />
      <Hero />
      <Footer />
    </div>
  );
};

export default Examples;
