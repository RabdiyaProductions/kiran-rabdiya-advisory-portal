import { SERVICES } from "../data/services";
import { SITE } from "../data/config";
import { ServiceFinder } from "../components/ServiceFinder";

export function Services() {
  return (
    <main className="section">
      <div className="container">
        <div className="sectionTitle">
          <h2 className="h2">Services</h2>
          <span className="badge">Fixed fee where possible • Day-rate for on-site / complex scopes</span>
        </div>

        <ServiceFinder />

        <div className="notice" style={{ marginBottom: 14 }}>
          <b>How pricing works:</b> You’ll get a quote once scope is confirmed (documents, project size, urgency, and
          whether on-site is required). No “mystery invoices”.
        </div>

        <div className="grid3">
          {SERVICES.map((s) => (
            <div className="card" key={s.slug}>
              <div className="badge">{s.fromPrice}</div>
              <h3 style={{ marginTop: 10 }}>{s.title}</h3>
              <p>{s.tagline}</p>
              <hr className="sep" />
              <b>Includes</b>
              <ul className="list">
                {s.includes.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
              <b>Best for</b>
              <ul className="list">
                {s.bestFor.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
              <div className="ctaRow" style={{ marginTop: 10 }}>
                <a className="btn primary" href={`tel:${SITE.phoneTel}`}>Call to book</a>
                <a className="btn" href={`mailto:${SITE.email}?subject=${encodeURIComponent("Enquiry: " + s.title)}`}>
                  Email enquiry
                </a>
              </div>
            </div>
          ))}
        </div>


<div className="card" style={{ marginTop: 14 }}>
  <div className="sectionTitle">
    <h3 style={{ margin: 0 }}>Service comparison</h3>
    <span className="badge">Choose quickly</span>
  </div>

  <div className="tableWrap" style={{ marginTop: 10 }}>
    <table className="compareTable">
      <thead>
        <tr>
          <th>Service</th>
          <th>Best for</th>
          <th>Typical output</th>
          <th>Speed</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><b>Paid triage call</b><div className="small">45–60 mins</div></td>
          <td>Fast clarity / urgent decisions</td>
          <td>Priority actions + what to send next</td>
          <td>Same / next day</td>
        </tr>
        <tr>
          <td><b>Document triage</b><div className="small">Light review</div></td>
          <td>Before signing / admin mess</td>
          <td>Short written issues list + action plan</td>
          <td>1–3 days</td>
        </tr>
        <tr>
          <td><b>Variations & payment rescue</b></td>
          <td>Unpaid changes / weak backup</td>
          <td>Clean log + substantiation structure</td>
          <td>2–7 days</td>
        </tr>
        <tr>
          <td><b>Delay / EOT readiness</b></td>
          <td>Programme slipping</td>
          <td>Evidence checklist + timeline structure</td>
          <td>2–7 days</td>
        </tr>
        <tr>
          <td><b>Commercial healthcheck</b></td>
          <td>Margin leakage / unclear position</td>
          <td>CVR-lite risk actions</td>
          <td>3–10 days</td>
        </tr>
        <tr>
          <td><b>On-site guardian</b></td>
          <td>Critical milestones</td>
          <td>Site walk + issues list + follow-up</td>
          <td>Bookable</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div className="ctaRow" style={{ marginTop: 12 }}>
    <a className="btn primary" href={`tel:${SITE.phoneTel}`}>Call for options</a>
    <a className="btn" href={`mailto:${SITE.email}?subject=${encodeURIComponent("Which service fits?")}`}>Email for guidance</a>
  </div>
</div>

        <section className="section">
          <div className="card">
            <h3 style={{ marginTop: 0 }}>Retainers (for live projects)</h3>
            <p style={{ color: "var(--muted)" }}>
              If your project is active and you need ongoing commercial/contracts support, a monthly retainer can be
              more cost-effective than repeated one-offs.
            </p>
            <ul className="list">
              <li>Monthly call + document review allowance</li>
              <li>Variation / payment admin discipline</li>
              <li>Risk register + action tracking</li>
            </ul>
            <div className="ctaRow">
              <a className="btn primary" href={`mailto:${SITE.email}?subject=Retainer%20enquiry`}>Request options</a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
