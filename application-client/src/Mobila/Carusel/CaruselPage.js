import React from "react";
import Carusel from "./Carusel";
import Page from "../Page/Page";

export default (images) => {
    return (
        <Page>
            <p className="col text-center">
                Pentru mai multe detalii va rog sa il contactati pe Jhon la 0744 602 643.
            </p>
            <Carusel images = {images}/>
        </Page>
    );
}