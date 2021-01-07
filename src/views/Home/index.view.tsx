import * as React from "react";
import Navbar from "components/Navbar/index.view";
import MLHBanner from "components/MLHBanner/index.view";
import Background from "components/Background/index.view";
import Hero from "views/Home/components/Hero/index.view";
import EmailSubscriptionForm from "components/EmailSubscription/index.view";
import Mission from "views/Home/components/Mission/index.view";
import MilestonesComponent from "./components/Milestones/index.view";
import Schedule from "./components/Schedule/index.view";
import PrizesComponent from "./components/Prizes/index.view";
import FAQComponent from "./components/FAQ/index.view";
import SponsorsComponent from "./components/Sponsors/index.view";
import FooterComponent from "./components/Footer/index.view";
import "./Home.scss";

import { navbarProps } from "./props/navbar.js";
import * as heroProps from "./props/hero.json";
import * as missionProps from "./props/mission.json";
import * as milestoneProps from "./props/milestones.json";
import * as FAQprops from "./props/faq.json";
import { sponsors } from "./props/sponsors.js";
import { topics } from "./props/prizes";

const HomepageView: React.FC = () => {
  return (
    <>
      <Navbar {...navbarProps} />
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
          <Schedule />
          <SponsorsComponent sponsors={sponsors} />
          <FooterComponent />
        </Background>
      </div>
    </>
  );
};

export default HomepageView;
