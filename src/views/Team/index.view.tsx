import * as React from "react";
import MLHBanner from "components/MLHBanner/index.view";
import Navbar from "components/Navbar/index.view";
import Hero from "./components/Hero/index.view";
import Card from "./components/Card/index.view";
import Footer from "./components/Footer/index.view";

import { navbarProps } from "views/Home/props/navbar.js";
import { members } from "./props/members";

import "./Team.scss";

const description =
  "Meet our team of creators, thinkers, strategists, and believers, collaborating together to create something amazing. ";
const TeamPageView: React.FC = () => {
  return (
    <>
      <MLHBanner />
      <div className="TeamPage">
        <Navbar page={"Team"} {...navbarProps} />
        <Hero description={description} />
        <div className="TeamPage__cardsContainer">
          {Object.entries(members).map(([memberName, props]) => (
            <Card memberName={memberName} {...props} key={memberName} />
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default TeamPageView;
