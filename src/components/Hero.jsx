import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faHtml5, faCss3Alt, faJs } from "@fortawesome/free-brands-svg-icons";

const materiItems = [
  {
    title: "HTML5 Fundamentals",
    badge: "Structure",
    icon: faHtml5,
    desc: "Pelajari pondasi dasar web menggunakan elemen semantik modern, form terstruktur, SEO metadata, dan aksesibilitas ramah pengguna.",
    link: "/Materi",
    image: "https://drive.google.com/thumbnail?id=15NLIbObY3Ia_LMPbW8ZWdrnApXpb6SpI&sz=w1000",
  },
  {
    title: "Modern CSS Styling",
    badge: "Design",
    icon: faCss3Alt,
    desc: "Kuasai Flexbox, CSS Grid, responsivitas mobile-first, animasi transisi yang halus, serta tata letak profesional tanpa library berat.",
    link: "/MateriCSS",
    image: "https://drive.google.com/thumbnail?id=1ZcM2wgHgNKuhFhFBjb_TjD6X7bUs6MTf&sz=w1000",
  },
  {
    title: "Interactive JavaScript",
    badge: "Logic",
    icon: faJs,
    desc: "Jadikan web hidup dan interaktif dengan DOM manipulation, asynchronous fetch API, Event listeners, dan logika pemrograman modern.",
    link: "/MateriJS",
    image: "https://drive.google.com/thumbnail?id=1zXgw4ExbtqZFmllHC7QsPSIpeZxBjN6t&sz=w1000",
  },
];

const Hero = () => {
  return (
    <section className="cobar-section-container">
      <div className="section-header-centered">
        <span className="section-tag">Kurikulum Belajar</span>
        <h2 className="section-title">Pilih Materi Pengembangan Web</h2>
        <p className="section-desc">
          Mulai dari konsep paling dasar hingga teknik implementasi siap kerja dengan panduan terstruktur dan ringkas.
        </p>
      </div>

      <div className="cobar-card-grid">
        {materiItems.map((item, index) => (
          <div className="cobar-card" key={index}>
            <div className="cobar-card-img-wrap">
              <img src={item.image} alt={item.title} loading="lazy" />
              <div className="cobar-card-badge">{item.badge}</div>
            </div>
            <div className="cobar-card-body">
              <h3 className="cobar-card-title">
                <FontAwesomeIcon icon={item.icon} style={{ color: "var(--primary-accent)", marginRight: "8px" }} />
                {item.title}
              </h3>
              <p className="cobar-card-text">{item.desc}</p>
              <div className="cobar-card-footer">
                <a href={item.link} className="btn-card-learn">
                  <span>Pelajari Selengkapnya</span>
                  <FontAwesomeIcon icon={faArrowRight} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
