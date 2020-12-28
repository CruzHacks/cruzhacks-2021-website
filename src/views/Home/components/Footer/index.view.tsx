import * as React from "react";
import "./footer.scss";

const FooterComponent: React.FC = () => {
  return (
    <div className="Footer">
      <div className="Footer__images">
        <div>Team!</div>
        <div>Links!</div>
        <div>Scroll!</div>
      </div>
      <div className="Footer__text">
        <div className="Footer__text--left">
          Made with ❤️☕❤️ (virtually) from Santa Cruz, California.
        </div>
        <div className="Footer__text--middle">
          CruzHacks was formerly known as HackUCSC, and launched in April 2014.
          The founders were
          <a
            className="Footer__link"
            href="https://www.linkedin.com/in/adamsmarkrichard/"
            target="_blank"
            rel="noreferrer"
          >
            Mark Adams
          </a>
          ,
          <a
            className="Footer__link"
            href="https://envs.ucsc.edu/faculty/index.php?uid=bhaddad"
            target="_blank"
            rel="noreferrer"
          >
            Brent Haddad
          </a>
          , and
          <a
            className="Footer__link"
            href="https://www.linkedin.com/in/ericksondoug/"
            target="_blank"
            rel="noreferrer"
          >
            Doug Erickson
          </a>
          .
        </div>
        <div className="Footer__text--right">
          © 2021 CruzHacks. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
