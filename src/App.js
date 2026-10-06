import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./Halaman/Home";
import Examples from "./Halaman/Examples";
import Contact from "./Halaman/Contact";
import Materi from "./Halaman/Materi";
import MateriCSS from "./Halaman/MateriCSS";
import MateriJS from "./Halaman/MateriJS";
import { ThemeProvider } from "./context/ThemeContext";
import "./styles.css";

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Examples" element={<Examples />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Materi" element={<Materi />} />
          <Route path="/MateriCSS" element={<MateriCSS />} />
          <Route path="/MateriJS" element={<MateriJS />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
