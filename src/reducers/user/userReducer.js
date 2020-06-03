import {
    GET_ALL_USERS,
    GET_USER,
    ADD_USER,
    ACTIVATE_USER,
    LOG_OUT
} from "./userTypes";

const initialState = {
    users: [],
    user: {name: 'guest'}
};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_USERS:
            return {
                ...state,
                users: action.payload
            };
        case GET_USER:
            return {
                ...state,
                user: action.payload
            };
        case LOG_OUT:
            return {
                ...state,
                user: {name: 'guest'}
            }
        default:
            return state;
    }
}