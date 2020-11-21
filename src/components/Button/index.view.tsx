/* eslint-disable @typescript-eslint/no-var-requires */
import React from "react";
import "./Button.scss";

export interface ButtonProps {
  text: string;
  link: string;
  label: string;
}

const Button: React.FC<ButtonProps> = ({ text, link, label }: ButtonProps) => {
  return (
    <a className="Button" href={link} target="_blank" rel="noreferrer">
      <button className="Button__element" aria-label={label}>
        {text}
      </button>
    </a>
  );
};

export default Button;
