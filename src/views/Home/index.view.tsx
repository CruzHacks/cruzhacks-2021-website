import * as React from "react";
import HeroView from "views/Hero/index.view";
import Button from "components/Button/index.view";
import EmailSubscriptionForm from "components/EmailSubscription/index.view";
import MLHBanner from "components/MLHBanner/index.view";
import Background from "components/Background/index.view";
import MilestonesComponent from "./components/Milestones/index.view";
import cx from "classnames";
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
  primary: {
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
  },
  secondary: {
    codeOfConduct: {
      text: "Our Code of Conduct",
      link: "http://mlh.io/code-of-conduct",
      label: "mlh code of conduct",
    },
    contactUs: {
      text: "Contact Us",
      link: "mailto:contact@cruzhacks.com",
      label: "contact us",
    },
  },
};

const HomepageView: React.FC = () => {
  return (
    <>
      <MLHBanner />
      <div className="Homepage">
        <Background />
        <HeroView pageName={"Home"} title={title} description={description}>
          <div className="Homepage__emailSubscriptionContainer">
            <EmailSubscriptionForm />
          </div>
          {Object.entries(buttonProps).map(([type, props]) => (
            <div key={type} className="Homepage__buttonContainer">
              {Object.entries(props).map(([_, buttonProp]) => (
                <Button
                  key={buttonProp.text}
                  className={cx("Homepage__button", {
                    "Homepage__button--secondary": type === "secondary",
                  })}
                  {...buttonProp}
                />
              ))}
            </div>
          ))}
        </HeroView>

        <MilestonesComponent />
      </div>
    </>
  );
};

export default HomepageView;
