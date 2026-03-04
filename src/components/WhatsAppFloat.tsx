import { SITE } from "../data/config";

export function WhatsAppFloat() {
  const wa = `https://wa.me/${SITE.phoneTel.replace("+", "")}?text=${encodeURIComponent(
    "Hi Kiran — I'd like a quote/advice on my project. Can we talk?"
  )}`;

  return (
    <div className="whatsAppFloat">
      <a className="btn primary" href={wa} target="_blank" rel="noreferrer">
        WhatsApp
      </a>
    </div>
  );
}
