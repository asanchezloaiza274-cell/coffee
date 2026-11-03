import { Link, NavLink } from "react-router-dom";
import NavbarMobile from "./NavbarMobile";
import { links } from "../constants";
import MenuIcon from "../img/menu.svg";
import { useState } from "react";

export default function Navbar() {
  const [isMenuClose, setIsMenuClose] = useState(true);

  const openMenu = () => {
    setIsMenuClose(false);
  };

  const closeMenu = () => {
    setIsMenuClose(true)
    console.log("Hola");
    
  };

  return (
    <header className="flex items-center justify-between border-b border-line py-6 max-w-7xl mx-auto px-5 md:px-0">
      <Link
        to="/"
        className="font-display leading-none text-[38px] md:text-[27px] text-ink"
      >
        Brasa
      </Link>

      <button onClick={openMenu}>
        <img
          src={MenuIcon}
          alt="Menú Hamburguesa"
          className="text-white flex lg:hidden"
          width={38}
        />
      </button>

      <nav className="hidden lg:flex items-center gap-7 text-sm">
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
      <NavbarMobile isMenuClose={isMenuClose} closeMenu={closeMenu} />
    </header>
  );
}
