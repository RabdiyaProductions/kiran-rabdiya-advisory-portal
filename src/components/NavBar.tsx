import { NavLink, Link } from "react-router-dom";
import { SITE } from "../data/config";

export function NavBar() {
  return (
    <header className="nav">
      <div className="container navInner">
        <Link to="/" className="brand" aria-label="Home">
          <span className="brandMark">KR</span>
          <span>{SITE.name}</span>
        </Link>

        <nav className="navLinks" aria-label="Primary">
          <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink>
          <NavLink to="/services" className={({ isActive }) => (isActive ? "active" : "")}>Services</NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>About</NavLink>
          <NavLink to="/experience" className={({ isActive }) => (isActive ? "active" : "")}>Experience</NavLink>
          <NavLink to="/service-area" className={({ isActive }) => (isActive ? "active" : "")}>Service area</NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>Contact</NavLink>
        </nav>

        <div className="ctaRow">
          <a className="btn" href={`tel:${SITE.phoneTel}`}>Call</a>
          <a className="btn" href="./brochure.pdf" target="_blank" rel="noreferrer">Brochure PDF</a>
          <a className="btn primary" href={`mailto:${SITE.email}?subject=Construction%20advisory%20enquiry`}>Get a quote</a>
        </div>
      </div>
    </header>
  );
}
