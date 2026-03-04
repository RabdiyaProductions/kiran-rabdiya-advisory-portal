import { SITE } from "../data/config";

export function ServiceArea() {
  return (
    <main className="section">
      <div className="container">
        <div className="sectionTitle">
          <h2 className="h2">Service area</h2>
          <span className="badge">45–60 mins travel radius (preferred)</span>
        </div>

        <div className="split">
          <div className="card">
            <h3 style={{ marginTop: 0 }}>Primary coverage</h3>
            <p style={{ color: "var(--muted)" }}>
              I prioritise clients within approximately 45–60 minutes travel of {SITE.baseLocation}.
              This keeps site visits efficient and cost-effective.
            </p>
            <ul className="list">
              <li>NW London (Harrow, Stanmore, Wembley, Edgware, Watford corridor)</li>
              <li>Hertfordshire (Bushey, Radlett, St Albans, Hemel corridor)</li>
              <li>Buckinghamshire (Gerrards Cross / Beaconsfield corridor)</li>
            </ul>
            <hr className="sep" />
            <p style={{ color: "var(--muted)" }}>
              Outside this area: remote advisory (Zoom/Teams) is usually the best value.
            </p>
          </div>

          <div className="card">
            <h3 style={{ marginTop: 0 }}>Remote support</h3>
            <p style={{ color: "var(--muted)" }}>
              For larger packages or urgent issues, remote support can be same-day. You send the key docs, I review,
              then we call.
            </p>
            <ul className="list">
              <li>Contract / scope review</li>
              <li>Variation and valuation strategy</li>
              <li>Delay events and evidence check</li>
              <li>Action plan PDF so you can brief your team</li>
            </ul>
            <div className="notice" style={{ marginTop: 12 }}>
              <b>Tip:</b> If you’re unsure what to send, call first — I’ll tell you exactly which documents matter.
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
