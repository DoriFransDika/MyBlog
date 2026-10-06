import React from "react";
import BasicNavbar from "../components/Navbar";
import Footer from "../components/Footer";
import Feedback from "../components/Feedback";

const Contact = () => {
  return (
    <div className="contact-page-wrapper">
      <BasicNavbar />
      <main className="contact-main-content">
        <Feedback />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
