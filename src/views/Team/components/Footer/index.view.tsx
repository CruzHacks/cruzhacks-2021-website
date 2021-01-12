import * as React from "react";
import { ReactComponent as Arrow } from "images/TeamPage/arrow.svg";
import "./Footer.scss";

const Footer: React.FC = () => {
  return (
    <div className="TeamFooter">
      <Arrow
        className="TeamFooter__arrow"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      />
      <div className="TeamFooter__text">
        @ 2021 Cruzhacks. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
