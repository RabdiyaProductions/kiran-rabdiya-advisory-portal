import { SITE } from "../data/config";

export function About() {
  return (
    <main className="section">
      <div className="container">
        <div className="sectionTitle">
          <h2 className="h2">About</h2>
          <span className="badge">Commercial • Contracts • Operations-minded</span>
        </div>

        <div className="split">
          <div className="card">
            <h3 style={{ marginTop: 0 }}>Who I am</h3>
            <p style={{ color: "var(--muted)" }}>
              I’m Kiran Rabdiya — a senior construction professional with deep hands-on experience across commercial,
              contracts, and operational delivery. I’m strongest where projects get messy: change control, payments,
              programme pressure, and unclear responsibilities.
            </p>
            <p style={{ color: "var(--muted)" }}>
              My approach is practical and evidence-led: what the contract says, what the records show, and what you
              should do next to protect your position — without creating unnecessary conflict.
            </p>
            <hr className="sep" />
            <b>Core strengths</b>
            <ul className="list">
              <li>JCT forms (incl. Design & Build and bespoke amendments)</li>
              <li>Variation/change control and valuation discipline</li>
              <li>Commercial reporting / CVR thinking and margin protection</li>
              <li>Programme pressure: delay events, records, evidence readiness</li>
              <li>Pre-construction setup through to final account close-out</li>
            </ul>
          </div>

          <div className="card">
            <h3 style={{ marginTop: 0 }}>Qualifications & tools</h3>
            <ul className="list">
              <li><b>MSc</b> Construction Cost Management (University of Reading)</li>
              <li><b>BEng</b> Air Transport Engineering (City University)</li>
              <li>Strong Excel capability (commercial models, trackers, valuations)</li>
            </ul>
            <hr className="sep" />
            <b>Based</b>
            <p style={{ color: "var(--muted)", marginTop: 8 }}>
              {SITE.baseLocation}. I prioritise local site visits where travel is sensible and remote support where it’s faster.
            </p>

            <div className="notice" style={{ marginTop: 12 }}>
              <b>Scope clarity:</b> I provide advisory support. I’m not acting as your Contract Administrator or providing legal advice.
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
