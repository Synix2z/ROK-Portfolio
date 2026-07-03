import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styles from "./header.module.css";

export default function Header() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(`/#${id}`);
    }
  };

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>Synix2z</Link>

      {/* Hamburger on mobile layout only */}
      <button
        className={styles.hamburger}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Navigation */}
      <nav className={`${styles.nav} ${open ? styles.open : ""}`}>
        <button onClick={() => scrollToSection("about-title")}>About</button>
        <button onClick={() => scrollToSection("commanders-title")}>Commanders</button>
        <button onClick={() => scrollToSection("current-objectives")}>Current Objectives</button>
        <button onClick={() => scrollToSection("statistics-title")}>Statistics</button>
        <button onClick={() => scrollToSection("timeline-title")}>KD & KvK Timeline</button>
        
        <button onClick={() => navigate("/tools")}>Tools</button>
      </nav>
    </header>
  );
}