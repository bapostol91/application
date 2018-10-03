import React from 'react';
import NavBar from "./NavBar/NavBar";
import NavBarState from "./NavBar/NavBarState";
import State from "../State";
import {HashRouter, Switch, Route} from 'react-router-dom';
import routes from "./Routes";
import history from "./Routes/history";

export default () => (
    <div>
        <NavBar isOpen={State.getCurrentState().navbar.isOpen} toggle={NavBarState.toggle}/>
        <HashRouter history={history} >
            <Switch >
                {routes.getRoutes().map((route) => {
                    return (
                        <Route key= {route.path} path={route.path} component={route.component} />
                    )
                })}
            </Switch>
        </HashRouter>
    </div>
);
