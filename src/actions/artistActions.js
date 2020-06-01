import axios from "axios";
import {
    GET_ARTIST,
    GET_ALL_ARTISTS,
    EDIT_ARTIST,
    DELETE_ARTIST
} from "../reducers/artist/artistTypes";

// export const getArtist = (id, history) => async dispatch => {
//     const res = await axios.get(`http://localhost:8080/artist/${id}`);
//     dispatch({
//         type: GET_ARTIST,
//         payload: res.data
//     });
// };

// export const getAllArtists = () => async dispatch => {
//     const res = await axios.get(`http://localhost:8080/artist/all`);
//     dispatch({
//         type: GET_ALL_ARTISTS,
//         payload: res.data
//     });
// };
export const getAllArtists = () => async dispatch => {
    const res = [{
        id: '0',
        name: 'artName1',
        year: '14',
        imagePath: 'aga',
        description: "desc for 1"
    },{
        id: '1',
        name: 'artName2',
        year: '88',
        imagePath: 'ggggaaaga',
        description: "desc for 2"
    }]
    dispatch({
        type: GET_ALL_ARTISTS,
        payload: res
    });
};

export const addArtist = (artist, history) => async  dispatch => {
    await axios.post(`http://localhost:8080/music-manage/addArtist`, artist);
    history.push("/artists")
}

export const editArtist = (artist) => async dispatch => {
    const res = {
        id: '0',
        name: 'artName1',
        year: '14',
        imagePath: 'aga',
        description: "desc for 1"
    }
    dispatch({
        type: EDIT_ARTIST,
        payload: res
    });
};
// export const deleteArtist = (id, name) => async dispatch => {
//     if (
//         window.confirm(
//             `You are deleting artist ${name}, this action cannot be undone`
//         )
//     ) {
//         await axios.delete(`http://localhost:8080/artist/${id}`);
//         dispatch({
//             type: DELETE_ARTIST,
//             payload: id
//         });
//     }
// };