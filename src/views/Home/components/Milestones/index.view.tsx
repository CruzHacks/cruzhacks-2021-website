import React from "react";
import "./milestones.scss";
import { ReactComponent as Background } from "images/components/milestones/background.svg";
import { ReactComponent as Pencil } from "images/components/milestones/pencil.svg";
import { ReactComponent as Shell } from "images/components/milestones/shell.svg";

type Milestones = {
  title: string;
  text: string;
};

interface MilestoneProps {
  milestones: Milestones[];
}

const MilestonesComponent: React.FC<MilestoneProps> = ({
  milestones,
}: MilestoneProps) => {
  return (
    <div className="Milestones">
      <Background className="Milestones__background" />
      <div className="Milestones__container">
        <div className="Milestones__title">Milestones of 2021</div>
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
