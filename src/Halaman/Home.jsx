import React from "react";
import BasicNavbar from "../components/Navbar";
import Body from "../components/Body";
import Hero from "../components/Hero";
import CarouselComponent from "../components/CarouselComponent";
import Footer from "../components/Footer";
import "../styles.css";

const Home = () => {
  return (
    <div className="cobar-page-wrapper">
      <BasicNavbar />
      <Body />
      <Hero />
      <CarouselComponent />
      <Footer />
    </div>
  );
};

export default Home;
