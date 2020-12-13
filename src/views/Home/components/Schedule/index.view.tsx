/* eslint-disable @typescript-eslint/no-var-requires */
// import { useState } from "react";
import * as React from "react";
import "./schedule.scss";

const scheduleItems = [
  {
    date: "Friday, January 15, 2021",
  },
  {
    date: "Saturday, January 16, 2021",
  },
  {
    date: "Sunday, January 17, 2021",
  },
];
const ScheduleComponent: React.FC = () => {
  // const [selectedDay] = useState(1);
  return (
    <div className="Schedule">
      <div className="Schedule__container">
        <div className="Schedule__whiteRect">
          <div className="Schedule__title">General Schedule</div>
          <div className="Schedule__date">{scheduleItems[0].date}</div>
          <div className="Schedule__tab Schedule__dayOne">Day 1</div>
          <div className="Schedule__tab Schedule__dayTwo">Day 2</div>
          <div className="Schedule__tab Schedule__dayThree">Day 3</div>
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
