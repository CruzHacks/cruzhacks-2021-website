import React, { useState } from "react";
import axios, { AxiosResponse } from "axios";
import { ReactComponent as Arrow } from "images/arrow.svg";

import "./EmailSubscription.scss";

const EmailSubscriptionForm: React.FC = () => {
  const [userEmail, setUserEmail] = useState("");
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [showFeedback, setShowFeedback] = useState(true);
  const [showInput, setShowInput] = useState(true);

  const handleInput = (event: React.FormEvent<HTMLInputElement>) => {
    setUserEmail(event.currentTarget.value.trim());
  };

  const handleKey = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      submitEmail();
    }
  };

  const submitEmail = () => {
    setShowFeedback(true);
    setFeedbackMessage("Please wait while your message is being submitted...");
    setUserEmail("");

    axios
      .post(process.env.REACT_APP_SUBSCRIBE_ENDPOINT || "", {
        email: userEmail,
      })
      .then((response: AxiosResponse) => {
        setFeedbackMessage(response.data.message);

        if (response.status === 200) {
          setShowInput(false);
        }
      })
      .catch(() => {
        setFeedbackMessage(
          "Oh no! Your submission looks like it failed - please try your request again!"
        );
      });
  };

  return (
    <>
      {showInput && (
        <div className="EmailSubscription">
          <input
            className="EmailSubscription__searchBox"
            placeholder="enter email for updates..."
            type="text"
            name="name"
            value={userEmail}
            onChange={handleInput}
            onKeyDown={handleKey}
          />
          <button
            className="EmailSubscription__inputButton"
            onClick={submitEmail}
          >
            <Arrow className="EmailSubscription__arrow" />
          </button>
        </div>
      )}
      {showFeedback && (
        <div className="EmailSubscription__feedbackMessage">
          {feedbackMessage}
        </div>
      )}
    </>
  );
};

export default EmailSubscriptionForm;
