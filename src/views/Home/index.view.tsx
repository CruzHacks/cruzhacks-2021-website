import * as React from "react";
import Hero from "views/Home/components/Hero/index.view";
import Button from "components/Button/index.view";
import EmailSubscriptionForm from "components/EmailSubscription/index.view";
import MLHBanner from "components/MLHBanner/index.view";
import Background from "components/Background/index.view";
import FAQ from "./components/FAQ/index.view";
import Mission from "views/Home/components/Mission/index.view";
import Milestones from "./components/Milestones/index.view";
import Prizes from "./components/Prizes/index.view";
import SponsorsComponent from "./components/Sponsors/index.view";
import FooterComponent from "./components/Footer/index.view";

import "./Home.scss";

import * as heroProps from "./props/hero.json";
import * as missionProps from "./props/mission.json";
import * as milestoneProps from "./props/milestones.json";
import { sponsors } from "./props/sponsors.js";

const HomepageView: React.FC = () => {
  return (
    <>
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
          ))}
          </Hero>
          <Mission
            about_text={mission_props.about}
            mission_text={mission_props.mission}
          />
          <MilestonesComponent milestones={milestoneProps.milestones} />
          <Prizes />
          <FAQ />
          <SponsorsComponent sponsors={sponsors} />
          <FooterComponent />
        </Background>
      </div>
    </>
  );
};

export default HomepageView;
