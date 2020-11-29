import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomepageView from "views/Home/index.view";

const Routes: React.FC = () => {
  return (
    <div className="Routes">
      <Router>
        <Switch>
          <Route exact path="/" render={() => <HomepageView />} />
        </Switch>
      </Router>
    </div>
  );
};

export default Routes;
