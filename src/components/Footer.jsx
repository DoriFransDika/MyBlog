import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <footer className="cobar-footer">
      <div className="cobar-footer-content">
        <div className="cobar-footer-socials">
          <a
            href="https://www.instagram.com/dorifrans/"
            className="cobar-social-link"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://github.com/DoriFransDika/DoriFransDika2022610018.github.io"
            className="cobar-social-link"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="mailto:dfransdika007@gmail.com"
            className="cobar-social-link"
            aria-label="Email"
          >
            <i className="fas fa-envelope"></i>
          </a>
          <a
            href="https://www.facebook.com/dori.frans"
            className="cobar-social-link"
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://www.youtube.com/@d-threemusic_official3014"
            className="cobar-social-link"
            aria-label="YouTube"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-youtube"></i>
          </a>
        </div>
        <p className="cobar-footer-copy mb-0">
          &copy; {new Date().getFullYear()} <strong>CobarBlog</strong>. Crafted with care by Dori Frans Dika.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
