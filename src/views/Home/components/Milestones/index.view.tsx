import React from "react";
import "./milestones.scss";

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
      <div className="Milestones__container">
        {Object.entries(milestones).map(([_, milestone]) => (
          <div className="Milestones__box" key={_}>
            <h1 className="Milestones__box--top">{milestone.text}</h1>
            <p className="Milestones__box--bottom">{milestone.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MilestonesComponent;
