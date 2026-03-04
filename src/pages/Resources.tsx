import { SITE } from "../data/config";

type ResourceLink = {
  title: string;
  file: string;
  note: string;
};

const RESOURCES: ResourceLink[] = [
  { title: "Google Business Profile Setup Pack (PDF)", file: "./gbp-setup-pack.pdf", note: "Zero-cost local marketing checklist (profile, posts, photos, reviews)." },
  { title: "Variation Log Template (PDF)", file: "./variation-log-template.pdf", note: "Track instructions, quotations, substantiation, status, and programme impact." },
  { title: "Payment & Notice Checklist (PDF)", file: "./payment-notice-checklist.pdf", note: "Admin checklist to protect cashflow (general guidance, not legal advice)." },
  { title: "EOT / Delay Evidence Checklist (PDF)", file: "./eot-evidence-checklist.pdf", note: "Site-friendly evidence to capture early (programme, records, correspondence)." },
  { title: "Client Intake Checklist (PDF)", file: "./client-checklist.pdf", note: "What to send first so I can quote quickly and accurately." },
  { title: "Service Brochure (PDF)", file: "./brochure.pdf", note: "Overview of services, typical problems solved, and how it works." },
];

export function Resources() {
  return (
    <main className="section">
      <div className="container">
        <div className="sectionTitle">
          <h2 className="h2">Resources</h2>
          <span className="badge">Free templates • Better enquiries • Faster outcomes</span>
        </div>

        <div className="notice">
          <b>Important:</b> These resources are practical templates and general guidance. They are not
          legal advice and do not replace your contract administrator, solicitor, architect, or consultant team.
        </div>

        <div className="grid3" style={{ marginTop: 14 }}>
          {RESOURCES.map((r) => (
            <div key={r.title} className="card">
              <h3 style={{ marginTop: 0 }}>{r.title}</h3>
              <p style={{ color: "var(--muted)" }}>{r.note}</p>
              <div className="ctaRow">
                <a className="btn" href={r.file} target="_blank" rel="noreferrer">Download</a>
              </div>
            </div>
          ))}
        </div>

        <div className="card" style={{ marginTop: 16 }}>
          <h3 style={{ marginTop: 0 }}>Want me to review your situation?</h3>
          <p style={{ color: "var(--muted)" }}>
            If you’re dealing with live payments/variations/delay or you’re about to sign a contract,
            contact me for a fast, practical route forward.
          </p>
          <div className="ctaRow">
            <a className="btn primary" href={`tel:${SITE.phoneTel}`}>Call {SITE.phoneDisplay}</a>
            <a className="btn" href={`mailto:${SITE.email}?subject=${encodeURIComponent("Construction advisory enquiry")}`}>Email</a>
            <a className="btn" href="./brochure.pdf" target="_blank" rel="noreferrer">Brochure PDF</a>
          </div>
        </div>
      </div>
    </main>
  );
}
