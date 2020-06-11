import axios from "axios";
import {DELETE_SONG} from "../reducers/song/songTypes";


export const addSong = (albId, song) => async  dispatch => {
    console.log('add song')
    await axios.post(`http://localhost:8080/music-manage/album/${albId}/addSong`, song);
}

export const deleteSong = (albId, songId) => async dispatch => {
    console.log('del song')
    if (
        window.confirm(
            `You are deleting song ${songId}, this action cannot be undone`
        )
    ) {
        await axios.delete(`http://localhost:8080/music-manage/album/${albId}/song/${songId}`);
        dispatch({
            type: DELETE_SONG,
            payload: songId
        });
    }
};