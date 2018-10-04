import React from 'react';
import NavBar from "./NavBar/NavBar";
import NavBarState from "./NavBar/NavBarState";
import state from "../State";
import {HashRouter, Route, Switch} from 'react-router-dom';
import routes from "./Routes";
import history from "./Routes/history";

export default () => (
	<div className="topDiv">
		<NavBar isOpen={state.isNavBarOpen()} toggle={NavBarState.toggle}/>
		<HashRouter history={history}>
			<Switch>
				{routes.getRoutes().map(route => <Route key={route.path} {...route}/>)}
			</Switch>
		</HashRouter>
	</div>
);
