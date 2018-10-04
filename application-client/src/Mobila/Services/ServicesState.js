import ServicesPage from "./ServicesPage";
import routes from "../Routes";

const getRoute = () => "/services";

const onEnterRoute = () => {

};
const addRoutes = () => {
	routes.push({
		path: getRoute(),
		component: () => ServicesPage()
	});
};
export default {
	onEnterRoute,
	addRoutes
}