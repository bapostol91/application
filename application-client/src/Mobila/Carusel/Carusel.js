import React from 'react';
import {Carousel} from 'react-responsive-carousel';
import "./Carusel.css";
import 'react-responsive-carousel/lib/styles/carousel.min.css'

export default ({images}) => (
	<Carousel emulateTouch={true}
			  infiniteLoop={true}
			  dynamicHeight={true}
			  showIndicators={false}>
		{images}
	</Carousel>
)