import React, { useState } from "react";
import axios, { AxiosResponse } from "axios";
import { ReactComponent as Arrow } from "images/arrow.svg";

import "./EmailSubscription.scss";

const EmailSubscriptionForm: React.FC = () => {
  const [userEmail, setUserEmail] = useState("");
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [showFeedback, setShowFeedback] = useState(false);

  const handleInput = (event: React.FormEvent<HTMLInputElement>) => {
    setUserEmail(event.currentTarget.value.trim());
  };

  const handleKey = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      submitEmail();
    }
  };

  const submitEmail = () => {
    axios
      .post(
        "https://us-central1-cruzhacks-4a899.cloudfunctions.net/subscribe",
        { email: userEmail }
      )
      .then((response: AxiosResponse) => {
        setShowFeedback(true);
        setFeedbackMessage(response.data.message);
      })
      .catch(() => {
        setShowFeedback(true);
        setFeedbackMessage(
          "Oh no! Your submission looks like it failed - please try your request again!"
        );
      });
  };

  return (
    <div className="EmailSubscription">
      {showFeedback ? (
        <div className="EmailSubscription__feedbackMessage">
          {feedbackMessage}
        </div>
      ) : (
        <>
          <input
            className="EmailSubscription__searchBox"
            placeholder="enter email for updates..."
            type="text"
            name="name"
            onChange={handleInput}
            onKeyDown={handleKey}
          />
          <button
            className="EmailSubscription__inputButton"
            onClick={submitEmail}
          >
            <Arrow className="EmailSubscription__arrow" />
          </button>
        </>
      )}
    </div>
  );
};

export default EmailSubscriptionForm;
