import React from "react";
import "./Background.scss";
import { ReactComponent as Wire } from "images/wire.svg";
import { ReactComponent as Rainbow } from "images/rainbowpath.svg";
interface BackgroundProps {
  children?: React.ReactNode;
}

const Background: React.FC<BackgroundProps> = ({
  children,
}: BackgroundProps) => {
  return (
    <div>
      <div className="Background">
        <div className="Background__children">
          {Array.isArray(children)
            ? children.filter((child, index) => index < 4)
            : children}
          <Wire className="Background__wire"></Wire>
        </div>
      </div>
      <div className="Background__gradient">
        <div className="Background__children">
          {Array.isArray(children)
            ? children.filter((child, index) => index >= 4)
            : children}
          <Rainbow className="Background__wire"></Rainbow>
        </div>
      </div>
    </div>
  );
};

export default Background;
