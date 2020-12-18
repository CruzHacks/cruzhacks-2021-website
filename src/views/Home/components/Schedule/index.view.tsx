/* eslint-disable @typescript-eslint/no-var-requires */
import { useState } from "react";
import * as React from "react";
import "./schedule.scss";
import cx from "classnames";

const scheduleItems = [
  {
    date: "Friday, January 15, 2021",
    events: [
      { event: "Event Begins", time: "5:00 pm" },
      { event: "Opening Ceremony", time: "7:00 pm" },
      { event: "Hacking Begins!", time: "9:00 pm" },
      { event: "Ongoing Workshops", time: "10:00 pm" },
    ],
  },
  {
    date: "Saturday, January 16, 2021",
    events: [{ event: "Ongoing Workshops", time: "10:30 am" }],
  },
  {
    date: "Sunday, January 17, 2021",
    events: [
      { event: "Project Submissions", time: "10:00 am" },
      { event: "Judging", time: "11:30 am" },
      { event: "Closing Ceremony", time: "2:00 pm" },
      { event: "Event Ends", time: "4:00 pm" },
    ],
  },
];
const ScheduleComponent: React.FC = () => {
  /*
  const changeDay = (day: number) => {
    const prevActive = document.getElementById(`day${selectedDay + 1}`);
    if (prevActive) {
      prevActive.classList.remove("Schedule__tab--variant");
      prevActive.style.zIndex = "-3";
    }
    const currActive = document.getElementById(`day${day}`);
    if (currActive) {
      currActive.classList.add("Schedule__tab--variant");
      currActive.style.zIndex = "0";
      setSelectedDay(day - 1);
    }
  };
  */
  const [selectedDay, setSelectedDay] = useState(0);
  return (
    <div className="Schedule">
      <div className="Schedule__container">
        <div className="Schedule__whiteRect">
          <div className="Schedule__title">General Schedule</div>
          <div className="Schedule__date">
            {scheduleItems[selectedDay].date}
          </div>
          <div className="Schedule__greyRect"></div>
          <div className="Schedule__eventContainer">
            {scheduleItems[selectedDay].events.map((event) => {
              return (
                <div className="Schedule__event" key={event.event}>
                  <div className="Schedule__eventText">{event.event}</div>
                  <div className="Schedule__timeText">{event.time}</div>
                  <div className="Schedule__greyRect--variant"></div>
                </div>
              );
            })}
          </div>
          <div
            id="day1"
            onClick={() => setSelectedDay(0)}
            className={cx(
              {
                "Schedule__tab--variant": selectedDay === 0,
              },
              "Schedule__tab",
              "Schedule__dayOne"
            )}
          >
            Day 1
          </div>
          <div
            id="day2"
            onClick={() => setSelectedDay(1)}
            className={cx(
              {
                "Schedule__tab--variant": selectedDay === 1,
              },
              "Schedule__tab",
              "Schedule__dayTwo"
            )}
          >
            Day 2
          </div>
          <div
            id="day3"
            onClick={() => setSelectedDay(2)}
            className={cx(
              {
                "Schedule__tab--variant": selectedDay === 2,
              },
              "Schedule__tab",
              "Schedule__dayThree"
            )}
          >
            Day 3
          </div>
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
