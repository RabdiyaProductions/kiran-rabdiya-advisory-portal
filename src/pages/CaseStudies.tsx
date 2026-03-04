import { Link } from "react-router-dom";
import { SITE } from "../data/config";

type CaseStudy = {
  title: string;
  valueBand: string;
  situation: string;
  whatIDid: string[];
  outcome: string[];
};

const CASES: CaseStudy[] = [
  {
    title: "Variations & payment pack rescue (live job)",
    valueBand: "£100k–£3m packages",
    situation: "Variations were being instructed but not valued/paid properly. Admin was behind and leverage was weak.",
    whatIDid: [
      "Rebuilt the variation log into a clean, trackable register (instruction → quote → substantiation → status).",
      "Structured substantiation so a QS can review quickly (photos, emails, marked-up drawings, rates).",
      "Prioritised the top value items first to accelerate cash recovery."
    ],
    outcome: [
      "Faster agreement conversations (less noise, more clarity).",
      "Improved payment position through better evidence and reporting discipline.",
      "A repeatable monthly workflow to stop the leak."
    ]
  },
  {
    title: "Contract / amendments risk scan (before signing)",
    valueBand: "£100k–£25m",
    situation: "Client needed to understand unbalanced amendments and silent risks before committing.",
    whatIDid: [
      "Reviewed key clauses and amendments in plain English (risk, exposure, responsibilities, programme).",
      "Produced a short risk schedule with negotiation points and practical protections.",
      "Flagged evidence/notice discipline needed to avoid future disputes."
    ],
    outcome: [
      "Clear negotiation agenda (what matters, what’s tolerable, what’s a red line).",
      "Reduced risk of taking on hidden obligations.",
      "Better readiness for contract admin from day one."
    ]
  },
  {
    title: "Delay exposure: evidence readiness (early stage)",
    valueBand: "£500k–£25m",
    situation: "Programme slipping; risk of dispute if records/evidence were not captured early.",
    whatIDid: [
      "Created a site-friendly evidence checklist (programme updates, diaries/photos, RFIs/instructions).",
      "Helped structure a timeline narrative (event → impact → mitigation).",
      "Recommended a practical weekly routine so records stay current."
    ],
    outcome: [
      "Stronger position for time discussions (less opinion, more evidence).",
      "Reduced dispute risk through contemporaneous records.",
      "Clear next actions for the team."
    ]
  },
  {
    title: "Commercial healthcheck (CVR-lite) to stop margin leakage",
    valueBand: "£1m–£25m",
    situation: "Job running ‘busy’ but commercial position unclear. Risks not being surfaced early.",
    whatIDid: [
      "Rapid review of cost/value position drivers (high-risk items, assumptions, change control).",
      "Introduced a simple risk/action tracker aligned to real site issues.",
      "Set out corrective actions for reporting discipline and variation control."
    ],
    outcome: [
      "Earlier visibility of risk and leakage points.",
      "A practical action plan (not a 40-page report).",
      "Improved commercial grip for the next period."
    ]
  },
  {
    title: "Homeowner protection: quote/contract sanity check",
    valueBand: "£100k–£1.5m",
    situation: "Homeowners needed clarity on what’s reasonable, what’s risky, and what to do next.",
    whatIDid: [
      "Reviewed quote/scope and highlighted gaps and red flags.",
      "Explained contract risks in plain English with next-step options.",
      "Provided a checklist to structure conversations with the contractor/consultants."
    ],
    outcome: [
      "Better decision-making with less uncertainty.",
      "Improved control of scope and change discussions.",
      "Reduced chance of cost surprises later."
    ]
  },
  {
    title: "Final account close-out strategy",
    valueBand: "£250k–£10m",
    situation: "Late stage: unresolved changes, missing substantiation, and unclear entitlements.",
    whatIDid: [
      "Separated ‘certain’ vs ‘stretch’ items to control negotiation.",
      "Organised evidence into a defensible pack structure.",
      "Prepared a negotiation plan and meeting agenda."
    ],
    outcome: [
      "Cleaner, faster close-out discussions.",
      "Reduced noise and increased credibility at the table.",
      "Better chance of landing the right outcome."
    ]
  }
];

export function CaseStudies() {
  return (
    <main className="section">
      <div className="container">
        <div className="sectionTitle">
          <h2 className="h2">Case studies</h2>
          <span className="badge">Anonymised • Outcomes-focused</span>
        </div>

        <div className="notice">
          <b>Note:</b> These case studies are anonymised (no client names) and value bands are indicative. Advisory service only — not legal advice.
        </div>

        <div className="grid2" style={{ marginTop: 14 }}>
          {CASES.map((c) => (
            <div className="card" key={c.title}>
              <div className="badge">{c.valueBand}</div>
              <h3 style={{ marginTop: 10 }}>{c.title}</h3>
              <p style={{ color: "var(--muted)" }}><b>Situation:</b> {c.situation}</p>
              <hr className="sep" />
              <b>What I did</b>
              <ul className="list">
                {c.whatIDid.map((x) => <li key={x}>{x}</li>)}
              </ul>
              <b>Outcome</b>
              <ul className="list">
                {c.outcome.map((x) => <li key={x}>{x}</li>)}
              </ul>
              <div className="ctaRow" style={{ marginTop: 10 }}>
                <a className="btn primary" href={`tel:${SITE.phoneTel}`}>Call</a>
                <Link className="btn" to="/contact">Get next steps</Link>
              </div>
            </div>
          ))}
        </div>

        <div className="card" style={{ marginTop: 16 }}>
          <h3 style={{ marginTop: 0 }}>Want a fast view on your situation?</h3>
          <p style={{ color: "var(--muted)" }}>
            If you’re dealing with payments/variations/delay or you’re about to sign a contract, contact me and I’ll tell you the straight route forward.
          </p>
          <div className="ctaRow">
            <a className="btn primary" href={`tel:${SITE.phoneTel}`}>Call {SITE.phoneDisplay}</a>
            <a className="btn" href={`mailto:${SITE.email}?subject=${encodeURIComponent("Construction advisory enquiry")}`}>Email</a>
            <Link className="btn" to="/resources">Free resources</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
