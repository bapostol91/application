import state from "../../State";

const store = state.store;

const isOpen = () => state.getCurrentState().navbar.isOpen;

const toggle = () => {
	let isOpen = !state.getCurrentState().navbar.isOpen;
	store.dispatch({type: 'NAV_BAR_TOGGLE', isOpen})
};

export default {
	toggle,
	isOpen
}