import * as React from "react";
import Hero from "views/Home/components/Hero/index.view";
import Button from "components/Button/index.view";
import EmailSubscriptionForm from "components/EmailSubscription/index.view";
import MLHBanner from "components/MLHBanner/index.view";
import Background from "components/Background/index.view";
import Mission from "views/Home/components/Mission/index.view";
import "./Home.scss";
import MilestonesComponent from "./components/Milestones/index.view";
import SponsorsComponent from "./components/Sponsors/index.view";
import FooterComponent from "./components/Footer/index.view";

// sponsor logo paths
import Balsamiq from "images/sponsors/balsamiq.svg";
import CIED from "images/sponsors/cied.svg";
import CITRIS from "images/sponsors/citris.svg";
import ChooseSantaCruz from "images/sponsors/chooseSantaCruz.svg";
import Comcast from "images/sponsors/comcast.svg";
import eBay from "images/sponsors/ebay.svg";
import MLH from "images/sponsors/mlh.svg";
import Pinnacle from "images/sponsors/pinnacle.svg";
import SouthSwell from "images/sponsors/southSwell.svg";
import Stickermule from "images/sponsors/stickermule.svg";
import Stratovan from "images/sponsors/stratovan.svg";
import Wolfram from "images/sponsors/wolfram.svg";
import FifteenSeventeen from "images/sponsors/1517.svg";

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
    style: "description",
    line: 0,
  },
  {
    description: "This year, we’re bringing CruzHacks to you.  ",
    style: "description",
    line: 1,
  },
  {
    description: {
      rightText: "Contact Us",
      leftText: "Our Code of Conduct",
    },
    style: "details",
    line: 3,
    linkRight: "mailto:contact@cruzhacks.com",
    linkLeft: "http://mlh.io/code-of-conduct",
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
      text: "Be a mentor!",
      link:
        "https://docs.google.com/forms/d/e/1FAIpQLScVmW-gIcKGrp7fBVeH5i8G1VQ83IwmKrkIo_J2PeRj3PRYTw/viewform",
      label: "mentor sign-up button",
    },
    sponsor: {
      text: "Be a sponsor!",
      link:
        "https://drive.google.com/file/d/127G6lE1SFVQUeC3wSMdMwn12E9sVFCyU/view",
      label: "sponsorship contact button",
    },
  },
};

const mission_props = {
  about: {
    title: "We Are CruzHacks",
    body:
      "CruzHacks is a virtual hackathon that provides ground for new ideas and innovation to flourish. By presenting real-world problems, hackers have the chance to begin a project using their creative and problem-solving technical skills. Open to individuals in varying levels of experience, Cruzhacks provides the opportunity to apply the skills learned in classes and connect with companies through the product that has been created.",
  },
  mission: {
    title: "The CruzHacks Mission",
    body:
      "CruzHacks is a global event where people can collaborate, network, and apply technology to solve problems! Our initiative is to expand diversity in tech while facilitating an environment conducive for creating innovative solutions to complex problems. The CruzHacks mission, to support creativity in technology and promote the development solutions for social good, are at the forefront of our efforts every year.",
  },
};

const sponsors = [
  {
    name: "Balsamiq, LLC",
    tier: "kilo",
    logo: Balsamiq,
    url: "https://balsamiq.com/",
  },
  {
    name: "Center for Innovation and Entrepreneurial Development",
    tier: "tera",
    logo: CIED,
    url: "https://cied.ucsc.edu/",
  },
  {
    name:
      "Center for Information Technology Research in the Interest of Society",
    tier: "giga",
    logo: CITRIS,
    url: "https://citris-uc.org/",
  },
  {
    name: "Choose Santa Cruz",
    tier: "kilo",
    logo: ChooseSantaCruz,
    url: "https://www.choosesantacruz.com/",
  },
  {
    name: "Comcast",
    tier: "tera",
    logo: Comcast,
    url: "https://www.nbcuniversal.com/about",
  },
  {
    name: "eBay",
    tier: "mega",
    logo: eBay,
    url: "https://www.ebay.com",
  },
  {
    name: "Major League Hacking",
    tier: "kilo",
    logo: MLH,
    url: "https://mlh.io/",
  },
  {
    name: "Pinnacle",
    tier: "kilo",
    logo: Pinnacle,
    url: "https://pinnacle.us.org/",
  },
  {
    name: "South Swell Ventures",
    tier: "mega",
    logo: SouthSwell,
    url: "https://www.facebook.com/South-Swell-Ventures-422070777891517/",
  },
  {
    name: "Stickermule",
    tier: "kilo",
    logo: Stickermule,
    url: "https://www.stickermule.com/",
  },
  {
    name: "Stratovan",
    tier: "mega",
    logo: Stratovan,
    url: "https://www.stratovan.com/",
  },
  {
    name: "Wolfram Language",
    tier: "kilo",
    logo: Wolfram,
    url: "https://www.wolfram.com/language/",
  },
  {
    name: "1517",
    tier: "mega",
    logo: FifteenSeventeen,
    url: "https://www.1517fund.com/",
  },
];

const HomepageView: React.FC = () => {
  return (
    <>
      <MLHBanner />
      <div className="Homepage">
        <Background>
          <Hero pageName={"Home"} title={title} description={description}>
            <div className="Homepage__emailSubscriptionContainer">
              <EmailSubscriptionForm />
            </div>
            {Object.entries(buttonProps).map(([type, props]) => (
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
            about_text={mission_props.about}
            mission_text={mission_props.mission}
          />
          <MilestonesComponent />
          <SponsorsComponent sponsors={sponsors} />
          <FooterComponent />
        </Background>
      </div>
    </>
  );
};

export default HomepageView;
