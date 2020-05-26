import axios from "axios";
import {
    GET_ALBUM,
    GET_ALL_ALBUMS,
    DELETE_ALBUM
} from "../reducers/album/albumTypes";

export const getAlbum = (id, history) => async dispatch => {
        const res = await axios.get(`http://localhost:8080/album/${id}`);
        dispatch({
            type: GET_ALBUM,
            payload: res.data
        });
};

export const getAllAlbums = () => async dispatch => {
    const res = await axios.get(`http://localhost:8080/album/all`);
    dispatch({
        type: GET_ALL_ALBUMS,
        payload: res.data
    });
};

export const addAlbum = (album, history) => async  dispatch => {
    await axios.post(`http://localhost:8080/music-manage/addAlbum`, album);
    history.push("/albums")
}

export const deleteAlbum = id => async dispatch => {
    if (
        window.confirm(
            `You are deleting album ${id}, this action cannot be undone`
        )
    ) {
        await axios.delete(`http://localhost:8080/music-manage/album/${id}`);
        dispatch({
            type: DELETE_ALBUM,
            payload: id
        });
    }
};