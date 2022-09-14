import * as React from "react";
import Navbar from "components/Navbar/index.view";
import MLHBanner from "components/MLHBanner/index.view";
import Background from "components/Background/index.view";
import Hero from "./components/Hero/index.view";
// import Button from "components/Button/index.view";
import Mission from "./components/Mission/index.view";
import MilestonesComponent from "./components/Milestones/index.view";
import Schedule from "./components/Schedule/index.view";
import PrizesComponent from "./components/Prizes/index.view";
import SpeakersComponent from "./components/Speakers/index.view";
import FAQComponent from "./components/FAQ/index.view";
import SponsorsComponent from "./components/Sponsors/index.view";
import FooterComponent from "./components/Footer/index.view";
import { navbarProps } from "./props/navbar.js";
import * as heroProps from "./props/hero.json";
import * as missionProps from "./props/mission.json";
import * as milestoneProps from "./props/milestones.json";
import { topics } from "./props/prizes";
import { speakers } from "./props/speakers";
import * as FAQprops from "./props/faq.json";
import { sponsors } from "./props/sponsors.js";
import { footerProps } from "./props/footer";
// import { sponsorFormProps } from "./props/sponsorForm";

import "./Home.scss";

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
            description={[heroProps.description[0]]}
          >
            {/* <div className="Homepage__sponsorApplication">
              <Button {...sponsorFormProps} />
            </div> */}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://cruzhacks-2021.devpost.com/"
              className="DevpostLink"
            >
              2021 Project Submissions
            </a>
          </Hero>
          <Mission
            about_text={missionProps.about}
            mission_text={missionProps.mission}
          />
          <MilestonesComponent milestones={milestoneProps.milestones} />
          <PrizesComponent topics={topics} />
          <SpeakersComponent speakers={speakers} />
          <Schedule />
          <FAQComponent
            questionAnswersColumnLeft={FAQprops.questionAnswersColumnLeft}
            questionAnswersColumnRight={FAQprops.questionAnswersColumnRight}
            questionAnswersColumnMiddle={FAQprops.questionAnswersColumnMiddle}
          />
          <SponsorsComponent sponsors={sponsors} />
          <FooterComponent links={footerProps} />
        </Background>
      </div>
    </>
  );
};

export default HomepageView;
