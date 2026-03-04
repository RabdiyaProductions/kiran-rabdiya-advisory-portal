import { useMemo, useState } from "react";
import { SITE } from "../data/config";

export function Contact() {
  const [copied, setCopied] = useState(false);

  // Callback request fields (no backend: generates email/WhatsApp text)
  const [cbName, setCbName] = useState("");
  const [cbPhone, setCbPhone] = useState("");
  const [cbLocation, setCbLocation] = useState("");
  const [cbValue, setCbValue] = useState("");
  const [cbIssue, setCbIssue] = useState("");
  const [cbTime, setCbTime] = useState("");

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

  
const callbackText = useMemo(() => {
  return [
    "Hi Kiran,",
    "",
    "Please call me back regarding a construction advisory enquiry:",
    `- Name: ${cbName || "[your name]"}`,
    `- Phone: ${cbPhone || "[your phone]"}`,
    `- Preferred time: ${cbTime || "[anytime]"}`,
    `- Location: ${cbLocation || "[project location]"}`,
    `- Approx value: ${cbValue || "[approx value]"}`,
    `- Key issue: ${cbIssue || "[payments/variations/delay/contract]"}`,
    "",
    "Thanks"
  ].join("\n");
}, [cbName, cbPhone, cbTime, cbLocation, cbValue, cbIssue]);

const cbSubject = encodeURIComponent("Callback request — construction advisory");
const cbBody = encodeURIComponent(callbackText);

function openCallbackEmail() {
  window.location.href = `mailto:${SITE.email}?subject=${cbSubject}&body=${cbBody}`;
}

async function copyCallbackText() {
  try {
    await navigator.clipboard.writeText(callbackText);
    alert("Callback request copied ✅");
  } catch {
    alert("Could not copy automatically on this browser.");
  }
}

function openWhatsAppCallback() {
  const wa = `https://wa.me/${SITE.phoneTel.replace("+", "")}?text=${encodeURIComponent(callbackText)}`;
  window.open(wa, "_blank", "noreferrer");
}

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

            <div className="ctaRow" style={{ marginTop: 10 }}>
              <a className="btn" href={`https://wa.me/${SITE.phoneTel.replace("+", "")}?text=${encodeURIComponent("Hi Kiran — I'd like a quote/advice on my project. Can we talk?")}`} target="_blank" rel="noreferrer">WhatsApp message</a>
            </div>

            <hr className="sep" />

            <h3 style={{ marginTop: 0 }}>Request a callback</h3>
            <p style={{ color: "var(--muted)" }}>
              No automation — this just generates a structured message so you get a quicker response.
            </p>

            <div className="grid2" style={{ gap: 10 }}>
              <label className="field">
                <span>Name</span>
                <input value={cbName} onChange={(e) => setCbName(e.target.value)} placeholder="Your name" />
              </label>
              <label className="field">
                <span>Phone</span>
                <input value={cbPhone} onChange={(e) => setCbPhone(e.target.value)} placeholder="Your phone" />
              </label>
              <label className="field">
                <span>Project location</span>
                <input value={cbLocation} onChange={(e) => setCbLocation(e.target.value)} placeholder="e.g., Stanmore / Watford" />
              </label>
              <label className="field">
                <span>Approx value</span>
                <input value={cbValue} onChange={(e) => setCbValue(e.target.value)} placeholder="e.g., £250k" />
              </label>
              <label className="field" style={{ gridColumn: "1 / -1" }}>
                <span>Key issue</span>
                <input value={cbIssue} onChange={(e) => setCbIssue(e.target.value)} placeholder="payments / variations / delay / contract" />
              </label>
              <label className="field" style={{ gridColumn: "1 / -1" }}>
                <span>Preferred time</span>
                <input value={cbTime} onChange={(e) => setCbTime(e.target.value)} placeholder="e.g., today after 5pm" />
              </label>
            </div>

            <div className="ctaRow" style={{ marginTop: 10 }}>
              <button className="btn primary" type="button" onClick={openCallbackEmail}>Create callback email</button>
              <button className="btn" type="button" onClick={openWhatsAppCallback}>Send via WhatsApp</button>
              <button className="btn" type="button" onClick={copyCallbackText}>Copy text</button>
            </div>

            <div className="notice" style={{ marginTop: 12 }}>
              <b>Tip:</b> If it’s genuinely urgent and live on site, calling first is still best.
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
