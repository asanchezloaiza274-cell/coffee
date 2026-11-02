import { Link, NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Inicio" },
  { to: "/menu", label: "Menú" },
  { to: "/about-us", label: "Nosotros" },
  { to: "/reservations", label: "Reservas" },
];

export default function Navbar() {
  return (
    <header>
      <Link to="/">Brasa</Link>
      <nav>
        {links.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === "/"}
            className={({ isActive }) => (isActive ? "on" : "")}
          >
            {label}
          </NavLink>
        ))}
        <Link to="/reservations">Reservar mesa</Link>
      </nav>
    </header>
  );
}
