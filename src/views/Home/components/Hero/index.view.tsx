import * as React from "react";
import { ReactComponent as Grid } from "images/components/hero/grid.svg";
import { ReactComponent as Computer } from "images/components/hero/computer.svg";
import { ReactComponent as Mouse } from "images/components/hero/mouse.svg";
import { ReactComponent as LargeFlare } from "images/components/hero/mouse.svg";
import { ReactComponent as MediumFlare } from "images/components/hero/mouse.svg";
import { ReactComponent as SmallFlare } from "images/components/hero/mouse.svg";
import PostcardStack from "components/PostcardStack/index.view";
import "./Hero.scss";

type DescriptionDetail = {
  rightText: string;
  leftText: string;
};

interface Description {
  description: string | DescriptionDetail;
  style: string;
  line: number;
  linkRight?: string;
  linkLeft?: string;
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
        <Grid className="Hero__grid" />
        <LargeFlare className="Hero__largeFlare" />
        <MediumFlare className="Hero__mediumFlare" />
        <SmallFlare className="Hero__smallFlare" />
        <Computer className="Hero__computer" />
        <Mouse className="Hero__mouse" />
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
              {item.linkLeft ? (
                <a
                  className="Hero__details--link"
                  href={item.linkLeft}
                  target="_blank"
                  rel="noreferrer"
                >
                  {typeof item.description === "object"
                    ? item.description.leftText
                    : null}
                </a>
              ) : null}
              {typeof item.description === "string" ? item.description : null}
              {item.linkRight ? (
                <a
                  className="Hero__details--link"
                  href={item.linkRight}
                  target="_blank"
                  rel="noreferrer"
                >
                  {typeof item.description === "object"
                    ? item.description.rightText
                    : null}
                </a>
              ) : null}
            </p>
          ))}
          {children}
        </div>
      </div>
    </>
  );
};

export default Hero;
