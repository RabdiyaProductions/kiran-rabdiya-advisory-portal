import { Link } from "react-router-dom";
import { SITE } from "../data/config";

export function MobileCtaBar() {
  return (
    <div className="mobileCtaBar" role="navigation" aria-label="Quick contact actions">
      <a className="mBtn primary" href={`tel:${SITE.phoneTel}`}>Call</a>
      <a className="mBtn" href={SITE.whatsappUrl} target="_blank" rel="noreferrer">WhatsApp</a>
      <Link className="mBtn" to="/contact">Quote</Link>
    </div>
  );
}
