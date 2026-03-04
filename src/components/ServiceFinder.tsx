import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { SITE } from "../data/config";
import { SERVICES } from "../data/services";

type ScenarioKey =
  | "urgent"
  | "before_sign"
  | "payments_variations"
  | "delay"
  | "healthcheck"
  | "onsite";

const SCENARIOS: { key: ScenarioKey; label: string; hint: string; rec: string[] }[] = [
  {
    key: "urgent",
    label: "Urgent issue (need clarity today)",
    hint: "Payments stuck, variation dispute, programme slipping — you need next steps fast.",
    rec: ["paid-triage", "document-triage"]
  },
  {
    key: "before_sign",
    label: "Before signing a contract / amendments",
    hint: "Risk scan and negotiation points in plain English.",
    rec: ["contract-review", "document-triage"]
  },
  {
    key: "payments_variations",
    label: "Variations & payments are messy",
    hint: "Instructions not valued, backup weak, admin behind.",
    rec: ["variations", "commercial-healthcheck"]
  },
  {
    key: "delay",
    label: "Delay/EOT exposure rising",
    hint: "Evidence readiness, timeline narrative, practical capture plan.",
    rec: ["delay", "document-triage"]
  },
  {
    key: "healthcheck",
    label: "I want a commercial healthcheck",
    hint: "Find leakage and risks early (CVR-lite).",
    rec: ["commercial-healthcheck", "document-triage"]
  },
  {
    key: "onsite",
    label: "I need an on-site review",
    hint: "Site walk, issues list, action plan and follow-up call.",
    rec: ["onsite", "paid-triage"]
  }
];

export function ServiceFinder() {
  const [scenario, setScenario] = useState<ScenarioKey>("urgent");

  const recommended = useMemo(() => {
    const s = SCENARIOS.find((x) => x.key === scenario);
    const recSlugs = s?.rec ?? [];
    return recSlugs
      .map((slug) => SERVICES.find((sv) => sv.slug === slug))
      .filter(Boolean);
  }, [scenario]);

  const selected = SCENARIOS.find((x) => x.key === scenario);

  return (
    <div className="card" style={{ marginBottom: 14 }}>
      <div className="sectionTitle" style={{ marginBottom: 10 }}>
        <h3 style={{ margin: 0 }}>Which service fits?</h3>
        <span className="badge">Quick decision helper</span>
      </div>

      <p style={{ color: "var(--muted)", marginTop: 0 }}>
        Pick your situation — I’ll suggest the best starting point.
      </p>

      <div className="choiceGrid">
        {SCENARIOS.map((s) => (
          <button
            key={s.key}
            className={"choiceBtn " + (s.key === scenario ? "active" : "")}
            onClick={() => setScenario(s.key)}
            type="button"
          >
            <div style={{ fontWeight: 800 }}>{s.label}</div>
            <div className="small">{s.hint}</div>
          </button>
        ))}
      </div>

      {selected && (
        <div className="card" style={{ marginTop: 12, background: "#fff" }}>
          <div className="small" style={{ fontWeight: 800, color: "var(--muted)" }}>Recommended start</div>
          <div className="grid2" style={{ marginTop: 10 }}>
            {recommended.map((sv: any) => (
              <div key={sv.slug} className="card" style={{ margin: 0 }}>
                <div className="badge">{sv.fromPrice}</div>
                <h4 style={{ margin: "10px 0 6px" }}>{sv.title}</h4>
                <div className="small">{sv.tagline}</div>
              </div>
            ))}
          </div>

          <div className="ctaRow" style={{ marginTop: 12 }}>
            <a className="btn primary" href={`tel:${SITE.phoneTel}`}>Call {SITE.phoneDisplay}</a>
            <Link className="btn" to="/contact">Get next steps</Link>
            <Link className="btn" to="/resources">Free resources</Link>
          </div>
        </div>
      )}
    </div>
  );
}
