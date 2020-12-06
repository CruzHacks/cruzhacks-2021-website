import * as React from "react";
import Button, { ButtonProps, ButtonTypes } from "components/Button/index.view";
import "./Navbar.scss";

interface NavbarProps {
  title: string;
  buttonProps: ButtonProps[];
}

const Navbar: React.FC<NavbarProps> = ({ title, buttonProps }: NavbarProps) => {
  return (
    <div className="Navbar">
      <div className="Navbar__title">{title}</div>
      <div className="Navbar__buttonContainer--primary">
        {buttonProps
          .filter((entry) => entry.type === ButtonTypes.PRIMARY)
          .map((entry) => (
            <Button key={entry.label} {...entry} />
          ))}
      </div>
      <div className="Navbar__buttonContainer--secondary">
        {buttonProps
          .filter((entry) => entry.type === ButtonTypes.SECONDARY)
          .map((entry) => (
            <Button key={entry.label} {...entry} />
          ))}
      </div>
    </div>
  );
};

export default Navbar;
