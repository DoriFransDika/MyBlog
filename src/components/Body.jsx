import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faLightbulb,
  faBullseye,
  faArrowRight,
  faBookOpen,
} from "@fortawesome/free-solid-svg-icons";

const Body = () => {
  const [activeTab, setActiveTab] = useState("html");

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <section className="hero-section-wrapper">
      <div className="hero-grid">
        {/* Left Column: Typography & CTAs */}
        <div className="hero-left-col" data-aos="fade-right">
          {/* Tagline Badge */}
          <div className="hero-tagline-badge">
            <FontAwesomeIcon icon={faCode} />
            <span>COding BAReng</span>
          </div>

          {/* Main Title */}
          <h1 className="hero-main-title">
            Master the Art of <span className="highlight">Web Development</span> with CobarBlog
          </h1>

          {/* Body Text */}
          <p className="hero-body-text">
            Discover the ultimate destination for mastering modern HTML, CSS, and
            JavaScript. Dive into interactive tutorials, structured guides, and real-world
            coding practices built to empower developers of all skill levels.
          </p>

          {/* CTA Buttons */}
          <div className="hero-cta-group">
            <a href="/Materi" className="btn-cobar-primary">
              <span>Mulai Belajar</span>
              <FontAwesomeIcon icon={faArrowRight} />
            </a>
            <a href="/Examples" className="btn-cobar-outline">
              <FontAwesomeIcon icon={faBookOpen} />
              <span>Daftar Materi</span>
            </a>
          </div>
        </div>

        {/* Right Column: Modern Code Editor Frame */}
        <div className="hero-right-col" data-aos="fade-left" data-aos-delay="200">
          {/* Floating Badges */}
          <div className="floating-badge badge-top-right">
            <FontAwesomeIcon icon={faLightbulb} style={{ color: "var(--primary-accent)" }} />
            <span>Interactive Code</span>
          </div>

          <div className="floating-badge badge-bottom-left">
            <FontAwesomeIcon icon={faBullseye} style={{ color: "var(--primary-accent)" }} />
            <span>Clean Syntax</span>
          </div>

          {/* Code Editor Card */}
          <div className="code-editor-card">
            <div className="code-editor-header">
              <div className="code-editor-dots">
                <span className="code-dot dot-red"></span>
                <span className="code-dot dot-yellow"></span>
                <span className="code-dot dot-green"></span>
              </div>
              <div className="code-editor-tabs">
                <button
                  type="button"
                  className={`code-tab ${activeTab === "html" ? "active" : ""}`}
                  onClick={() => setActiveTab("html")}
                >
                  index.html
                </button>
                <button
                  type="button"
                  className={`code-tab ${activeTab === "css" ? "active" : ""}`}
                  onClick={() => setActiveTab("css")}
                >
                  style.css
                </button>
              </div>
            </div>

            <div className="code-editor-content">
              {activeTab === "html" ? (
                <>
                  <div className="code-line">
                    <span className="line-num">1</span>
                    <span><span className="token-punct">&lt;!</span><span className="token-tag">DOCTYPE</span> <span className="token-attr">html</span><span className="token-punct">&gt;</span></span>
                  </div>
                  <div className="code-line">
                    <span className="line-num">2</span>
                    <span><span className="token-punct">&lt;</span><span className="token-tag">html</span> <span className="token-attr">lang</span>=<span className="token-string">"id"</span><span className="token-punct">&gt;</span></span>
                  </div>
                  <div className="code-line">
                    <span className="line-num">3</span>
                    <span>&nbsp;&nbsp;<span className="token-punct">&lt;</span><span className="token-tag">head</span><span className="token-punct">&gt;</span></span>
                  </div>
                  <div className="code-line">
                    <span className="line-num">4</span>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="token-punct">&lt;</span><span className="token-tag">title</span><span className="token-punct">&gt;</span>CobarBlog - Coding Bareng<span className="token-punct">&lt;/</span><span className="token-tag">title</span><span className="token-punct">&gt;</span></span>
                  </div>
                  <div className="code-line">
                    <span className="line-num">5</span>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="token-punct">&lt;</span><span className="token-tag">link</span> <span className="token-attr">rel</span>=<span className="token-string">"stylesheet"</span> <span className="token-attr">href</span>=<span className="token-string">"style.css"</span><span className="token-punct">&gt;</span></span>
                  </div>
                  <div className="code-line">
                    <span className="line-num">6</span>
                    <span>&nbsp;&nbsp;<span className="token-punct">&lt;/</span><span className="token-tag">head</span><span className="token-punct">&gt;</span></span>
                  </div>
                  <div className="code-line">
                    <span className="line-num">7</span>
                    <span>&nbsp;&nbsp;<span className="token-punct">&lt;</span><span className="token-tag">body</span><span className="token-punct">&gt;</span></span>
                  </div>
                  <div className="code-line">
                    <span className="line-num">8</span>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="token-punct">&lt;</span><span className="token-tag">h1</span> <span className="token-attr">class</span>=<span className="token-string">"title"</span><span className="token-punct">&gt;</span>Halo Developers!<span className="token-punct">&lt;/</span><span className="token-tag">h1</span><span className="token-punct">&gt;</span></span>
                  </div>
                  <div className="code-line">
                    <span className="line-num">9</span>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="token-punct">&lt;</span><span className="token-tag">p</span><span className="token-punct">&gt;</span>Belajar Web Dev seru bersama Cobar.<span className="token-punct">&lt;/</span><span className="token-tag">p</span><span className="token-punct">&gt;</span></span>
                  </div>
                  <div className="code-line">
                    <span className="line-num">10</span>
                    <span>&nbsp;&nbsp;<span className="token-punct">&lt;/</span><span className="token-tag">body</span><span className="token-punct">&gt;</span></span>
                  </div>
                  <div className="code-line">
                    <span className="line-num">11</span>
                    <span><span className="token-punct">&lt;/</span><span className="token-tag">html</span><span className="token-punct">&gt;</span></span>
                  </div>
                </>
              ) : (
                <>
                  <div className="code-line">
                    <span className="line-num">1</span>
                    <span><span className="token-comment">/* Style Modern CobarBlog */</span></span>
                  </div>
                  <div className="code-line">
                    <span className="line-num">2</span>
                    <span><span className="token-tag">.hero-container</span> <span className="token-punct">&#123;</span></span>
                  </div>
                  <div className="code-line">
                    <span className="line-num">3</span>
                    <span>&nbsp;&nbsp;<span className="token-attr">display</span>: <span className="token-string">flex</span>;</span>
                  </div>
                  <div className="code-line">
                    <span className="line-num">4</span>
                    <span>&nbsp;&nbsp;<span className="token-attr">background</span>: <span className="token-string">#111827</span>;</span>
                  </div>
                  <div className="code-line">
                    <span className="line-num">5</span>
                    <span>&nbsp;&nbsp;<span className="token-attr">accent-color</span>: <span className="token-string">#F59E0B</span>;</span>
                  </div>
                  <div className="code-line">
                    <span className="line-num">6</span>
                    <span><span className="token-punct">&#125;</span></span>
                  </div>
                  <div className="code-line">
                    <span className="line-num">7</span>
                    <span><span className="token-tag">.title</span> <span className="token-punct">&#123;</span></span>
                  </div>
                  <div className="code-line">
                    <span className="line-num">8</span>
                    <span>&nbsp;&nbsp;<span className="token-attr">color</span>: <span className="token-string">#F59E0B</span>;</span>
                  </div>
                  <div className="code-line">
                    <span className="line-num">9</span>
                    <span>&nbsp;&nbsp;<span className="token-attr">font-weight</span>: <span className="token-string">800</span>;</span>
                  </div>
                  <div className="code-line">
                    <span className="line-num">10</span>
                    <span><span className="token-punct">&#125;</span></span>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Body;
