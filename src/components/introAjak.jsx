import React from "react";

const IntroAjak = () => (
  <section
    id="IntroAjak"
    style={{
      backgroundImage: `url('https://wallpaperaccess.com/full/4142837.png')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      padding: "2rem",
      textAlign: "center",
    }}
  >
    <div
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        padding: "2rem",
        borderRadius: "10px",
        boxShadow: "0 0 20px rgba(0, 0, 0, 0.3)",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", color: "yellow", marginBottom: "1rem" }}>
        AJAX (Asynchronous JavaScript and XML)
      </h1>
      <p style={{ fontSize: "1.5rem", color: "#fff" }}>
        AJAX enhances web applications by allowing parts of a web page to update
        without reloading the entire page, resulting in a more dynamic and
        responsive user experience.
      </p>
    </div>
  </section>
);

export default IntroAjak;
