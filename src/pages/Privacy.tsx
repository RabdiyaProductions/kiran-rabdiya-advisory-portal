export function Privacy() {
  return (
    <main className="section">
      <div className="container">
        <div className="sectionTitle">
          <h2 className="h2">Privacy policy</h2>
          <span className="badge">Plain English</span>
        </div>

        <div className="card">
          <p>
            This website is a marketing site for an independent construction advisory service.
          </p>

          <h3>What I collect</h3>
          <ul className="list">
            <li>Information you provide by phone/email (name, contact details, project summary).</li>
            <li>Documents you choose to send (quotes, contracts, drawings, programmes, emails, photos).</li>
          </ul>

          <h3>Why I collect it</h3>
          <ul className="list">
            <li>To assess your enquiry and provide a quote.</li>
            <li>To deliver advisory services you request.</li>
          </ul>

          <h3>How I use and store it</h3>
          <ul className="list">
            <li>Used only for your enquiry/work.</li>
            <li>For sensitive documents, you can send redacted copies first.</li>
            <li>Retention: kept only as long as needed for the engagement and reasonable record keeping.</li>
          </ul>

          <h3>Sharing</h3>
          <p>
            I do not sell your data. I may share information only when you instruct me to (for example,
            to help you draft correspondence) or where required by law.
          </p>

          <h3>Contact</h3>
          <p>
            If you want your data removed, email me and I’ll action it where legally possible.
          </p>
        </div>
      </div>
    </main>
  );
}
