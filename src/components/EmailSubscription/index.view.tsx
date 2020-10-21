import React from "react";
import { ReactComponent as Arrow } from 'images/arrow.svg';

import "./EmailSubscription.scss";

const EmailSubscriptionForm: React.FC = () => {
  return (
    <div className="EmailSubscription">
      <input className="SearchBox" placeholder="enter email for updates..." type="text" name="name"></input>
      <div className="InputButton"><Arrow /></div>
    </div>
  );
};

export default EmailSubscriptionForm;
