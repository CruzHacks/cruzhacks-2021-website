import React from "react";
import "./Background.scss";
import { ReactComponent as Wire } from "images/wire.svg";
interface BackgroundProps {
  children?: React.ReactNode;
}

const Background: React.FC<BackgroundProps> = ({
  children,
}: BackgroundProps) => {
  return (
    <div className="Background">
      <div className="Background_children">
        {children}
        {children}
        {children}
        {children}
        <Wire className="Background_wire"></Wire>
      </div>
    </div>
  );
};

export default Background;
