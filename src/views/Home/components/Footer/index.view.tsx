import * as React from "react";
import { ReactComponent as Arrow } from "images/arrow.svg";
import { SocialMediaProp } from "views/Home/props/footer";
import { Route } from "react-router-dom";
import "./footer.scss";
interface FooterProps {
  links: SocialMediaProp[];
}

const FooterComponent: React.FC<FooterProps> = ({ links }: FooterProps) => {
  return (
    <div className="Footer">
      <div className="Footer__images">
        <Route
          render={({ history }) => (
            <button
              type="button"
              className="Footer__team"
              onClick={() => {
                history.push("/team");
              }}
            >
              Team
            </button>
          )}
        />
        <div className="Footer__links">
          {links.map(({ icon, link, label }) => (
            <a
              key={label}
              href={link}
              target="_blank"
              rel="noreferrer"
              className="Footer__link--wrapper"
            >
              <img className="Footer__link--icon" src={icon} alt={label} />
            </a>
          ))}
        </div>
        <button
          className="Footer__scroll"
          aria-label="scroll button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <Arrow className="Footer__arrow" />
        </button>
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
