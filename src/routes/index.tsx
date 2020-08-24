import React from "react";
import {
    BrowserRouter as Router,
} from 'react-router-dom';
import {useSelector} from "react-redux";
import {StoreState} from "../store";
import AuthenticatedRoutes from "./authenticated.route";
import AnonymousRoutes from "./anonymous.route";

export default function Routes(){
    const {isSignedIn} = useSelector((state: StoreState) => state.auth);

    return (
        <Router>
            {isSignedIn ? <AuthenticatedRoutes/> : <AnonymousRoutes/>}
        </Router>
    )
}
