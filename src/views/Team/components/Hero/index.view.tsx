import * as React from "react";
import { ReactComponent as Backdrop } from "images/TeamPage/background.svg";

import "./Hero.scss";

interface HeroProps {
  description: string;
}

const Hero: React.FC<HeroProps> = ({ description }: HeroProps) => {
  return (
    <>
      <div className="TeamHero">
        <Backdrop className="TeamHero__backdrop" />
        <div className="TeamHero__titleContainer">
          <div className="TeamHero__titleText">CruzHacks /</div>
          <div className="TeamHero__titleText--secondary">Team</div>
          <div className="TeamHero__description">{description}</div>
        </div>
      </div>
    </>
  );
};

export default Hero;
