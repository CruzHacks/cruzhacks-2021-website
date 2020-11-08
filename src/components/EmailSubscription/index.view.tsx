import React, { useState } from "react";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { ReactComponent as Arrow } from "images/arrow.svg";
import ClipLoader from "react-spinners/ClipLoader";
import Icon from "@mdi/react";
import { mdiAlertCircle, mdiCheckCircleOutline } from "@mdi/js";

import "./EmailSubscription.scss";
const subscriptionEndpoint = process.env.REACT_APP_SUBSCRIBE_ENDPOINT || "";
const states = {
  NOT_SUBMITTED: 0,
  LOADING: 1,
  SUBMITTED: 2,
  ERRORED: 3,
};
const wedgewood = "#4f728e";

const EmailSubscriptionForm: React.FC = () => {
  const [userEmail, setUserEmail] = useState("");
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [requestState, setRequestState] = useState(states.NOT_SUBMITTED);
  const [showInput, setShowInput] = useState(true);

  const submitEmail = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setRequestState(states.LOADING);
    setFeedbackMessage("Please wait while your message is being submitted...");

    const apiKey = process.env.REACT_APP_API_KEY;

    const axiosConfig: AxiosRequestConfig = {
      headers: {
        Authentication: apiKey,
        "Content-Type": "application/json",
      },
    };

    axios
      .post(
        subscriptionEndpoint,
        {
          email: userEmail,
        },
        axiosConfig
      )
      .then((response: AxiosResponse) => {
        setRequestState(states.ERRORED);
        setFeedbackMessage(response.data.message);

        if (response.status === 200) {
          setRequestState(states.SUBMITTED);
          setShowInput(false);
        }
      })
      .catch(() => {
        setRequestState(states.ERRORED);
        setFeedbackMessage(
          "Oh no! We've got an error— please try your request again & contact us at dev@cruzhacks.com if this persists!"
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
              onChange={(e) => setUserEmail(e.target.value)}
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
      <div className="EmailSubscription__feedbackContainer">
        <div className="EmailSubscription__icon">
          {requestState === states.LOADING && (
            <ClipLoader size={25} color={wedgewood} loading={true} />
          )}
          {requestState === states.SUBMITTED && (
            <Icon
              path={mdiCheckCircleOutline}
              title="Successful Request"
              size={1}
              horizontal
              vertical
              color="green"
            />
          )}
          {requestState === states.ERRORED && (
            <Icon
              path={mdiAlertCircle}
              title="Error Occured"
              size={1}
              horizontal
              vertical
              color="red"
            />
          )}
        </div>
        <div className="EmailSubscription__feedbackMessage">
          {feedbackMessage}
        </div>
      </div>
    </>
  );
};

export default EmailSubscriptionForm;
