"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <nav className={`navbar${open ? " navbar--open" : ""}`}>
      <a href="#" className="navbar__logo" onClick={closeMenu}>
        <img src="/logo.webp" alt="Horizons Polaris" draggable={false} />
      </a>

      <button
        type="button"
        className="navbar__toggle"
        aria-expanded={open}
        aria-controls="navbar-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((current) => !current)}
      >
        <span className="navbar__toggle-bar" />
        <span className="navbar__toggle-bar" />
        <span className="navbar__toggle-bar" />
      </button>

      <div id="navbar-menu" className="navbar__links">
        <a href="#welcome" className="navbar__link" onClick={closeMenu}>
          Welcome
        </a>
        <a href="#hackathon" className="navbar__link" onClick={closeMenu}>
          What is a hackathon?
        </a>
        <a href="#past-events" className="navbar__link" onClick={closeMenu}>
          Past events
        </a>
        <a href="#faq" className="navbar__link" onClick={closeMenu}>
          FAQ
        </a>
        <a
          href="https://horizons.hackclub.com/polaris"
          className="navbar__join"
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
        >
          Join
        </a>
      </div>
    </nav>
  );
}
