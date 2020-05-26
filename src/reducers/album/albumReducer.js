import {
    GET_ALL_ALBUMS,
    GET_ALBUM,
    DELETE_ALBUM
} from "./albumTypes";

const initialState = {
    albums: [],
    album: {}
};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_ALBUMS:
            return {
                ...state,
                albums: action.payload
            };

        case GET_ALBUM:
            return {
                ...state,
                album: action.payload
            };

        case DELETE_ALBUM:
            return {
                ...state,
                albums: state.albums.filter(
                    album => album.id !== action.payload
                )
            };
        default:
            return state;
    }
}