import * as React from "react";
import MLHBanner from "components/MLHBanner/index.view";
import { ReactComponent as ErrorGraphic } from "images/error/404.svg";
import { ReactComponent as LensFlareBottom } from "images/error/lens-flare__bottom.svg";
import { ReactComponent as LensFlareLeft } from "images/error/lens-flare__left.svg";
import { ReactComponent as LensFlareTop } from "images/error/lens-flare__top.svg";

import "./Error.scss";

const ErrorPageView: React.FC = () => {
  return (
    <>
      <MLHBanner />
      <div className="ErrorPage">
        <div className="ErrorPage__content">
          <div className="ErrorPage__text">- e r r o r -</div>
          <ErrorGraphic className="ErrorPage__graphic" />
          <a href="/" className="ErrorPage__button">
            let&apos;s go home.
          </a>
        </div>
        <div className="ErrorPage__images">
          <LensFlareBottom className="ErrorPage__lensFlare--bottom" />
          <LensFlareLeft className="ErrorPage__lensFlare--left" />
          <LensFlareTop className="ErrorPage__lensFlare--top" />
        </div>
      </div>
    </>
  );
};

export default ErrorPageView;
