import * as React from "react";
import SpeakerCard from "components/SpeakerCard/index.view";
import SpeakerBackground from "./background/index.view";
import { SpeakerProp } from "views/Home/props/speakers";
import "./speakers.scss";

interface SpeakerProps {
  speakers: SpeakerProp[];
  comingSoon: SpeakerProp[];
}

const SpeakersComponent: React.FC<SpeakerProps> = ({
  speakers,
  comingSoon,
}: SpeakerProps) => {
  return (
    <div className="Speakers">
      <SpeakerBackground />
      <div className="Speakers__titleContainer">
        <div className="Speakers__title">Keynote Speakers</div>
      </div>
      <div className="Speakers__cardsContainer">
        {Object.entries(speakers).map(([type, props]) => (
          <SpeakerCard {...props} key={type} />
        ))}
        {Object.entries(comingSoon).map(([type, props]) => (
          <SpeakerCard {...props} key={type} />
        ))}
      </div>
    </div>
  );
};

export default SpeakersComponent;
