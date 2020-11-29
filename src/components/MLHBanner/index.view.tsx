import React from "react";
import "./mlhbanner.scss";

const MLHBanner: React.FC = () => {
  return (
    <a
      id="mlh-trust-badge"
      className="MLHBanner"
      href="https://mlh.io/seasons/2021/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2021-season&utm_content=gray"
      target="_blank"
      rel="noreferrer"
    >
      <img
        src="https://s3.amazonaws.com/logged-assets/trust-badge/2021/mlh-trust-badge-2021-gray.svg"
        alt="Major League Hacking 2021 Hackathon Season"
        className="MLHBanner__image"
      />
    </a>
  );
};

export default MLHBanner;
