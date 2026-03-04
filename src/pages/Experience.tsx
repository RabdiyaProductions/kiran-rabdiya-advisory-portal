import { SITE } from "../data/config";
import { Link } from "react-router-dom";

type CaseStudy = {
  title: string;
  valueBand: string;
  context: string;
  role: string;
  outcomes: string[];
};

const CASE_STUDIES: CaseStudy[] = [
  {
    title: "High‑spec residential refurbishment + extension (London)",
    valueBand: "£250k–£2m",
    context: "Live scope change, payment pressure, and programme risks typical of high-spec domestic work.",
    role: "Commercial & contracts advisory (JCT-focused), valuation/variation control, risk actions.",
    outcomes: [
      "Converted instructions into a clean variation log with substantiation plan",
      "Improved payment backup packs so they are easy to review and defend",
      "Provided a prioritised action plan to stabilise change control and reporting"
    ]
  },
  {
    title: "Mixed‑use / commercial packages (Greater London)",
    valueBand: "£5m–£25m",
    context: "Package interfaces + evolving design information causing cost and programme exposure.",
    role: "Commercial management support: CVR-lite healthcheck, package risk, contract administration focus.",
    outcomes: [
      "Identified margin leakage and set out corrective actions",
      "Improved reporting cadence to surface risks early (not at final account)",
      "Aligned records for evidence readiness (without making it a paperwork circus)"
    ]
  },
  {
    title: "Subcontractor account recovery (live site)",
    valueBand: "£100k–£3m packages",
    context: "Falling behind on applications/variations and losing money through weak substantiation.",
    role: "Variation & payment pack rescue; correspondence and evidence structure.",
    outcomes: [
      "Rebuilt valuation backup so it reads clearly to a QS/PM reviewer",
      "Prioritised high-value items first to accelerate cash recovery",
      "Created a repeatable admin workflow to keep monthly control"
    ]
  },
  {
    title: "Contract/tender risk review before signing",
    valueBand: "£100k–£25m",
    context: "Pre-contract review to avoid silent risks in amendments, scope and programme obligations.",
    role: "JCT D&B style risk review, key clauses, amendments, and exposure summary (plain English).",
    outcomes: [
      "Flagged high-risk clauses and negotiation points",
      "Produced a risk schedule for decision makers",
      "Recommended pragmatic protections: clarifications, assumptions, evidence requirements"
    ]
  },
  {
    title: "Delay exposure and EOT evidence readiness (early stage)",
    valueBand: "£500k–£25m",
    context: "Programme slipping; risk of dispute if evidence isn’t captured early.",
    role: "Pre-claim delay/EOT evidence checklist + narrative structure; record improvement plan.",
    outcomes: [
      "Set out what evidence to capture weekly (site-friendly)",
      "Helped build a clean event timeline to support decision-making",
      "Reduced dispute risk through better contemporaneous records"
    ]
  },
  {
    title: "Final account close-out support",
    valueBand: "£250k–£10m",
    context: "Late-stage tidy-up: unresolved changes, missing backup, unclear entitlements.",
    role: "Final account strategy: prioritisation, substantiation, and negotiation prep.",
    outcomes: [
      "Separated 'certain' vs 'stretch' items to control negotiation",
      "Organised backup so it’s easy to review and defend",
      "Provided a negotiation plan and meeting agenda structure"
    ]
  },
  {
    title: "Design information + change control stabilisation",
    valueBand: "£1m–£25m",
    context: "Design development driving repeated site changes and commercial uncertainty.",
    role: "Practical change control workflow aligned to contract requirements.",
    outcomes: [
      "Introduced a clear instruction/approval trail for changes",
      "Reduced rework risk by tightening scope definitions",
      "Improved reporting so stakeholders see the true position early"
    ]
  },
  {
    title: "Homeowner protection / contractor performance check",
    valueBand: "£100k–£1.5m",
    context: "Clients needing clarity on what’s reasonable, what’s risky, and what to do next.",
    role: "Independent advisory review: contract/quote sanity check, programme, commercial red flags.",
    outcomes: [
      "Explained risks in plain English and set out next steps",
      "Helped structure conversations with the contractor/consultants",
      "Provided a practical checklist for ‘what good looks like’"
    ]
  }
];

export function Experience() {
  return (
    <main className="section">
      <div className="container">
        <div className="sectionTitle">
          <h2 className="h2">Experience</h2>
          <span className="badge">Commercial • Contracts • Operations‑minded</span>
        </div>

        <div className="card">
          <p style={{ marginTop: 0 }}>
            I support projects from early risk review through live commercial control and close‑out.
            The focus is practical: strengthen your position, improve records, and give you clear next steps.
          </p>

          <div className="split" style={{ gap: 14 }}>
            <div className="card" style={{ margin: 0 }}>
              <h3 style={{ marginTop: 0 }}>Coverage</h3>
              <ul className="list">
                <li>High‑spec residential (refurbishment, extensions, new build)</li>
                <li>Mixed‑use and commercial packages</li>
                <li>Main contractor, developer and subcontractor perspectives</li>
                <li>RIBA Stage 3 to practical completion, final account and close‑out</li>
              </ul>
            </div>

            <div className="card" style={{ margin: 0 }}>
              <h3 style={{ marginTop: 0 }}>Typical outcomes</h3>
              <ul className="list">
                <li>Cleaner variation and payment administration (less leakage)</li>
                <li>Improved evidence readiness for delay/EOT and change control</li>
                <li>Stronger negotiation position through clarity and records</li>
                <li>Prioritised action plans (not 30 pages of theory)</li>
              </ul>
            </div>
          </div>

          <div className="notice" style={{ marginTop: 12 }}>
            <b>Note:</b> Case studies are anonymised and value bands are indicative. Advisory service only — not legal advice.
          </div>
        </div>

        <h3 style={{ marginTop: 18 }}>Selected case studies</h3>
        <div className="grid2">
          {CASE_STUDIES.map((c) => (
            <div key={c.title} className="card">
              <div className="badge" style={{ marginBottom: 10 }}>{c.valueBand}</div>
              <h3 style={{ marginTop: 0 }}>{c.title}</h3>
              <p style={{ color: "var(--muted)" }}><b>Context:</b> {c.context}</p>
              <p style={{ color: "var(--muted)" }}><b>Role:</b> {c.role}</p>
              <ul className="list">
                {c.outcomes.map((o) => <li key={o}>{o}</li>)}
              </ul>
            </div>
          ))}
        </div>

        <div className="card" style={{ marginTop: 16 }}>
          <h3 style={{ marginTop: 0 }}>Talk it through</h3>
          <p style={{ color: "var(--muted)" }}>
            For a fast view on risk, payments/variations, delay exposure, or contract amendments — call or email.
          </p>
          <div className="ctaRow">
            <Link className="btn" to="/case-studies">View case studies</Link>
            <a className="btn primary" href={`tel:${SITE.phoneTel}`}>Call {SITE.phoneDisplay}</a>
            <a className="btn" href={`mailto:${SITE.email}?subject=${encodeURIComponent("Construction advisory enquiry")}`}>Email</a>
            <a className="btn" href="./brochure.pdf" target="_blank" rel="noreferrer">Brochure PDF</a>
          </div>
        </div>
      </div>
    </main>
  );
}
