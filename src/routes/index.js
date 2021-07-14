import React  from "react";
import {
  BrowserRouter as Router, Switch, Route, Redirect, useHistory
} from "react-router-dom";

import {useAuth} from '../App/AppContext'
import { Dashboard } from "./Dashboard";
import { ForegtPage } from "./ForgetPage";
import { LoginPage } from "./LoginPage";


export default function AppRoutes() {
  return ( 
      <Router>
          <Switch> 
              <Route exact path="/">
                  <LoginPage />
              </Route> 
              <Route exact path="/foregt">
                  <ForegtPage />
              </Route> 
              <PrivateRoute exact path="/protected">
                  <Dashboard /> 
              </PrivateRoute>
          </Switch>
      </Router>
  );
}

function PrivateRoute({ children, ...rest }) {
  let auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (children) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

