import * as React from "react";
import "./Button.scss";

export interface ButtonProps {
  text: string;
  link: string;
  label: string;
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
