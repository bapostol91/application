import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './Mobila/App';
import registerServiceWorker from './registerServiceWorker';
import state from "./State";

registerServiceWorker();
const getNextApp = () => require('./Mobila/App').default;
state.initialCalls(document.location.hash);
const createRootElement = () => {
	let root = document.getElementById('root');
	root.style.height="100%";
	return root;
};

const render = Component => {
	ReactDOM.render(
		<Component/>,
		createRootElement()
	);
};

render(App);

state.subscribe(() => {
	render(getNextApp());
});

if (module.hot) {
	module.hot.accept('./Mobila/App', () => render(getNextApp()))
}