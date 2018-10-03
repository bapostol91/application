import React from 'react';
import NavBar from "./NavBar/NavBar";
import NavBarState from "./NavBar/NavBarState";
import State from "../State";
import Carusel from "./Carusel/Carusel";

export default () => (
    <div>
        <NavBar isOpen={State.getCurrentState().navbar.isOpen} toggle={NavBarState.toggle}/>

        <div className="container">
            <p className="col text-center">
                Pentru mai multe detalii va rog sa il contactati pe Jhon la 0744 602 643.
            </p>
            <Carusel />
        </div>
    </div>
);
