import * as React from "react";
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
    <div className="Background">
      <div className="Background__children">{children}</div>
      <Wire className="Background__wire" />
      <Rainbow className="Background__wire--variant" />
    </div>
  );
};

export default Background;
