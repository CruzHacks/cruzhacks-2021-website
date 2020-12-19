import * as React from "react";
import PostcardStack from "components/PostcardStack/index.view";

import "./Hero.scss";

interface Description {
  description: string | React.ReactElement;
  style: string;
  line: number;
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

const Hero: React.FC<HeroProps> = ({
  pageName,
  title,
  description,
  children,
}: HeroProps) => {
  return (
    <>
      <div className="Hero__container">
        <div className="Hero__visual">
          <PostcardStack pageName={pageName} />
        </div>
        <div className="Hero__textContainer">
          {title.map((item) => (
            <h1 className={`Hero__titleText${item.style}`} key={item.text}>
              {item.text}
            </h1>
          ))}
          {description.map((item) => (
            <p className={`Hero__${item.style}`} key={item.line}>
              {item.description}
            </p>
          ))}
          {children}
        </div>
      </div>
    </>
  );
};

export default Hero;
