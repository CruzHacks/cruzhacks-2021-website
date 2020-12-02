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
        <div className="Background_children">
          {Array.isArray(children)
            ? children.filter((child, index) => index < 4)
            : children}
          <Wire className="Background_wire"></Wire>
        </div>
      </div>
      <div className="Background_gradient">
        <div className="Background_children">
          {Array.isArray(children)
            ? children.filter((child, index) => index >= 4)
            : children}
          <Rainbow className="Background_wire"></Rainbow>
        </div>
      </div>
    </div>
  );
};

export default Background;
