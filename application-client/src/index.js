import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './Mobila/App';
import registerServiceWorker from './registerServiceWorker';
import state from "./State";

registerServiceWorker();
const getNextApp = () => require('./Mobila/App').default;

const render = Component => {
    ReactDOM.render(
      <Component/>,
      document.getElementById('root')
    );
};

render(App);

state.subscribe(() => {
    render(getNextApp());
});

if (module.hot) {
  module.hot.accept('./Mobila/App', () =>  render(getNextApp()))
}