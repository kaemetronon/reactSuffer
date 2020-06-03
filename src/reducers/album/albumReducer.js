import {
    GET_ALL_ALBUMS,
    GET_ALBUM,
    DELETE_ALBUM,
    GET_ALBUMS_BY_ARTIST
} from "./albumTypes";

const initialState = {
    albums: [],
    albumsByArtist: [],
    album: {}
};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_ALBUMS:
            return {
                ...state,
                albums: action.payload
            };
        case GET_ALBUMS_BY_ARTIST:
        return {
            ...state,
            albumsByArtist: action.payload
        }
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