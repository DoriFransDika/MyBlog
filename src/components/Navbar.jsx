import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBookOpen,
  faEnvelope,
  faSearch,
  faSun,
  faMoon,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import { faHtml5, faCss3Alt, faJs } from "@fortawesome/free-brands-svg-icons";
import { useTheme } from "../context/ThemeContext";

const BasicNavbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      alert(`Mencari: ${searchTerm}`);
    }
  };

  return (
    <Navbar expand="lg" className="cobar-navbar" variant="dark">
      <Container fluid className="px-lg-4 px-3">
        {/* Brand Logo */}
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <div className="cobar-brand-icon">
            <FontAwesomeIcon icon={faCode} />
          </div>
          <span className="cobar-brand-name">
            Cobar<span className="cobar-brand-accent">Blog</span>
          </span>
        </Navbar.Brand>

        {/* Mobile Toggle */}
        <Navbar.Toggle aria-controls="cobar-navbar-nav" />

        {/* Navbar Navigation Items */}
        <Navbar.Collapse id="cobar-navbar-nav">
          <Nav className="ms-auto align-items-lg-center cobar-nav-links">
            <Nav.Link href="/" className="nav-link-custom">
              <FontAwesomeIcon icon={faHome} className="me-1" /> Home
            </Nav.Link>
            <Nav.Link href="/Examples" className="nav-link-custom">
              <FontAwesomeIcon icon={faBookOpen} className="me-1" /> Examples
            </Nav.Link>
            <Nav.Link href="/Contact" className="nav-link-custom">
              <FontAwesomeIcon icon={faEnvelope} className="me-1" /> Contact
            </Nav.Link>

            {/* Dropdown Materi */}
            <NavDropdown
              title={
                <span>
                  <FontAwesomeIcon icon={faBookOpen} className="me-1" /> Materi
                </span>
              }
              id="cobar-nav-dropdown"
              className="cobar-nav-dropdown"
            >
              <NavDropdown.Item href="/Materi">
                <FontAwesomeIcon icon={faHtml5} style={{ color: "var(--primary-accent)" }} className="me-2" />{" "}
                HTML (HyperText Markup Language)
              </NavDropdown.Item>
              <NavDropdown.Item href="/MateriCSS">
                <FontAwesomeIcon icon={faCss3Alt} style={{ color: "var(--primary-accent)" }} className="me-2" />{" "}
                CSS (Cascading Style Sheet)
              </NavDropdown.Item>
              <NavDropdown.Item href="/MateriJS">
                <FontAwesomeIcon icon={faJs} style={{ color: "var(--primary-accent)" }} className="me-2" />{" "}
                JS (JavaScript)
              </NavDropdown.Item>
            </NavDropdown>

            {/* Search and Theme Toggle */}
            <div className="cobar-navbar-actions">
              <form onSubmit={handleSearchSubmit} className="cobar-search-box">
                <FontAwesomeIcon icon={faSearch} className="cobar-search-icon" />
                <input
                  type="text"
                  placeholder="Cari materi..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="cobar-search-input"
                  aria-label="Cari"
                />
              </form>

              {/* Light / Dark Mode Toggle */}
              <button
                type="button"
                className="theme-toggle-btn"
                onClick={toggleTheme}
                title={theme === "light" ? "Beralih ke Dark Mode" : "Beralih ke Light Mode"}
                aria-label="Toggle Theme"
              >
                <FontAwesomeIcon icon={theme === "light" ? faMoon : faSun} />
              </button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default BasicNavbar;
