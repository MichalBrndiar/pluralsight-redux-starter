import {combineReducers} from 'redux';
import movies from './movieReducer';
import actors from './actorsReducer';

export default combineReducers({
    movies,
    actors
});