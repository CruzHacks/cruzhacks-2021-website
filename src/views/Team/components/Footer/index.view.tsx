import * as React from "react";
import { ReactComponent as Arrow } from "images/arrow.svg";
import "./Footer.scss";

const Footer: React.FC = () => {
  return (
    <div className="TeamFooter">
      <div
        className="TeamFooter__arrowContainer"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <Arrow className="TeamFooter__arrow" />
      </div>
      <div className="TeamFooter__text">
        @ 2021 Cruzhacks. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
