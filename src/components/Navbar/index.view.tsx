import React from "react";
import Button, { ButtonProps } from "components/Button/index.view";
import "./Navbar.scss";

interface NavbarProps {
  title: string;
  sponsorButtonProp: ButtonProps;
  hackerButtonProp: ButtonProps;
}

const Navbar: React.FC<NavbarProps> = ({
  title,
  sponsorButtonProp,
  hackerButtonProp,
}: NavbarProps) => {
  return (
    <div className="Navbar">
      <div className="Navbar__title">{title}</div>
      <div className="Navbar__buttonContainer">
        <Button {...sponsorButtonProp} />
        <Button {...hackerButtonProp} />
      </div>
    </div>
  );
};

export default Navbar;
