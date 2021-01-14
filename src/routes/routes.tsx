import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomepageView from "views/Home/index.view";
import TeamPageView from "views/Team/index.view";
import ErrorPageView from "views/Error/index.view";

const Routes: React.FC = () => {
  return (
    <div className="Routes">
      <Router>
        <Switch>
          <Route exact path="/" render={() => <HomepageView />} />
          <Route exact path="/team" render={() => <TeamPageView />} />
          <Route exact path="*" render={() => <ErrorPageView />} />
        </Switch>
      </Router>
    </div>
  );
};

export default Routes;
