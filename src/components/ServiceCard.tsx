import type { Service } from "../data/services";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="card">
      <div className="badge">{service.fromPrice}</div>
      <h3 style={{ marginTop: 10 }}>{service.title}</h3>
      <p>{service.tagline}</p>
      <ul className="list">
        {service.includes.slice(0, 3).map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ul>
    </div>
  );
}
