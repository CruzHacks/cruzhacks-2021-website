import * as React from "react";
import "./Background.scss";
import { ReactComponent as Wire } from "images/wire.svg";
import { ReactComponent as Rainbow } from "images/rainbowpath.svg";

const Background: React.FC = () => {
  return (
    <div className="Background">
      <Wire className="Background__wire" />
      <Rainbow className="Background__wire--variant" />
    </div>
  );
};

export default Background;
