import React from "react";
import HeroView from "views/Hero/index.view";

import "./Home.scss";

const HomepageView: React.FC = () => {
  return (
    <div className="Homepage">
      Hello from HomepageView
      <HeroView pageName={"Home"} />
    </div>
  );
};

export default HomepageView;
