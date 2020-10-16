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
      <PostcardStack pageName={pageName} />
      <EmailSubscriptionForm />
      Hello from HeroView
      {title}
      {description}
    </div>
  );
};

export default HeroView;

HeroView.propTypes = {
  pageName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
