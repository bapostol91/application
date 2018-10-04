import HomePage from "./HomePage";
import routes from "../Routes";

const getRoute = () => "/home";

const onEnterRoute = () => {

};
const addRoutes = () => {
	routes.push({
		path: getRoute(),
		component: () => HomePage()
	});
};
export default {
	onEnterRoute,
	addRoutes
}