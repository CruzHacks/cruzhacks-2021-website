import React, { useState } from "react";
import axios, { AxiosResponse } from "axios";
import { ReactComponent as Arrow } from "images/arrow.svg";

import "./EmailSubscription.scss";
const subscriptionEndpoint = process.env.REACT_APP_SUBSCRIBE_ENDPOINT || "";
const EmailSubscriptionForm: React.FC = () => {
  const [userEmail, setUserEmail] = useState("");
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [showFeedback, setShowFeedback] = useState(true);
  const [showInput, setShowInput] = useState(true);

  const submitEmail = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setShowFeedback(true);
    setFeedbackMessage("Please wait while your message is being submitted...");
    setUserEmail("");

    axios
      .post(subscriptionEndpoint, {
        email: userEmail,
      })
      .then((response: AxiosResponse) => {
        setFeedbackMessage(response.data.message);

        if (response.status === 200) {
          setShowInput(false);
        }
      })
      .catch((error) => {
        console.error(error);
        setFeedbackMessage(
          "Oh no! We've got an error— please try your request again & contact us if this persists!"
        );
      });
  };

  return (
    <>
      {showInput && (
        <form onSubmit={(event) => submitEmail(event)}>
          <div className="EmailSubscription">
            <input
              className="EmailSubscription__searchBox"
              placeholder="enter email for updates…"
              aria-label="enter your email address for updates"
              type="email"
              name="email input"
              required
            />
            <button
              className="EmailSubscription__inputButton"
              type="submit"
              aria-label="send button"
            >
              <Arrow className="EmailSubscription__arrow" />
            </button>
          </div>
        </form>
      )}
      {showFeedback && (
        <div className="EmailSubscription__feedbackContainer">
          <span className="EmailSubscription__feedbackMessage">
            {feedbackMessage}
          </span>
        </div>
      )}
    </>
  );
};

export default EmailSubscriptionForm;
