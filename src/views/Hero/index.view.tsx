import React from "react";
import PropTypes from "prop-types";
import PostcardStack from "components/PostcardStack/index.view";
import EmailSubscriptionForm from "components/EmailSubscription/index.view";
import "./Hero.scss";

type HeroProps = {
  pageName: string;
};

const HeroView: React.FC<HeroProps> = ({ pageName }) => {
  return (
    <div className="HeroView">
      <PostcardStack pageName={pageName} />
      <EmailSubscriptionForm />
      Hello from HeroView
    </div>
  );
};

export default HeroView;

HeroView.propTypes = {
  pageName: PropTypes.string.isRequired,
};
