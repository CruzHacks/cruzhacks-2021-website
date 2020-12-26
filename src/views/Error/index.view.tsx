import * as React from "react";
import MLHBanner from "components/MLHBanner/index.view";
import { ReactComponent as ErrorGraphic } from "images/404.svg";
import { Route } from "react-router-dom";

import "./Error.scss";

const ErrorPageView: React.FC = () => {
  return (
    <>
      <MLHBanner />
      <div className="ErrorPage">
        <div className="ErrorPage__text">- e r r o r -</div>
        <ErrorGraphic className="ErrorPage__graphic" />
        <Route
          render={({ history }) => (
            <button
              type="button"
              className="ErrorPage__button"
              onClick={() => {
                history.push("/");
              }}
            >
              let&apos;s go home.
            </button>
          )}
        />
      </div>
    </>
  );
};

export default ErrorPageView;
