import {
    DELETE_SONG
} from "./songTypes";

const initialState = {
    songs: [],
    song: {}
};

export default function(state = initialState, action) {
    switch (action.type) {
        case DELETE_SONG:
            return {
                ...state,
                songs: state.songs.filter(
                    song => song.id !== action.payload
                )
            };
        default:
            return state;
    }
}