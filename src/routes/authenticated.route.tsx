import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import Home from "../pages/Home";
import PageNotFound from "../pages/PageNotFound";
import {useSelector} from "react-redux";
import {StoreState} from "../store";

export interface HomeParams {
    companyId: string;
}

export default function AuthenticatedRoutes() {
    const {authorizedRoutes} = useSelector((state: StoreState) => state.auth);

    return (
        <Switch>
            {authorizedRoutes.map(route => <Route path={route.path} exact={route.exact} component={route.component} />)}
            <Route path='*' component={PageNotFound} />
        </Switch>
    )
}
