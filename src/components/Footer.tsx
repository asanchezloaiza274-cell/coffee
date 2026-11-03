import { Link } from "react-router-dom";

export default function Footer() {
  const socials = [
    { label: "Instagram", href: "instagram.com" },
    { label: "Facebook", href: "facebook.com" },
    { label: "Tiktok", href: "tiktok.com" },
  ];

  return (
    <footer className="border-t border-line mt-24 py-10">
      <div className="grid grid-cols-3 text-sm  max-w-7xl mx-auto">
        <Link
          to="/"
          className="font-display text-[1.75rem] font-medium leading-none"
        >
          Brasa
        </Link>
        <address className="text-[15px] not-italic text-muted">
          Carrera 15 #25-49 Santa Rosa de Cabal, Risaralda
        </address>
        <nav className="flex gap-4 text-[15px] text-muted">
          {socials.map(({ label, href }) => (
            <a
              href={`https://${href}`}
              key={label}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-accent"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
