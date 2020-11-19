import React from "react";
import HeroView from "views/Hero/index.view";
import Navbar from "components/Navbar/index.view";
import EmailSubscriptionForm from "components/EmailSubscription/index.view";

import "./Home.scss";

const title = [
  {
    text: "CruzHacks 2021",
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

const links = {
  sponsor:
    "https://docs.google.com/forms/d/e/1FAIpQLScVmW-gIcKGrp7fBVeH5i8G1VQ83IwmKrkIo_J2PeRj3PRYTw/",
  hacker: "/",
};

const HomepageView: React.FC = () => {
  return (
    <div className="Homepage">
      <Navbar
        title={title[0].text}
        sponsorURL={links.sponsor}
        hackerURL={links.hacker}
      />
      <HeroView pageName={"Home"} title={title} description={description}>
        <div className="Homepage__emailSubscriptionContainer">
          <EmailSubscriptionForm />
        </div>
      </HeroView>
    </div>
  );
};

export default HomepageView;
