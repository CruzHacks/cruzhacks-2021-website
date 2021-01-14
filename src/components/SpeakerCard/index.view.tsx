import * as React from "react";
import cx from "classnames";
import { SpeakerProp } from "views/Home/props/speakers";
import "./SpeakerCard.scss";

const SpeakerCard: React.FC<SpeakerProp> = ({
  speakerName,
  image,
  company,
  companyLink,
  linkedin,
  isOpening,
}: SpeakerProp) => {
  return (
    <div className="SpeakerCard">
      <div className="SpeakerCard__firstLayer">
        <div className="SpeakerCard__secondLayer">
          <div className="SpeakerCard__thirdLayer">
            <div className="SpeakerCard__imageContainer">
              <img
                alt={speakerName}
                className={cx("SpeakerCard__image", {
                  SpeakerCard__question: speakerName === "Coming Soon",
                })}
                src={image}
              />
            </div>
          </div>
          <div className="SpeakerCard__nameContainer">
            <span className="SpeakerCard__name">{speakerName}</span>
          </div>
        </div>
        <div className="SpeakerCard__infoContainer">
          <a
            className="SpeakerCard__info"
            href={companyLink}
            target="_blank"
            rel="noreferrer"
          >
            {company}
          </a>
          <div className="SpeakerCard__divider"></div>
          <a
            className="SpeakerCard__info"
            href={linkedin === "TBD" ? undefined : linkedin}
            target="_blank"
            rel="noreferrer"
          >
            {linkedin === "TBD" ? "TBD" : "LinkedIn"}
          </a>
          <div className="SpeakerCard__divider"></div>
          <span className="SpeakerCard__info">
            {isOpening ? "Opening Speaker" : "Closing Speaker"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SpeakerCard;
