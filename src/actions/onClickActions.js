export const ADD_ONCLICK = 'ADD_ONCLICK';

export const addOnClick = e => {
    return { type: ADD_ONCLICK, dispatch: e};
}

export const REMOVE_ONCLICK = 'REMOVE_ONCLICK';

export const removeOnClick = () => {
    return REMOVE_ONCLICK;
}