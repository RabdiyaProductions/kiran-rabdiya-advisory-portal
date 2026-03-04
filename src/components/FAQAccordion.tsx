import { useState } from "react";

type Item = { q: string; a: string };

export function FAQAccordion({ items }: { items: Item[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="card">
      {items.map((it, idx) => {
        const isOpen = open === idx;
        return (
          <div key={it.q}>
            <button
              className="btn"
              style={{
                width: "100%",
                justifyContent: "space-between",
                marginBottom: 8,
                borderRadius: 14
              }}
              onClick={() => setOpen(isOpen ? null : idx)}
              aria-expanded={isOpen}
            >
              <span>{it.q}</span>
              <span>{isOpen ? "–" : "+"}</span>
            </button>
            {isOpen ? <p style={{ marginTop: 0, color: "var(--muted)" }}>{it.a}</p> : null}
            {idx < items.length - 1 ? <hr className="sep" /> : null}
          </div>
        );
      })}
    </div>
  );
}
