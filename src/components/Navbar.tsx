import { Link, NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Inicio" },
  { to: "/menu", label: "Menú" },
  { to: "/about-us", label: "Nosotros" },
  { to: "/reservations", label: "Reservas" },
];

export default function Navbar() {
  return (
    <section className="flex items-center justify-between border-b border-line py-6 max-w-7xl mx-auto">
      <Link to="/" className="font-display leading-none text-[27px] text-ink">
        Brasa
      </Link>
      <nav className="flex items-center gap-7 text-sm">
        {links.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === "/"}
            className={({ isActive }) => `
              text-[15px] transition-colors hover:text-accent ${
                isActive ? "text-accent" : "text-muted"
              }
            
            `}
          >
            {label}
          </NavLink>
        ))}
        <Link
          to="/reservations"
          className="bg-accent text-black font-bold py-3 px-5"
        >
          Reservar mesa
        </Link>
      </nav>
    </section>
  );
}
