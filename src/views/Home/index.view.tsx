import React from "react";
import HeroView from "views/Hero/index.view";
import Navbar from "components/Navbar/index.view";

import "./Home.scss";

const HomepageView: React.FC = () => {
  return (
    <div className="Homepage">
      <Navbar />
      <HeroView pageName={"Home"} title={"Title"} description={"Description"} />
    </div>
  );
};

export default HomepageView;
