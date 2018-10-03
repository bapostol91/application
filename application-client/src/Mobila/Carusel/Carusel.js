import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "./Carusel.css";
import buc1 from "./images/bucatarie.jpg";
import buc2 from "./images/bucatarie2.jpg";
import buc3 from "./images/bucatarie3.jpg";
import liv1 from "./images/living.jpg";
import scara1 from "./images/Scara1.jpg";
import 'react-responsive-carousel/lib/styles/carousel.min.css'
export default () => (
    <Carousel emulateTouch={true} >
        <div>
            <img src={buc1} alt="Not Found"/>
            <p className="legend">Bucatarie 1</p>
        </div>
        <div>
            <img src={buc2} alt="Not Found"/>
            <p className="legend">Bucatarie 2</p>
        </div>
        <div>
            <img src={buc3} alt="Not Found"/>
            <p className="legend">Bucatarie 3</p>
        </div>
        <div>
            <img src={liv1} alt="Not Found"/>
            <p className="legend">Living 1</p>
        </div>
        <div>
            <img src={scara1} alt="Not Found"/>
            <p className="legend">Scara 1</p>
        </div>
    </Carousel>
)