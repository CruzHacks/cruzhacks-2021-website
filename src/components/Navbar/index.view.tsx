import React from "react";
import Button, { ButtonProps } from "components/Button/index.view";
import "./Navbar.scss";

interface NavbarProps {
  title: string;
  buttonProps: ButtonProps[];
}

const Navbar: React.FC<NavbarProps> = ({ title, buttonProps }: NavbarProps) => {
  return (
    <div className="Navbar">
      <div className="Navbar__title">{title}</div>
      <div className="Navbar__buttonContainer">
        {buttonProps.map((entry) => (
          <Button key={entry.label} {...entry} />
        ))}
      </div>
    </div>
  );
};

export default Navbar;
