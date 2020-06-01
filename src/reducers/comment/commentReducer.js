import {
    DELETE_COMMENT,
    EDIT_COMMENT,
    GET_ALL_COMMENTS
} from "./commentTypes";

const initialState = {
    comments: [],
    comment: {}
};

export default function(state = initialState, action) {
    switch (action.type) {
        case DELETE_COMMENT:
            return {
                ...state,
                comments: state.comments.filter(
                    comment => comment.id !== action.payload
                )
            };
        case GET_ALL_COMMENTS:
            return {
                ...state,
                comments: action.payload
            }
        case EDIT_COMMENT:
            return {
                ...state,
                comments: state.comments.map(
                    comment => {
                        if (comment.id === action.payload.id) {
                            comment = action.payload;
                        }
                    }
                )
            }
        default:
            return state;
    }
}