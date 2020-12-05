import React from "react";
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
      <div className="Mission__section">
        <div className="Mission__highlight" />
        <div className="Mission__section--sub-container">
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
  );
};

export default MissionComponent;
