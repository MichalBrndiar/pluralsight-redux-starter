import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'jquery';
import 'bootstrap';

import 'babel-polyfill';
import React from 'react';
import ReactDOM, {render} from 'react-dom';
import { Router, browserHistory, hashHistory } from 'react-router';
import { Provider } from 'react-redux';

import routes from './routes';
import configureStore from './store/configureStore';

import {loadActorsAsync} from './actions/movieActions';

const store = configureStore();
const actorsPromise = store.dispatch(loadActorsAsync());

console.log(actorsPromise);

actorsPromise.then(() => {
    console.log('Actors loaded');
});



//render(
ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory} routes={routes} />
    </Provider>,
    document.getElementById('app')
);