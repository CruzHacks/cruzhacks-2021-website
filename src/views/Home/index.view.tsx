import * as React from "react";
import HeroView from "views/Hero/index.view";
import { ButtonTypes } from "components/Button/index.view";
import EmailSubscriptionForm from "components/EmailSubscription/index.view";
import Navbar from "components/Navbar/index.view";
import MLHBanner from "components/MLHBanner/index.view";
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
    type: ButtonTypes.PRIMARY,
  },
  judge_mentor: {
    text: "Be a judge / mentor!",
    link:
      "https://docs.google.com/forms/d/e/1FAIpQLScVmW-gIcKGrp7fBVeH5i8G1VQ83IwmKrkIo_J2PeRj3PRYTw/viewform",
    label: "judge/mentor sign-up button",
    type: ButtonTypes.PRIMARY,
  },
  sponsor: {
    text: "Be a sponsor!",
    link:
      "https://drive.google.com/file/d/127G6lE1SFVQUeC3wSMdMwn12E9sVFCyU/view",
    label: "sponsor sign-up button",
    type: ButtonTypes.PRIMARY,
  },
  code_conduct: {
    text: "Our Code of Conduct",
    link: "http://mlh.io/code-of-conduct",
    label: "mlh code of conduct",
    type: ButtonTypes.SECONDARY,
  },
  contact_us: {
    text: "Contact Us",
    link: "mailto:contact@cruzhacks.com",
    label: "contact us",
    type: ButtonTypes.SECONDARY,
  },
};

const buttonPropsObject = {
  title: "CruzHacks 2021",
  buttonProps: Object.values(buttonProps),
};

const HomepageView: React.FC = () => {
  return (
    <>
      <Navbar {...buttonPropsObject} />
      <MLHBanner />
      <div className="Homepage">
        <HeroView pageName={"Home"} title={title} description={description}>
          <div className="Homepage__emailSubscriptionContainer">
            <EmailSubscriptionForm />
          </div>
        </HeroView>
      </div>
    </>
  );
};

export default HomepageView;
