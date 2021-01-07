import * as React from "react";
import { ReactComponent as UpperLeftConstellation } from "images/components/speakers/background/upleftconstellation.svg";
import { ReactComponent as BottomLeftConstellation } from "images/components/speakers/background/botleftconstellation.svg";
import { ReactComponent as BackdropConstellations } from "images/components/speakers/background/backdropconstellations.svg";
import { ReactComponent as UpperRightConstellation } from "images/components/speakers/background/uprightconstellation.svg";
import { ReactComponent as BottomRightConstellation } from "images/components/speakers/background/botrightconstellation.svg";
import { ReactComponent as LeftCircle } from "images/components/speakers/background/leftcircle.svg";
import { ReactComponent as RightCircle } from "images/components/speakers/background/rightcircle.svg";
import "./background.scss";

const SpeakerBackground: React.FC = () => {
  return (
    <div className="SpeakerBackground">
      <BackdropConstellations className="SpeakerBackground__backdrop" />
      <UpperLeftConstellation className="SpeakerBackground__upLeftConstellation" />
      <BottomLeftConstellation className="SpeakerBackground__botLeftConstellation" />
      <UpperRightConstellation className="SpeakerBackground__topRightConstellation" />
      <BottomRightConstellation className="SpeakerBackground__botRightConstellation" />
      <LeftCircle className="SpeakerBackground__leftCircle" />
      <RightCircle className="SpeakerBackground__rightCircle" />
    </div>
  );
};

export default SpeakerBackground;
