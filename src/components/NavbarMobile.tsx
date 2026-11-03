import { Link } from "react-router-dom";
import { links } from "../constants";
import CloseMenuIcon from "../img/close_menu.svg";

export default function NavbarMobile({ isMenuClose, closeMenu }) {
  return (
    <nav
      className={`${isMenuClose ? "hidden" : "flex"}  flex-col fixed inset-0 bg-bg py-15 h-screen text-center gap-8`}
    >
      {links.map(({ to, label }) => (
        <Link key={label} to={to} className="text-3xl">
          {label}
        </Link>
      ))}

      <button onClick={closeMenu}>
        <img
          src={CloseMenuIcon}
          alt="ícono de cerrar menú"
          className="fixed top-5 right-5"
          width={38}
        />
      </button>
    </nav>
  );
}
