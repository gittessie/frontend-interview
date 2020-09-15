import React from "react";
import { Route, Switch } from "react-router-dom";
import Navigation from "./Navigation";
import Home from "./Home";
import Profile from "./Profile";
import Repositories from "./Repositories";
import RepositoryDetails from "./RepositoryDetails";

const AuthenticatedApplication = () => {
  return (
    <div>
      <Navigation />

      <Switch>
        <Route path="/profile">
          <Profile />
        </Route>

        <Route path="/" exact>
          <Home />
        </Route>

        <Route exact path="/repositories">
          <Repositories />
        </Route>

        <Route path="/repositories/:id">
          <RepositoryDetails/>
        </Route>

        <Route path="*">
          <div>This path doesn't exist</div>
        </Route>
      </Switch>
    </div>
  );
};

export default AuthenticatedApplication;
