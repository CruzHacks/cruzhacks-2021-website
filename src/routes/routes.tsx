import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePageView from "views/Home/index.view";
import ErrorPageView from "views/Error/index.view";

const Routes: React.FC = () => {
  return (
    <div className="Routes">
      <Router>
        <Switch>
          <Route exact path="/" render={() => <HomePageView />} />
          <Route exact path="*" render={() => <ErrorPageView />} />
        </Switch>
      </Router>
    </div>
  );
};

export default Routes;
