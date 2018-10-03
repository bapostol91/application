import routes from "../Routes";
import state from "../../State";
import CaruselPage from "./CaruselPage";
import CaruselItem from "./CaruselItem";
import Dropbox from "../Dropbox";

const getRoute = () => "/";

const getImages =() =>{
    return state.getCurrentState().carusel.images.map(image => CaruselItem(image))
};

const setImages = image => state.store.dispatch({ type: "ADD_IMAGES", image});

const onEnterRoute = () =>{
	Dropbox.getListOfImages(response => setImages({file: response.link, legend: response.metadata.name}));

};

const addRoutes = () => {
    routes.push({
        path: getRoute(),
        component : () => CaruselPage(getImages())
    });
};

export default {
    onEnterRoute,
    addRoutes
}