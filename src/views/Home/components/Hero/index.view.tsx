import * as React from "react";
import Lottie from "react-lottie";
import { ReactComponent as Grid } from "images/components/hero/grid.svg";
import { ReactComponent as Computer } from "images/components/hero/computer.svg";
import { ReactComponent as Mouse } from "images/components/hero/mouse.svg";
import { ReactComponent as LargeFlare } from "images/components/hero/ellipse1.svg";
import { ReactComponent as MediumFlare } from "images/components/hero/ellipse2.svg";
import { ReactComponent as SmallFlare } from "images/components/hero/ellipse3.svg";
import PostcardStack from "components/PostcardStack/index.view";
import "./Hero.scss";
import animationData from "./postcard.json";

interface Description {
  description: string;
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

const defaultOptions = {
  animationData,
  loop: false,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Hero: React.FC<HeroProps> = ({
  pageName,
  title,
  description,
  children,
}: HeroProps) => {
  return (
    <>
      <div className="Hero__container">
        <Grid className="Hero__grid" />
        <LargeFlare className="Hero__largeFlare" />
        <MediumFlare className="Hero__mediumFlare" />
        <SmallFlare className="Hero__smallFlare" />
        <Computer className="Hero__computer" />
        <Mouse className="Hero__mouse" />
        <div className="Hero__visual">
          {window.matchMedia("(prefers-reduced-motion: reduce)").matches ? (
            <PostcardStack pageName={pageName} />
          ) : (
            <Lottie options={defaultOptions} />
          )}
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
