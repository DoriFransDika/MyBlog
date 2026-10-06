import React from "react";
import BasicNavbar from "../components/Navbar"; // Pastikan path ini benar
import Footer from "../components/Footer"; // Pastikan path ini benar
import CarouselComponent from "../components/CarouselComponent"; // Pastikan path ini benar
import "../styles.css"; // Pastikan path ini benar
import BasicExample from "../components/BasicExample";

const Examples = () => {
  return (
    <div>
      <BasicNavbar />
      <CarouselComponent />
      <BasicExample />
      <Footer />
    </div>
  );
};

export default Examples;
