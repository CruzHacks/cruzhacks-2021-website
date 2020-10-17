import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import PostcardStack from "components/PostcardStack/index.view";
import EmailSubscriptionForm from "components/EmailSubscription/index.view";
import "./Hero.scss";

type HeroProps = {
  pageName: string;
  title: string;
  description: string;
};

const HeroView: React.FC<HeroProps> = ({ pageName, title, description }) => {
  return (
    <div
      className={cx("HeroView", { HeroView__homeView: pageName === "Home" })}
    >
      <div className="HeroView__container">
        <div className="HeroView__visual">
          <PostcardStack pageName={pageName} />
        </div>
        <div className="HeroView__text">
          <h1>CruzHacks 2021 /</h1>
          <h1>
            <span>{title}</span>
          </h1>
          <p>{description}</p>
          <EmailSubscriptionForm />
        </div>
      </div>
    </div>
  );
};

export default HeroView;

HeroView.propTypes = {
  pageName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
