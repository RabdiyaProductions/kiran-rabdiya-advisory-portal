import { Link } from "react-router-dom";
import { SITE } from "../data/config";
import { SERVICES } from "../data/services";
import { ServiceCard } from "../components/ServiceCard";
import { FAQAccordion } from "../components/FAQAccordion";

const faqs = [
  {
    q: "Are you a solicitor?",
    a: "No. I provide commercial, contracts and project advisory based on construction best practice. For legal advice, use a solicitor. My value is giving you clear actions and evidence-ready positioning."
  },
  {
    q: "Do you act as Contract Administrator (CA) or Employer's Agent?",
    a: "No. This service is advisory — I can review documents, flag risks, and help you prepare notices/requests, but I’m not appointed as CA/EA."
  },
  {
    q: "What documents should I prepare?",
    a: "Start with the contract (or quote), scope/spec, drawings, programme, payment notices/applications, variation log/emails/WhatsApps, and any delay events. If you book a triage call I’ll tell you exactly what I need."
  },
  {
    q: "What’s your service area?",
    a: "Primarily within 45–60 minutes of Stanmore (HA7): NW London, Hertfordshire and Buckinghamshire. For larger packages, remote support (Zoom/Teams) works well."
  }
];

export function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container heroGrid">
          <div>
            <div className="hTag">Commercial • Contracts • Project Performance</div>
            <h1 className="h1">Commercial &amp; Contracts Construction Advisory — Homeowners to £25m Projects</h1>
            <p className="lede">Fast clarity, stronger contract position, and practical next steps.</p>

            <ul className="list" style={{ marginTop: 14 }}>
              <li>Variation &amp; payment pack rescue</li>
              <li>Pre-claim delay/EOT evidence readiness</li>
              <li>Contract/tender risk review before you sign</li>
            </ul>

            <div className="ctaRow">
              <a className="btn primary" href={`tel:${SITE.phoneTel}`}>Call {SITE.phoneDisplay}</a>
              <a className="btn" href={`mailto:${SITE.email}?subject=Construction%20advisory%20enquiry`}>Email</a>
              <a className="btn" href="./brochure.pdf" target="_blank" rel="noreferrer">Download brochure (PDF)</a>
              <Link className="btn" to="/resources">Free resources</Link>
            </div>

            <p style={{ marginTop: 10 }}><small>
              {SITE.serviceArea}. Remote support available UK-wide.
            </small></p>
          </div>

          <aside className="heroCard">
            <b>How it works</b>
            <div className="kpiGrid" style={{ marginTop: 10 }}>
              <div className="kpi"><b>1) Speak</b><span>Call / email. Explain the issue in plain English.</span></div>
              <div className="kpi"><b>2) Review</b><span>I review key documents & facts (no fluff).</span></div>
              <div className="kpi"><b>3) Quote</b><span>Fixed fee for defined scope (or day rate).</span></div>
              <div className="kpi"><b>4) Deliver</b><span>Action plan + templates + next steps.</span></div>
            </div>

            <hr className="sep" />
            <div className="notice">
              <b>Advisory model:</b> I help you understand your position and prepare evidence-ready actions.
              I’m not your solicitor or Contract Administrator.
            </div>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sectionTitle">
            <h2 className="h2">Popular services</h2>
            <div className="ctaRow">
              <Link className="btn" to="/services">Full menu</Link>
              <Link className="btn" to="/experience">Experience</Link>
            </div>
          </div>
          <div className="grid3">
            {SERVICES.slice(0, 3).map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div className="card">
            <div className="badge">What you get</div>
            <h3 style={{ marginTop: 10 }}>Clarity + leverage</h3>
            <ul className="list">
              <li>Commercial and contractual risk flagged early (before it becomes expensive).</li>
              <li>Clean, practical admin: variation control, valuation logic, notice discipline.</li>
              <li>Programme reality check: what’s delaying you and what evidence matters.</li>
              <li>Written action plan so you can brief your team/contractor properly.</li>
            </ul>
          </div>
          <div className="card">
            <div className="badge">Typical problems</div>
            <h3 style={{ marginTop: 10 }}>Where I help most</h3>
            <ul className="list">
              <li>“The contractor is pushing extras but can’t explain the basis.”</li>
              <li>“We’re behind programme and everyone’s blaming everyone.”</li>
              <li>“My variation log is a mess and cashflow is tight.”</li>
              <li>“Contract amendments feel one-sided — what am I really signing?”</li>
            </ul>
          </div>
        </div>
      </section>


<section className="section">
  <div className="container">
    <div className="sectionTitle">
      <h2 className="h2">Anonymised feedback</h2>
      <span className="badge">Typical outcomes</span>
    </div>

    <div className="grid3">
      <div className="card">
        <div className="badge">Main contractor PM • £10m+ package</div>
        <p style={{ marginTop: 10 }}>
          “Kiran cut through the noise and gave us a tight action list. The variation backup pack was rebuilt
          into something the other side couldn’t ignore.”
        </p>
        <p style={{ color: "var(--muted)", marginBottom: 0 }}>
          — Payment + change control stabilised
        </p>
      </div>

      <div className="card">
        <div className="badge">Homeowner • NW London extension</div>
        <p style={{ marginTop: 10 }}>
          “He explained what was reasonable, what was risky, and what to ask for next. The checklist and email
          template alone saved us weeks.”
        </p>
        <p style={{ color: "var(--muted)", marginBottom: 0 }}>
          — Scope clarity + calmer conversations
        </p>
      </div>

      <div className="card">
        <div className="badge">Subcontractor director • live job</div>
        <p style={{ marginTop: 10 }}>
          “We were drowning in admin. Kiran rebuilt the log, prioritised high-value items, and helped get
          momentum back on cash.”
        </p>
        <p style={{ color: "var(--muted)", marginBottom: 0 }}>
          — Improved valuation discipline
        </p>
      </div>
    </div>

    <div className="notice" style={{ marginTop: 12 }}>
      <b>Note:</b> Feedback examples are anonymised and illustrative. I don’t publish client names.
    </div>
  </div>
</section>

      <section className="section">
        <div className="container">
          <div className="sectionTitle">
            <h2 className="h2">FAQs</h2>
          </div>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="card" style={{ background: "linear-gradient(180deg, #ffffff, var(--card))" }}>
            <h3 style={{ marginTop: 0 }}>Ready to stop guessing?</h3>
            <p style={{ color: "var(--muted)" }}>
              If you’ve got a live issue, don’t wait until it becomes a dispute. Call and we’ll get you a clear next step.
            </p>
            <div className="ctaRow">
              <a className="btn primary" href={`tel:${SITE.phoneTel}`}>Call now</a>
              <a className="btn" href={`mailto:${SITE.email}?subject=Construction%20advisory%20enquiry`}>Email for a quote</a>
              <Link className="btn" to="/contact">Contact options</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
