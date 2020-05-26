import axios from "axios";
import {DELETE_COMMENT} from "../reducers/comment/commentTypes";

export const addComment = (albId, comment, history) => async  dispatch => {
    await axios.post(`http://localhost:8080/album/${albId}/addComment`, comment);
    history.push(`/album/${albId}`)
}

export const deleteComment = (albId, commId) => async dispatch => {
    if (
        window.confirm(
            `You are deleting comment, this action cannot be undone`
        )
    ) {
        await axios.delete(`http://localhost:8080/album/${albId}/comment/${commId}`);
        dispatch({
            type: DELETE_COMMENT,
            payload: commId
        });
    }
};