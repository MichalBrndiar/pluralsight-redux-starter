import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Home from './components/Home/HomePage';
import About from './components/About/AboutPage';
import Movies from './components/Movies/MoviesPage';
import Actors from './components/Actors/ActorsPage';

const routes = (
    <Route path="/" component={App}>
        <Route path="/home" component={Home} />
        <Route path="/about(/:name)" component={About} />
        <Route path="/movies" component={Movies} />
        <Route path="/actors" component={Actors} />
    </Route>
);

export default routes;