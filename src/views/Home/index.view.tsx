import React from "react";
import Navbar from "components/Navbar/index.view";

import "./index.scss";

const HomepageView: React.FC = () => {
  return (
    <div className="Home">
      <Navbar />
      Hello from HomepageView
    </div>
  );
};

export default HomepageView;
