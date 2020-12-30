import React from "react";
import "./sponsors.scss";

interface Sponsors {
  name: string;
  className: string;
  logo: string;
  url: string;
}

interface SponsorProps {
  sponsors: Sponsors[];
}

const SponsorsComponent: React.FC<SponsorProps> = ({
  sponsors,
}: SponsorProps) => {
  return (
    <div className="Sponsors">
      <div className="Sponsors__titleContainer">
        <h2 className="Sponsors__title">Thanks to Our Sponsors</h2>
        <hr className="Sponsors__ruleLine" />
      </div>
      <div className="Sponsors__logoContainer">
        {Object.values(sponsors).map(({ name, className, url, logo }) => (
          <a
            key={name}
            href={url}
            className={"Sponsors__" + className}
            target="_blank"
            rel="noreferrer"
          >
            <img src={logo} alt={name} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default SponsorsComponent;
