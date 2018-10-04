import React from "react";

export default (image) => (
	<div key={image.legend}>
		<img src={image.file} alt="Not Found"/>
		<p className="legend">{image.legend}</p>
	</div>
)