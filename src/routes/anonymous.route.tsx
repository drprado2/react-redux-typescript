import React from 'react';
import {
  Route, Switch, Redirect, RouteComponentProps,
} from 'react-router-dom';
import SignIn from '../pages/SignIn';

export default function AnonymousRoutes() : JSX.Element {
  return (
    <Switch>
      <Route path="/login" exact component={SignIn} />
      <Route
        path="*"
        render={(props: RouteComponentProps<any>) => <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        }
      />
    </Switch>
  );
}
