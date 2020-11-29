import * as React from "react";
import cx from "classnames";
import PostcardStack from "components/PostcardStack/index.view";

import "./Hero.scss";

interface Description {
  description: string;
}

interface Title {
  text: string;
  style: string;
}

interface HeroProps {
  pageName: string;
  title: Title[];
  description: Description[];
  children?: React.ReactNode;
}

const HeroView: React.FC<HeroProps> = ({
  pageName,
  title,
  description,
  children,
}: HeroProps) => {
  return (
    <div
      className={cx("HeroView", { HeroView__homeView: pageName === "Home" })}
    >
      <div className="HeroView__container">
        <div className="HeroView__visual">
          <PostcardStack pageName={pageName} />
        </div>
        <div className="HeroView__textContainer">
          {title.map((item) => (
            <h1 className={`HeroView__titleText${item.style}`} key={item.text}>
              {item.text}
            </h1>
          ))}
          {description.map((item) => (
            <p key={item.description} className="HeroView__description">
              {item.description}
            </p>
          ))}
          {children}
        </div>
      </div>
    </div>
  );
};

export default HeroView;
