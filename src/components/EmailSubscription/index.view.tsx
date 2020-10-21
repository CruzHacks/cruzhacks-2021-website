import React from "react";
import { ReactComponent as Arrow } from "images/arrow.svg";

import "./EmailSubscription.scss";

const EmailSubscriptionForm: React.FC = () => {
  var email: string = ""

  const handleInput = (event: React.FormEvent<HTMLInputElement>) => {
    email = event.currentTarget.value.trim()
  }

  const handleKey = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter")
      submitEmail()
  }

  const submitEmail = (event?: React.MouseEvent<HTMLButtonElement>) => {
    console.log("We should submit the email!")
    console.log(email)
  }

  return (
    <div className="EmailSubscription">
      <input className="SearchBox" placeholder="enter email for updates..." type="text" name="name" onChange={handleInput} onKeyDown={handleKey}></input>
      <button className="InputButton" onClick={submitEmail}><Arrow /></button>
    </div>
  );
};

export default EmailSubscriptionForm;
