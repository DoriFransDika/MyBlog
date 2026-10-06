import React from "react";

const Intro = () => (
  <section
    id="intro"
    style={{
      backgroundImage: `url('https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-css/sta-je-css.png')`,
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
        CSS (Cascading Style Sheets)
      </h1>
      <p style={{ fontSize: "1.5rem", color: "#fff" }}>
        HTML provides structure and adds content to a webpage, while CSS
        enhances the visual presentation of that content through various styles.
        For example,
      </p>
    </div>
  </section>
);

export default Intro;
