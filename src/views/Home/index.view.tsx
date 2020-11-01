import React from "react";
import HeroView from "views/Hero/index.view";

import "./Home.scss";

const title = "Coming Soon";
const description = ["CruzHacks is the largest hackathon in Santa Cruz. Each year, we invite hundreds of students to develop solutions to real-world problems, pursue inclusion in tech, and kindle the spirit of innovation.  ",
  "This year, we’re bringing CruzHacks to you.  "]

const HomepageView: React.FC = () => {
  return (
    <div className="Homepage">
      <HeroView pageName={"Home"} title={title} description={description} />
    </div>
  );
};

export default HomepageView;
