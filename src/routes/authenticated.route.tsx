import React from 'react';
import {
  Route, Switch, useHistory,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import PageNotFound from '../pages/PageNotFound';
import { StoreState } from '../store';
import { authorizedRoutes } from '../store/modules/auth/slice';

export interface HomeParams {
  companyId: string;
}

export default function AuthenticatedRoutes() {
  const { roles } = useSelector((state: StoreState) => state.auth);

  return (
    <Switch>
      {authorizedRoutes(roles).map((route) => (
        <Route
          key={route.path}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
      <Route path="/" exact component={authorizedRoutes(roles).find((x) => x.isDefaultForCurrentUser(roles))?.component} />
      <Route path="*" component={PageNotFound} />
    </Switch>
  );
}
