import React from "react";
import "./sponsors.scss";

interface Sponsors {
  name: string;
  tier: string;
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
        {Object.values(sponsors).map(({ name, url, logo }) => (
          <a key={name} href={url} target="_blank" rel="noreferrer">
            <img
              src={`data:image/svg+xml;base64,${logo}`}
              alt={name}
              className={"Sponsors__" + name}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default SponsorsComponent;
