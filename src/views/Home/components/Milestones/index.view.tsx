import React from "react";
import "./milestones.scss";
import { ReactComponent as Background } from "images/components/milestones/background.svg";
import { ReactComponent as Pencil } from "images/components/milestones/pencil.svg";
import { ReactComponent as Shell } from "images/components/milestones/shell.svg";

const milestones = [
  {
    title: "Attendees",
    text: "500+",
  },
  {
    title: "First-time Hackers",
    text: "47%",
  },
  {
    title: "Projects",
    text: "60+",
  },
  {
    title: "In Prizes",
    text: "$20,000+",
  },
];

const MilestonesComponent: React.FC = () => {
  return (
    <div className="Milestones">
      <Background className="Milestones__background" />
      <div className="Milestones__container">
        <div className="Milestones__title">Milestones of 2020</div>
        <Pencil className="Milestones__pencil" />
        <Shell className="Milestones__shell" />
        <Pencil className="Milestones__pencil--alt" />
        <div className="Milestones__boxContainer">
          {Object.values(milestones).map(({ title, text }) => {
            return (
              <div className="Milestones__box" key={title}>
                <div className="Milestones__boxTop">{text}</div>
                <div className="Milestones__boxBottom">{title}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MilestonesComponent;
