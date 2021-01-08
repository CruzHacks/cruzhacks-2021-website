import * as React from "react";
import "./Hero.scss";

interface HeroProps {
  description: string;
}

const Hero: React.FC<HeroProps> = ({ description }: HeroProps) => {
  return (
    <div className="TeamHero">
      <div className="TeamHero__titleContainer">
        <div className="TeamHero__titleText">CruzHacks /</div>
        <div className="TeamHero__titleText--secondary">Team</div>
        <div className="TeamHero__description">{description}</div>
      </div>
    </div>
  );
};

export default Hero;
