import {combineReducers, createStore} from 'redux';
import navbar from "./Mobila/NavBar";
import carusel from "./Mobila/Carusel";
import CaruselState from "./Mobila/Carusel/CaruselState";
import ServicesState from "./Mobila/Services/ServicesState";
import HomeState from "./Mobila/Home/HomeState";
import history from "./Mobila/Routes/history";

const reducers = combineReducers({
	navbar,
	carusel
});
const store = createStore(reducers);
const subscribe = store.subscribe;
const getCurrentState = store.getState;
const states = {
	"#/galery": CaruselState,
	"#/services": ServicesState,
	"#/home": HomeState
};
const initialCalls = (location) => {
	Object.entries(states).map(([hash, state]) => (state)).forEach(state => state.addRoutes());
	let currentState = Object.entries(states).map(([hash, state]) => ({hash, state})).find(state => state.hash === location);
	if (!currentState) {
		history.push("/home");
	}
	CaruselState.onEnterRoute();
};
const isNavBarOpen = () => getCurrentState().navbar.isOpen;

export default {
	store,
	subscribe,
	getCurrentState,
	initialCalls,
	isNavBarOpen
}