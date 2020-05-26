import {
    DELETE_COMMENT
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
        default:
            return state;
    }
}