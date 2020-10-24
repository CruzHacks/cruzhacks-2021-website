import React from "react";
import HeroView from "views/Hero/index.view";

import "./Home.scss";

const title = "Coming Soon";
const description =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor " +
  "incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis " +
  "nostrud exercitation";

const HomepageView: React.FC = () => {
  return (
    <div className="Homepage">
      <HeroView pageName={"Home"} title={title} description={description} />
    </div>
  );
};

export default HomepageView;
