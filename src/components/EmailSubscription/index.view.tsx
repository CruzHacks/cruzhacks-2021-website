import React, { useState } from "react";
import axios, { AxiosResponse } from "axios";
import { ReactComponent as Arrow } from "images/arrow.svg";

import "./EmailSubscription.scss";
const subscriptionEndpoint = process.env.REACT_APP_SUBSCRIBE_ENDPOINT || "";
const cruzHacksEmail = "dev@cruzhacks.com";
const EmailSubscriptionForm: React.FC = () => {
  const [userEmail, setUserEmail] = useState("");
  const [feedbackComponent, setFeedbackComponent] = useState(
    React.createElement("span")
  );
  const [showFeedback, setShowFeedback] = useState(true);
  const [showInput, setShowInput] = useState(true);

  const submitEmail = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setShowFeedback(true);
    setFeedbackComponent(
      React.createElement(
        "span",
        { className: "EmailSubscription__feedbackMessage" },
        "Please wait while your message is being submitted..."
      )
    );
    setUserEmail("");

    axios
      .post(subscriptionEndpoint, {
        email: userEmail,
      })
      .then((response: AxiosResponse) => {
        setFeedbackComponent(
          React.createElement(
            "span",
            { className: "EmailSubscription__feedbackMessage" },
            response.data.message
          )
        );

        if (response.status === 200) {
          setShowInput(false);
        }
      })
      .catch(() => {
        setFeedbackComponent(
          React.createElement(
            "span",
            { className: "EmailSubscription__feedbackMessage" },
            [
              React.createElement(
                "span",
                {},
                "Oh no! We've got an error — please try your request again & "
              ),
              React.createElement(
                "a",
                {
                  href: "mailto:" + cruzHacksEmail,
                  className: "EmailSubscription__mailToLink",
                },
                "contact us"
              ),
              React.createElement("span", {}, " if this persists"),
            ]
          )
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
          {feedbackComponent}
        </div>
      )}
    </>
  );
};

export default EmailSubscriptionForm;
