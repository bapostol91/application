import { createStore, combineReducers  } from 'redux';
import navbar from "./Mobila/NavBar";
import carusel from "./Mobila/Carusel";

const reducers = combineReducers({
    navbar,
    carusel
});
const store = createStore(reducers);
const subscribe = store.subscribe;

const getCurrentState = store.getState;


export default {
    store,
    subscribe,
    getCurrentState
}