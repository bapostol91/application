import React from "react";
import Carusel from "./Carusel";
import Page from "../Page/Page";

export default (images) => {
	return (
		<Page>
			<Carusel images={images}/>
		</Page>
	);
}