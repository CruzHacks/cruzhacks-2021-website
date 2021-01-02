import * as React from "react";
import Hero from "views/Home/components/Hero/index.view";
import Button from "components/Button/index.view";
import EmailSubscriptionForm from "components/EmailSubscription/index.view";
import MLHBanner from "components/MLHBanner/index.view";
import Background from "components/Background/index.view";
import FAQ from "./components/FAQ/index.view";
import Mission from "views/Home/components/Mission/index.view";
import MilestonesComponent from "./components/Milestones/index.view";
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
            {Object.entries(heroProps.buttonProps).map(([type, props]) => (
              <div key={type} className="Homepage__buttonContainer">
                {Object.entries(props).map(([_, buttonProp]) => (
                  <Button
                    key={buttonProp.text}
                    className={"Homepage__button"}
                    {...buttonProp}
                  />
                ))}
              </div>
            ))}
          </Hero>
          <Mission
            about_text={missionProps.about}
            mission_text={missionProps.mission}
          />
          <MilestonesComponent milestones={milestoneProps.milestones} />
          <SponsorsComponent sponsors={sponsors} />
          <FAQ />
          <FooterComponent />
        </Background>
      </div>
    </>
  );
};

export default HomepageView;
