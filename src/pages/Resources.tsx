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

const REVIEW_TEMPLATE =
  "Hi [Name], hope you’re well. If you felt my support was helpful, could you leave a short Google review?\n\n" +
  "A couple of lines on what I helped with (contracts/variations/payments/programme) would mean a lot.\n\nThanks — Kiran";

const ENQUIRY_TEMPLATE =
  "Hi Kiran,\n\nProject summary:\n- Location:\n- Approx value:\n- Stage (pre-contract/live/close-out):\n- Key issue:\n\nDocuments I have:\n- Contract/quote:\n- Drawings/spec:\n- Programme:\n- Payment/variations:\n\nDeadlines (if any):\n\nThanks";

export function Resources() {
  async function copyText(text: string) {
    try {
      await navigator.clipboard.writeText(text);
      alert("Copied ✅");
    } catch {
      alert("Copy failed — please select and copy manually.");
    }
  }

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

<div className="card" style={{ marginTop: 14, background: "#fff" }}>
  <div className="sectionTitle">
    <h3 style={{ margin: 0 }}>Copy‑paste templates</h3>
    <span className="badge">Faster replies</span>
  </div>
  <div className="grid2" style={{ marginTop: 10 }}>
    <div className="card" style={{ margin: 0 }}>
      <b>Review request template</b>
      <p className="small">
        Use this after you help someone (colleague/client). Keep it factual and outcome‑based.
      </p>
      <pre className="preBox">{REVIEW_TEMPLATE}</pre>
      <div className="ctaRow">
        <button className="btn" type="button" onClick={() => copyText(REVIEW_TEMPLATE)}>Copy</button>
      </div>
    </div>

    <div className="card" style={{ margin: 0 }}>
      <b>Initial enquiry template</b>
      <p className="small">
        Send this to speed up quoting. (Also available on the Contact page.)
      </p>
      <pre className="preBox">{ENQUIRY_TEMPLATE}</pre>
      <div className="ctaRow">
        <button className="btn" type="button" onClick={() => copyText(ENQUIRY_TEMPLATE)}>Copy</button>
        <a className="btn" href={`mailto:${SITE.email}?subject=${encodeURIComponent("Construction advisory enquiry")}&body=${encodeURIComponent(ENQUIRY_TEMPLATE)}`}>Email me this</a>
      </div>
    </div>
  </div>
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
    

<section className="section">
  <div className="container">
    <div className="sectionTitle">
      <h2 className="h2">Copy‑paste templates</h2>
      <span className="badge">Faster enquiries</span>
    </div>

    <div className="grid2">
      <div className="card">
        <h3 style={{ marginTop: 0 }}>Google review request (send to colleagues/clients)</h3>
        <p style={{ color: "var(--muted)" }}>
          “Hi [Name], hope you’re well. If my support was helpful, could you leave a short Google review?
          A couple of lines on what I helped with (contracts/variations/payments/programme) would mean a lot. Thanks — Kiran”
        </p>
      </div>

      <div className="card">
        <h3 style={{ marginTop: 0 }}>Initial enquiry (quick message)</h3>
        <p style={{ color: "var(--muted)" }}>
          “Hi Kiran — project in [location], approx [£value]. We’re at [stage] and the main issue is [payments/variations/delay/contract].
          Can you advise and quote? Happy to share contract/quote + key emails.”
        </p>
      </div>
    </div>

    <div className="notice" style={{ marginTop: 12 }}>
      <b>Note:</b> Replace the brackets with your details. Keep it factual — it gets a faster response.
    </div>
  </div>
</section>

</main>
  );
}
