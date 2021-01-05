import * as React from "react";
import { useState } from "react";
import { ReactComponent as Arrow } from "images/arrow.svg";
import { footerProps } from "views/Home/props/footer";
import "./footer.scss";

const FooterComponent: React.FC = () => {
  const [showScroll, setShowScroll] = useState(false);
  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };
  window.addEventListener("scroll", checkScrollTop);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="Footer">
      <div className="Footer__images">
        <div className="Footer__team">Team</div>
        <div className="Footer__links">
          {footerProps.map((prop) => (
            <a
              key={prop.key}
              href={prop.link}
              target="_blank"
              rel="noreferrer"
              className="Footer__link--wrapper"
            >
              <img
                className="Footer__link--icon"
                src={prop.icon}
                alt={prop.label}
              />
            </a>
          ))}
        </div>
        {showScroll && (
          <button
            className="Footer__scroll"
            aria-label="scroll button"
            onClick={scrollTop}
          >
            <Arrow className="Footer__arrow" />
          </button>
        )}
      </div>
      <div className="Footer__text">
        <div className="Footer__text--left">
          Made with ❤️☕❤️ (virtually) from Santa Cruz, California.
        </div>
        <div className="Footer__text--right">
          © 2021 CruzHacks. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
