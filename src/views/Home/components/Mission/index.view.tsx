import React from "react";
import { ReactComponent as Background } from "images/components/mission/background.svg";
import { ReactComponent as LeftCan } from "images/components/mission/can-left.svg";
import { ReactComponent as RightCan } from "images/components/mission/can-right.svg";
import { ReactComponent as Flower } from "images/components/mission/flower.svg";
import "./mission.scss";

interface MissionProps {
  about_text: { [key: string]: string };
  mission_text: { [key: string]: string };
}

const MissionComponent: React.FC<MissionProps> = ({
  about_text,
  mission_text,
}: MissionProps) => {
  return (
    <div className="Mission">
      <Background className="Mission__background" />
      <div className="Mission--text">
        <div className="Mission__section">
          <div className="Mission__highlight" />
          <div className="Mission__section--subsection">
            <div className="Mission__title">{about_text.title}</div>
            <div className="Mission__body">
              <div className="Mission__rectangle" />
              <div className="Mission__text">{about_text.body}</div>
            </div>
          </div>
        </div>
        <div className="Mission__section">
          <div className="Mission__title">{mission_text.title}</div>
          <div className="Mission__body">
            <div className="Mission__rectangle" />
            <div className="Mission__text">{mission_text.body}</div>
          </div>
        </div>
      </div>
      <div className="Mission--images">
        <LeftCan className="Mission__can--left" />
        <RightCan className="Mission__can--right" />
        <Flower className="Mission__flower" />
      </div>
    </div>
  );
};

export default MissionComponent;
