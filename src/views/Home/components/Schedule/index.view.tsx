/* eslint-disable @typescript-eslint/no-var-requires */
// import { useState } from "react";
import * as React from "react";
import "./schedule.scss";

const ScheduleComponent: React.FC = () => {
  // const [selectedDay] = useState(1);
  return (
    <div className="Schedule">
      Hello from ScheduleComponent
      <div className="Schedule__container">
        <div className="Schedule__whiteRect">
          <div className="Schedule__activeTab Schedule__dayOne"></div>
          <div className="Schedule__activeTab Schedule__dayTwo"></div>
          <div className="Schedule__activeTab Schedule__dayThree"></div>
        </div>
        <div className="Schedule__pinkRect"></div>
        <div className="Schedule__whiteRect--variant"></div>
      </div>
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
