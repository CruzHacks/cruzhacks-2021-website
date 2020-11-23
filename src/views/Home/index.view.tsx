import React from "react";
import HeroView from "views/Hero/index.view";
// import Navbar from "components/Navbar/index.view";
import Button from "components/Button/index.view";
import EmailSubscriptionForm from "components/EmailSubscription/index.view";
import "./Home.scss";

const title = [
  {
    text: "CruzHacks 2021 /",
    style: "",
  },
  {
    text: "January 15-17",
    style: "--secondary",
  },
];

const description = [
  {
    description:
      "CruzHacks is the largest hackathon in Santa Cruz. Each year, we invite hundreds of students to develop solutions to real-world problems, pursue inclusion in tech, and kindle the spirit of innovation.  ",
  },
  {
    description: "This year, we’re bringing CruzHacks to you.  ",
  },
];

const buttonProps = {
  hacker: {
    text: "Apply to hack!",
    link: "https://bit.ly/cruzhacks-2021-hacker",
    label: "hacker sign-up button",
  },
  judge_mentor: {
    text: "Be a judge / mentor!",
    link:
      "https://docs.google.com/forms/d/e/1FAIpQLScVmW-gIcKGrp7fBVeH5i8G1VQ83IwmKrkIo_J2PeRj3PRYTw/viewform",
    label: "judge/mentor sign-up button",
  },
  sponsor: {
    text: "Be a sponsor!",
    link:
      "https://drive.google.com/file/d/127G6lE1SFVQUeC3wSMdMwn12E9sVFCyU/view",
    label: "sponsor sign-up button",
  },
};

const HomepageView: React.FC = () => {
  return (
    <div className="Homepage">
      <HeroView pageName={"Home"} title={title} description={description}>
        <div className="Homepage__emailSubscriptionContainer">
          <EmailSubscriptionForm />
        </div>
        <div className="Homepage__buttonContainer">
          {Object.entries(buttonProps).map(([_, buttonProp]) => (
            <Button key={buttonProp.text} {...buttonProp} />
          ))}
        </div>
      </HeroView>
    </div>
  );
};

export default HomepageView;
