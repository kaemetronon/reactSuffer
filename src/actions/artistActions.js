import axios from "axios";
import {
    GET_ARTIST,
    GET_ALL_ARTISTS,
    DELETE_ARTIST
} from "../reducers/artist/artistTypes";

export const getArtist = (id, history) => async dispatch => {
    const res = await axios.get(`http://localhost:8080/artist/${id}`);
    dispatch({
        type: GET_ARTIST,
        payload: res.data
    });
};

export const getAllArtists = () => async dispatch => {
    const res = await axios.get(`http://localhost:8080/artist/all`);
    dispatch({
        type: GET_ALL_ARTISTS,
        payload: res.data
    });
};

export const addArtist = (artist, history) => async  dispatch => {
    await axios.post(`http://localhost:8080/music-manage/addArtist`, artist);
    history.push("/artists")
}

export const deleteArtist = (id, name) => async dispatch => {
    if (
        window.confirm(
            `You are deleting artist ${name}, this action cannot be undone`
        )
    ) {
        await axios.delete(`http://localhost:8080/artist/${id}`);
        dispatch({
            type: DELETE_ARTIST,
            payload: id
        });
    }
};