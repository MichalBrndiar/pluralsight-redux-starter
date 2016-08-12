import actionTypes from '../actions/actionTypes';

export default function actorsReducer(state = [], action) {
    const findMax = (arr) => {
        let max = 0;
        for (const i of arr) {
            if (i.id >= max) {
                max = i.id;
            }
        }
        return max;
    };

    switch (action.type) {
        case actionTypes.LOAD_ACTORS: {
            return [...action.actors];
        }
        case actionTypes.ADD_ACTOR: {
            const newActor = Object.assign({}, action.actor);
            newActor.id = findMax(state) + 1;

            return [...state, newActor];
        }
        default: {
            return state;
        }
    }
}