export const ADD_ONCLICK = 'ADD_ONCLICK';

export const addOnClick = e => {
    return { type: ADD_ONCLICK, payload: e};
}

export const REMOVE_ONCLICK = 'REMOVE_ONCLICK';

export const removeOnClick = e => {
    return {type: REMOVE_ONCLICK, payload: e};
}