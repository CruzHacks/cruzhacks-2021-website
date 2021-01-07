import React from "react";
import { ReactComponent as Background } from "images/components/prizes/background.svg";

import "./prizes.scss";

type PrizeTopics = {
  title: string;
  icon: React.ReactNode;
  text: string;
};

interface PrizeProps {
  topics: PrizeTopics[];
}

const PrizesComponent: React.FC<PrizeProps> = ({ topics }: PrizeProps) => {
  return (
    <div className="Prizes">
      <Background className="Prizes__background" />
      <div className="Prizes__container">
        <div className="Prizes__title">Topics</div>
        <div className="Prizes__boxContainer">
          {Object.values(topics).map(({ title, icon, text }) => {
            return (
              <div className="Prizes__box" key={title}>
                <div className="Prizes__boxTop">
                  <div className="Prizes__prizeIcon">{icon}</div>
                  <div className="Prizes__prizeTitle">{title}</div>
                </div>
                <div className="Prizes__boxBottom">{text}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PrizesComponent;
