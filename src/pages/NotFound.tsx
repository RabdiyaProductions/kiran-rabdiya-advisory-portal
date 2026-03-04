import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <main className="section">
      <div className="container">
        <div className="card">
          <h2 style={{ marginTop: 0 }}>Page not found</h2>
          <p style={{ color: "var(--muted)" }}>
            That link doesn’t exist. Use the menu or go back home.
          </p>
          <Link className="btn primary" to="/">Go home</Link>
        </div>
      </div>
    </main>
  );
}
