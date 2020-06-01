import {
    GET_ALL_ARTISTS,
    GET_ARTIST,
    DELETE_ARTIST,
    EDIT_ARTIST
} from "./artistTypes";

const initialState = {
    artists: [],
    artist: {}
};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_ARTISTS:
            return {
                ...state,
                artists: action.payload
            };
        case GET_ARTIST:
            return {
                ...state,
                artist: action.payload
            };
        case EDIT_ARTIST:
            return {
                ...state,
                artist: action.payload
            };
            return {
                ...state,
                artists: state.artists.map(
                    artist => {
                        if (artist.id === action.payload.id) {
                            artist = action.payload;
                        }
                    }
                )
            }
        case DELETE_ARTIST:
            return {
                ...state,
                artists: state.artists.filter(
                    artist => artist.id !== action.payload
                )
            };
        default:
            return state;
    }
}