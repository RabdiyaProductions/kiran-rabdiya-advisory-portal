import { useMemo, useState } from "react";
import { SITE } from "../data/config";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const templateText = useMemo(() => {
    return [
      "Hi Kiran,",
      "",
      "I’d like a quote/advice on my project. Summary:",
      "- Location:",
      "- Approx value:",
      "- Stage (pre‑contract / live / close‑out):",
      "- Contract type (if known):",
      "- Programme status (on track / slipping / unknown):",
      "- Key issue (payments / variations / delay / scope / contract terms):",
      "- Any deadlines (pay less notice / response dates / meeting dates):",
      "",
      "Documents I can share:",
      "- Contract / quote / order:",
      "- Drawings / spec:",
      "- Programme:",
      "- Payment notices / applications:",
      "- Variation log / instructions / emails:",
      "",
      "Preferred contact method: (call / email / WhatsApp)",
      "",
      "Thanks,"
    ].join("\n");
  }, []);

  const subject = encodeURIComponent("Construction advisory enquiry");
  const body = encodeURIComponent(templateText);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(templateText);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const ta = document.createElement("textarea");
      ta.value = templateText;
      ta.style.position = "fixed";
      ta.style.left = "-9999px";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    }
  }

  return (
    <main className="section">
      <div className="container">
        <div className="sectionTitle">
          <h2 className="h2">Contact</h2>
          <span className="badge">Fast response • Clear next steps</span>
        </div>

        <div className="split">
          <div className="card">
            <h3 style={{ marginTop: 0 }}>Call</h3>
            <p style={{ color: "var(--muted)" }}>
              If it’s urgent or live on site, call first. We’ll get to the point quickly.
            </p>
            <div className="ctaRow">
              <a className="btn primary" href={`tel:${SITE.phoneTel}`}>Call {SITE.phoneDisplay}</a>
            </div>

            <hr className="sep" />

            <h3>Email</h3>
            <p style={{ color: "var(--muted)" }}>
              Prefer email? Use the template to speed things up (or copy it to your clipboard).
            </p>

            <div className="ctaRow">
              <a className="btn" href={`mailto:${SITE.email}?subject=${subject}&body=${body}`}>
                Email with template
              </a>
              <a className="btn" href={`mailto:${SITE.email}?subject=${subject}`}>
                Email (blank)
              </a>
              <button className="btn" type="button" onClick={handleCopy}>
                {copied ? "Copied ✅" : "Copy enquiry template"}
              </button>
            </div>

            <div className="ctaRow" style={{ marginTop: 10 }}>
              <a className="btn" href="./client-checklist.pdf" target="_blank" rel="noreferrer">
                Download client checklist (PDF)
              </a>
              <a className="btn" href="./brochure.pdf" target="_blank" rel="noreferrer">
                Download brochure (PDF)
              </a>
            </div>
          </div>

          <div className="card">
            <h3 style={{ marginTop: 0 }}>What to include</h3>
            <ul className="list">
              <li>Project location and approximate value</li>
              <li>Stage (pre‑contract / live / close‑out)</li>
              <li>Top 1–2 issues (payments, variations, delay, scope, contract terms)</li>
              <li>Any deadlines (pay less notice / response dates)</li>
              <li>Key docs (contract/quote, drawings/spec, programme, emails)</li>
            </ul>
            <div className="notice" style={{ marginTop: 12 }}>
              <b>Confidentiality:</b> Treat email as standard business comms. For highly sensitive material, use redacted copies initially.
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
