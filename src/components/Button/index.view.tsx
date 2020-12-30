import * as React from "react";
import "./Button.scss";

export enum ButtonTypes {
  PRIMARY = 0,
  SECONDARY = 1,
}

export interface ButtonProps {
  text: string;
  link: string;
  label: string;
  type: ButtonTypes;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  link,
  label,
  className,
}: ButtonProps) => {
  return (
    <button className={`${className}`} aria-label={label}>
      <a className="Button__link" href={link} target="_blank" rel="noreferrer">
        {text}
      </a>
    </button>
  );
};

export default Button;
