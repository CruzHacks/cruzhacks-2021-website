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
  type: ButtonTypes
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  link,
  label,
  className,
}: ButtonProps) => {
  return (
    <a className="Button" href={link} target="_blank" rel="noreferrer">
      <button className={`Button__element ${className}`} aria-label={label}>
        {text}
      </button>
    </a>
  );
};

export default Button;
