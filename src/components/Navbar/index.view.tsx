import React from "react";
import "./Navbar.scss";

interface NavbarProps {
  title: string;
  sponsorURL: string;
  hackerURL: string;
}

const Navbar: React.FC<NavbarProps> = ({
  title,
  sponsorURL,
  hackerURL,
}: NavbarProps) => {
  return (
    <div className="Navbar">
      <div className="Navbar__title">{title}</div>
      <div className="Navbar__buttonContainer">
        <a href={sponsorURL} target="_blank" rel="noreferrer">
          <button
            className="Navbar__button"
            aria-label="sponsor sign-up button"
          >
            Be a sponsor!
          </button>
        </a>
        <a href={hackerURL} target="_blank" rel="noreferrer">
          <button className="Navbar__button" aria-label="hacker sign-up button">
            Apply to hack!
          </button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
