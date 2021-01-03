import * as React from "react";
import Hero from "views/Home/components/Hero/index.view";
import Button, { ButtonTypes } from "components/Button/index.view";
import EmailSubscriptionForm from "components/EmailSubscription/index.view";
import Navbar from "components/Navbar/index.view";
import MLHBanner from "components/MLHBanner/index.view";
import Background from "components/Background/index.view";
import Mission from "views/Home/components/Mission/index.view";
import MilestonesComponent from "./components/Milestones/index.view";
import SponsorsComponent from "./components/Sponsors/index.view";
import FooterComponent from "./components/Footer/index.view";
import "./Home.scss";

import * as heroProps from "./props/hero.json";
import * as missionProps from "./props/mission.json";
import * as milestoneProps from "./props/milestones.json";
import * as FAQprops from "./props/faq.json";
import { sponsors } from "./props/sponsors.js";
import { topics } from "./props/prizes";
import FAQComponent from "./components/FAQ/index.view";
import PrizesComponent from "./components/Prizes/index.view";

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
        <Background>
          <Hero
            pageName={"Home"}
            title={heroProps.title}
            description={heroProps.description}
          >
            <div className="Homepage__emailSubscriptionContainer">
              <EmailSubscriptionForm />
            </div>
          </Hero>
          <Mission
            about_text={missionProps.about}
            mission_text={missionProps.mission}
          />
          <MilestonesComponent milestones={milestoneProps.milestones} />
          <PrizesComponent topics={topics} />
          <FAQComponent
            questionAnswersColumnLeft={FAQprops.questionAnswersColumnLeft}
            questionAnswersColumnRight={FAQprops.questionAnswersColumnRight}
            questionAnswersColumnMiddle={FAQprops.questionAnswersColumnMiddle}
          />
          <SponsorsComponent sponsors={sponsors} />
          <FooterComponent />
        </Background>
      </div>
    </>
  );
};

export default HomepageView;
