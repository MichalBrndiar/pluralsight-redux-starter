import actionTypes from './actionTypes';
import ActorsApi from '../api/mockActorsApi';

export function createMovie(movie) {
    return {
        type: actionTypes.CREATE_MOVIE,
        movie
    };
}

export function addActor(actor) {
    return {
        type: actionTypes.ADD_ACTOR,
        actor
    };
}

function loadActors(actors) {
    return {
        type: actionTypes.LOAD_ACTORS,
        actors
    };
}

export function loadActorsAsync() {
    return dispatch => {
        return ActorsApi.getAll()
            .then(actors => {
                dispatch(loadActors(actors));
            })
            .catch(error => {
                throw (error);
            });
    };
}