import React from "react";
import {
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
import SignIn from "../pages/SignIn";

export default function AnonymousRoutes() {
    return (
        <Switch>
            <Route path='/login' exact component={SignIn} />
            <Route path='/' exact component={SignIn} />
            <Route path='*' render={(props) =>
                <Redirect to={{pathname: '/login', state: {from: props.location}}}  />
            } />
        </Switch>
    )
}
