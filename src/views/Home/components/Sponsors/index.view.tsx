import React from "react";
import "./sponsors.scss";

const SponsorsComponent: React.FC = () => {
  return (
    <div className="Sponsors">
      <div className="Sponsors__titleContainer">
        <h2 className="Sponsors__title">Thanks to Our Sponsors</h2>
        <hr className="Sponsors__ruleLine" />
        <h2 className="Sponsors__title">
          Powered by Blackstone Launchpad & CIED & Techstars
        </h2>
      </div>
      <div className="Sponsors__tera"></div>
      <div className="Sponsors__giga"></div>
      <div className="Sponsors__mega"></div>
      <div className="Sponsors__kilo"></div>
    </div>
  );
};

export default SponsorsComponent;
