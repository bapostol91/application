import { createStore, combineReducers  } from 'redux';
import navbar from "./Mobila/NavBar";
import carusel from "./Mobila/Carusel";
import CaruselState from "./Mobila/Carusel/CaruselState";
const reducers = combineReducers({
    navbar,
    carusel
});
const store = createStore(reducers);
const subscribe = store.subscribe;
const getCurrentState = store.getState;
const states = [
    CaruselState
];
const initialCalls =() => {
    states.forEach(state => state.addRoutes());
    CaruselState.onEnterRoute();
};

export default {
    store,
    subscribe,
    getCurrentState,
    initialCalls
}