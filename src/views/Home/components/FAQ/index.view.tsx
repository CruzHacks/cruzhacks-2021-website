import * as React from "react";
import "./faq.scss";

const text = [
  [
    {
      question: "What is a Hackathon?",
      answer:
        "A hackathon is a weekend-long event where you can build out your ideas, network, and show off your skills. At CruzHacks, our event consists of forming teams, choosing an idea, building it, and showing it off at the end. Hundreds of students, sponsors, mentors, and judges gather together to push the limits of what you can build, only limited by your imagination. CruzHacks will conduct workshops for you to learn new skills and network with folks, so don’t worry if this is your first time attending a hackathon!",
    },
    {
      question: "How long is CruzHacks?",
      answer:
        "CruzHacks is a 3 day event that starts Friday night and ends Sunday afternoon. This year CruzHacks will be taking place January 15-17, 2021.",
    },
    {
      question: "How many people can be on a team?",
      answer: "Each team can have a maximum number of 4 people.",
    },
  ],
  [
    {
      question: "Who can participate?",
      answer:
        "Everyone can! This event is open to coders, designers, artists, project managers, and anyone else who wants to create! No prior coding or technical experience is necessary,​ ​and​ ​everyone​ ​is​ ​welcome​ ​to​ ​participate​ ​in​ ​the​ ​hackathon!",
    },
    {
      question: "Is CruzHacks restricted to UCSC students?",
      answer:
        "No, CruzHacks accepts applicants around the world. How will CruzHacks take place? CruzHacks 2021 will be held virtually per CDC guidelines. The event will take place through Hopin.to and Slack.",
    },
    {
      question: "Can first year students apply?",
      answer: "Yes! Students of ANY grades and majors can apply.",
    },
  ],
  [
    {
      question: "Where can I receive updates on CruzHacks?",
      answer:
        "Check out our Instagram page and Twitter account @cruzhacks to receive updates. We will also email attendees closer to the event. Our Facebook event is a great place to find other hackers to team​ ​up with,​ ​or​ ​explore new​ ​ideas​ ​on​ ​what​ ​to​ ​build.",
    },
    {
      question: "Do I need coding / hackathon experience to apply?",
      answer:
        "No experience required. We are looking for applicants who want to learn and get creative! 47% of our attendees are first time hackers.",
    },
    {
      question: "Do you need a team in mind when applying?",
      answer:
        "It is not necessary to have a team formed at the time of application nor the actual hackathon.",
    },
    {
      question: "When will decisions be made?",
      answer: "Decisions sent out a week before the hackathon.",
    },
  ],
];
const FAQComponent: React.FC = () => {
  return (
    <div className="FAQ">
      <div className="FAQ__whiteRect">
        <div className="FAQ__top">Frequently Asked Questions</div>
        <div className="FAQ__bottom">
          <div className="FAQ__pinkRect--left">
            {text[0].map((item) => {
              return (
                <>
                  <div className="FAQ__text--question">{item.question}</div>
                  <div className="FAQ__text--answer">{item.answer}</div>
                </>
              );
            })}
          </div>
          <div className="FAQ__pinkRect--middle">
            {text[1].map((item) => {
              return (
                <>
                  <div className="FAQ__text--question">{item.question}</div>
                  <div className="FAQ__text--answer">{item.answer}</div>
                </>
              );
            })}
          </div>
          <div className="FAQ__pinkRect--right">
            {text[2].map((item) => {
              return (
                <>
                  <div className="FAQ__text--question">{item.question}</div>
                  <div className="FAQ__text--answer">{item.answer}</div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQComponent;
