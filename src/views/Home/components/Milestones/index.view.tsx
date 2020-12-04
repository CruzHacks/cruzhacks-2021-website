import React from "react";
import "./milestones.scss";
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
      <h1 className="Milestones__title">Milestones of 2020</h1>
      <Pencil className="Milestones__pencil" />
      <Shell className="Milestones__shell" />
      <div className="Milestones__container">
        {Object.values(milestones).map(({ title, text }) => (
          <div className="Milestones__box" key={title}>
            <div className="Milestones__boxTop">{text}</div>
            <div className="Milestones__boxBottom">{title}</div>
          </div>
        ))}
      </div>
      <Pencil className="Milestones__pencil--alt" />
    </div>
  );
};

export default MilestonesComponent;
