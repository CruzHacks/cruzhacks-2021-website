/* eslint-disable @typescript-eslint/no-var-requires */
import * as React from "react";
import { ReactComponent as PictureFrame } from "images/TeamPage/frame.svg";
import LinkedIn from "images/TeamPage/linkedin.svg";
import "./Card.scss";

interface CardProps {
  memberName: string;
  role: string;
  linkedin: string;
}

const Card: React.FC<CardProps> = ({
  memberName,
  role,
  linkedin,
}: CardProps) => {
  return (
    <div key={memberName} className="Card">
      <PictureFrame className="Card__pictureFrame" />
      <div className="Card__frameContainer">
        <div className="Card__imageContainer">
          <img
            src={
              require(`images/TeamPage/team/${memberName.replace(
                /\s/g,
                ""
              )}.jpg`).default
            }
            className="Card__profilePicture"
            alt={memberName}
          />
        </div>
        <div className="Card__teammateName">{memberName}</div>
        <div className="Card__teamName">{role}</div>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href={linkedin}
          className="Card__linkedinContainer"
        >
          <img
            src={LinkedIn}
            className="Card__linkedinLogo"
            alt={"LinkedIn Logo"}
          />
        </a>
      </div>
    </div>
  );
};

export default Card;
