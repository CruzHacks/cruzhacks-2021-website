/* eslint-disable @typescript-eslint/no-var-requires */
import { useState } from "react";
import * as React from "react";
import "./schedule.scss";

const ScheduleComponent: React.FC = () => {
  const [selectedDay] = useState(1);
  return (
    <div className="Schedule">
      Hello from ScheduleComponent
      <img
        src={require(`images/schedule/day${selectedDay}.svg`).default}
        className="Schedule__schedule"
        alt="schedule"
        key="schedule"
        id="schedule"
      />
      <img
        src={require("images/schedule/moon.svg").default}
        className="Schedule__moon"
        alt="moon"
        key="moon"
        id="moon"
      />
    </div>
  );
};

export default ScheduleComponent;
