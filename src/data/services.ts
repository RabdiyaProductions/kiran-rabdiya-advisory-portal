export type Service = {
  slug: string;
  title: string;
  tagline: string;
  fromPrice: string;
  includes: string[];
  bestFor: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "paid-triage-call",
    title: "Paid Triage Call (45–60 mins)",
    tagline: "Fast clarity, decisive next steps, and document list.",
    fromPrice: "£195–£295",
    includes: [
      "Rapid issue diagnosis (commercial / contracts / programme)",
      "What to send next (exact documents + evidence checklist)",
      "Next 10 actions (what to do / ask / refuse)",
      "Written summary email within 24–48h"
    ],
    bestFor: ["Homeowners", "SME contractors", "Subcontractors", "Developers (construction arm)"]
  },
  {
    slug: "document-triage",
    title: "Document Triage (Light)",
    tagline: "Quick review of contract / scope / comms for risk and leverage.",
    fromPrice: "£650–£950",
    includes: [
      "Review key docs (contract, scope, programme, payment notices, variations)",
      "Risk highlights + negotiation points",
      "Plain-English action plan PDF (1–3 pages)"
    ],
    bestFor: ["Pre-sign review", "Dispute prevention", "Payment / variation confusion"]
  },
  {
    slug: "commercial-healthcheck",
    title: "Commercial Healthcheck (CVR-lite)",
    tagline: "Stop margin leak and regain control of reporting.",
    fromPrice: "£950–£2,500",
    includes: [
      "Cost vs value snapshot + risks",
      "Variations / claims readiness check",
      "Top margin leaks + corrective actions"
    ],
    bestFor: ["Projects slipping financially", "Weak admin processes", "Overstretched PM/Site teams"]
  },
  {
    slug: "variations-payment-rescue",
    title: "Variations & Payment Pack Rescue",
    tagline: "Turn chaos into an evidence-ready submission pack.",
    fromPrice: "£750–£3,500",
    includes: [
      "Variation log rebuild + substantiation plan",
      "Valuation narrative + supporting evidence map",
      "Template notices / trackers (practical, not academic)"
    ],
    bestFor: ["Late variations", "Under-valuations", "Cashflow pressure"]
  },
  {
    slug: "eot-delay-pack",
    title: "EOT / Delay Evidence Pack (Pre-claim)",
    tagline: "Programme narrative + evidence checklist before you get cornered.",
    fromPrice: "£1,250–£4,500",
    includes: [
      "Delay cause mapping (events → impact → evidence)",
      "Programme narrative draft (plain English)",
      "Evidence checklist and record requests"
    ],
    bestFor: ["Contractors", "Subbies", "Developers facing delay arguments"]
  },
  {
    slug: "contract-tender-review",
    title: "Tender / Contract Setup Review",
    tagline: "Before you sign: reduce risk, price properly, negotiate smart.",
    fromPrice: "£650–£2,950",
    includes: [
      "Clause risk schedule (what bites you later)",
      "Amendment review + negotiation positions",
      "Commercial setup checklist (notices, valuations, change control)"
    ],
    bestFor: ["Pre-construction", "New contracts", "Bespoke amendments"]
  },
  {
    slug: "on-site-guardian",
    title: "On‑Site Project Guardian (Half/Full day)",
    tagline: "Site walk + actionable snag/risk list + follow-up.",
    fromPrice: "£650–£1,400/day",
    includes: [
      "Site walk + live issue identification",
      "Priority risk/action list (commercial, contract, programme)",
      "Follow-up call to lock actions"
    ],
    bestFor: ["Local projects", "Critical milestones", "Escalation moments"]
  }
];
