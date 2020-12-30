import React, { FunctionComponent, SVGProps } from "react";
import "./sponsors.scss";

interface Sponsors {
  sponsors: {
    name: string;
    tier: string;
    logo: FunctionComponent<SVGProps<SVGSVGElement>>;
    url: string;
  }[];
}

const SponsorsComponent: React.FC<Sponsors> = () => {
  return (
    <div className="Sponsors">
      <div className="Sponsors__titleContainer">
        <h2 className="Sponsors__title">Thanks to Our Sponsors</h2>
        <hr className="Sponsors__ruleLine" />
      </div>
      <div className="Sponsors__logoContainer"></div>
    </div>
  );
};

export default SponsorsComponent;
