/* eslint-disable @typescript-eslint/no-var-requires */
import { useState } from "react";
import * as React from "react";
import "./schedule.scss";
import cx from "classnames";

const scheduleItems = [
  {
    date: "Friday, January 15, 2021",
    events: [
      { event: "Event Begins", time: "5:00 pm", end: true },
      { event: "Opening Ceremony", time: "7:00 pm", end: true },
      { event: "Hacking Begins!", time: "9:00 pm", end: true },
      {
        event: "Idea Development + UCSC Resources",
        time: "9:00 pm",
        end: true,
      },
      { event: "Software Ethics", time: "10:45 pm", end: true },
    ],
  },
  {
    date: "Saturday, January 16, 2021",
    events: [
      { event: "Intro to Web Development", time: "10:30 am", end: false },
      { event: "Basics of NLP", time: "", end: true },
      { event: "AWS", time: "11:30 am", end: false },
      { event: "MongoDB", time: "", end: true },
      { event: "HTML", time: "12:30 am", end: false },
      { event: "Intro to Python", time: "", end: true },
      { event: "Machine Learning Basics", time: "1:30 pm", end: false },
      { event: "Arduino LED", time: "", end: true },
      {
        event: "Civil Innovation",
        time: "2:30 pm",
        end: false,
      },
      { event: "Data Driven Advocacy", time: "", end: true },
      { event: "Google Cloud Platform", time: "3:30 pm", end: false },
      { event: "ReactJS", time: "", end: true },
      { event: "Intro to Web Design", time: "4:30 pm", end: true },
    ],
  },
  {
    date: "Sunday, January 17, 2021",
    events: [
      { event: "Project Submissions", time: "10:00 am", end: true },
      { event: "Judging", time: "11:30 am", end: true },
      { event: "Closing Ceremony", time: "2:00 pm", end: true },
      { event: "Event Ends", time: "4:00 pm", end: true },
    ],
  },
];
const ScheduleComponent: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState(0);
  return (
    <div className="Schedule">
      <div className="Schedule__schedule">
        <div className="Schedule__whiteRect">
          <div className="Schedule__title">General Schedule</div>
          <div className="Schedule__date">
            {scheduleItems[selectedDay].date}
          </div>
          <div className="Schedule__greyRect"></div>
          <div className="Schedule__eventContainer">
            {scheduleItems[selectedDay].events.map(({ event, time, end }) => {
              return (
                <div className="Schedule__event" key={event}>
                  <div className="Schedule__eventText">{event}</div>
                  <div className="Schedule__timeText">{time}</div>
                  <div
                    className={cx(
                      { "Schedule__divider--variant": end === false },
                      "Schedule__divider"
                    )}
                  ></div>
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
        src={require("images/components/schedule/moon.svg").default}
        className="Schedule__moon"
        alt="moon"
        key="moon"
        id="moon"
      />
      <img
        src={require("images/components/schedule/stars.svg").default}
        className="Schedule__stars"
        alt="stars"
        key="stars"
        id="stars"
      />
      <img
        src={require("images/components/schedule/comets.svg").default}
        className="Schedule__comets"
        alt="comets"
        key="comets"
        id="comets"
      />
      <img
        src={require("images/components/schedule/constellation.svg").default}
        className="Schedule__constellation"
        alt="constellation"
        key="constellation"
        id="constellation"
      />
      <img
        src={require("images/components/schedule/grid.svg").default}
        className="Schedule__grid"
        alt="grid"
        key="grid"
        id="grid"
      />
    </div>
  );
};

export default ScheduleComponent;
