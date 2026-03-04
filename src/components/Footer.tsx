import { Link } from "react-router-dom";
import { SITE } from "../data/config";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footerGrid">
        <div>
          <div className="brand" style={{ marginBottom: 8 }}>
            <span className="brandMark">KR</span>
            <span>{SITE.name}</span>
          </div>
          <small>
            {SITE.baseLocation} • {SITE.serviceArea}
          </small>
          <div style={{ marginTop: 10 }} className="miniLink">
            <small>
              Email: <a href={`mailto:${SITE.email}`}>{SITE.email}</a> • Tel:{" "}
              <a href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a>
            </small>
          </div>
          <div style={{ marginTop: 12 }}>
            <div className="notice">
              <b>Important:</b> This is an advisory service. It is not legal advice and does not replace your
              solicitor, Contract Administrator, Architect or Engineer. You remain responsible for decisions
              and appointments.
            </div>
          </div>
        </div>

        <div>
          <b>Quick links</b>
          <ul className="list" style={{ marginTop: 8 }}>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/service-area">Service area</Link></li>
            <li><Link to="/experience">Experience</Link></li>
              <li><Link to="/resources">Resources</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/privacy">Privacy</Link></li>
            <li><Link to="/terms">Terms</Link></li>
          </ul>
          <hr className="sep" />
          <small>© {year} {SITE.name}. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
}
