import { Link } from "react-router-dom";
import { links } from "../constants";
import CloseMenuIcon from "../img/close_menu.svg";

export default function NavbarMobile({
  isMenuClose,
  closeMenu,
}: NavbarMobileProps) {
  return (
    <nav
      aria-hidden={isMenuClose}
      inert={isMenuClose}
      className="mobile-nav fixed inset-0 z-50 flex h-screen flex-col gap-8 bg-bg py-15 text-center lg:hidden"
      style={{
        transform: isMenuClose ? "translateX(100%)" : "translateX(0)",
        opacity: isMenuClose ? 0 : 1,
        pointerEvents: isMenuClose ? "none" : "auto",
      }}
    >
      {links.map(({ to, label }) => (
        <Link key={label} to={to} className="text-3xl" onClick={closeMenu}>
          {label}
        </Link>
      ))}

      <button onClick={closeMenu} aria-label="Cerrar menú">
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
