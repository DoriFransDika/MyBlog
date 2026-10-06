import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

function ExampleCarouselImage({ text, backgroundImage }) {
  return (
    <div
      style={{
        height: "360px",
        backgroundColor: "#1F2937",
        backgroundImage: `linear-gradient(rgba(17, 24, 39, 0.65), rgba(17, 24, 39, 0.85)), url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h3
        style={{
          color: "var(--primary-accent)",
          fontSize: "2.8rem",
          fontWeight: "800",
          letterSpacing: "-0.5px",
        }}
      >
        {text}
      </h3>
    </div>
  );
}

function CarouselComponent() {
  return (
    <Carousel interval={4000} pause={false} indicators={true} className="cobar-carousel">
      <Carousel.Item>
        <a href="/Materi" style={{ textDecoration: "none" }}>
          <ExampleCarouselImage
            text="HTML5 Mastery"
            backgroundImage="https://drive.google.com/thumbnail?id=15NLIbObY3Ia_LMPbW8ZWdrnApXpb6SpI&sz=w1000"
          />
          <Carousel.Caption
            style={{
              paddingBottom: "2rem",
            }}
          >
            <h3 style={{ color: "var(--primary-accent)", fontWeight: "800" }}>HTML Introduction</h3>
            <p style={{ color: "#F9FAFB", fontSize: "1.05rem" }}>
              The standard markup language for crafting solid and accessible web structures.
            </p>
          </Carousel.Caption>
        </a>
      </Carousel.Item>

      <Carousel.Item>
        <a href="/MateriCSS" style={{ textDecoration: "none" }}>
          <ExampleCarouselImage
            text="Modern CSS"
            backgroundImage="https://drive.google.com/thumbnail?id=1ZcM2wgHgNKuhFhFBjb_TjD6X7bUs6MTf&sz=w1000"
          />
          <Carousel.Caption
            style={{
              paddingBottom: "2rem",
            }}
          >
            <h3 style={{ color: "var(--primary-accent)", fontWeight: "800" }}>CSS Styling & Grid</h3>
            <p style={{ color: "#F9FAFB", fontSize: "1.05rem" }}>
              Transform clean markup into stunning, responsive, and animated user experiences.
            </p>
          </Carousel.Caption>
        </a>
      </Carousel.Item>

      <Carousel.Item>
        <a href="/MateriJS" style={{ textDecoration: "none" }}>
          <ExampleCarouselImage
            text="JavaScript Logic"
            backgroundImage="https://drive.google.com/thumbnail?id=1zXgw4ExbtqZFmllHC7QsPSIpeZxBjN6t&sz=w1000"
          />
          <Carousel.Caption
            style={{
              paddingBottom: "2rem",
            }}
          >
            <h3 style={{ color: "var(--primary-accent)", fontWeight: "800" }}>Interactive JavaScript</h3>
            <p style={{ color: "#F9FAFB", fontSize: "1.05rem" }}>
              Empower your applications with rich interactivity and seamless state handling.
            </p>
          </Carousel.Caption>
        </a>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;
