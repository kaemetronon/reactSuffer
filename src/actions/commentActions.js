import axios from "axios";
import {GET_ALL_COMMENTS, EDIT_COMMENT, DELETE_COMMENT} from "../reducers/comment/commentTypes";

export const addComment = (albId, comment, history) => async dispatch => {
    await axios.post(`http://localhost:8080/album/${albId}/addComment`, comment);
    history.push(`/album/${albId}`)
}

export const commentEdit = (albId, commentId, comment, history) => async dispatch => {
    await axios.put(`http://localhost:8080/album/${albId}/comment/${commentId}/`, comment);
    dispatch({
        type: EDIT_COMMENT,
        payload: comment
    });
    history.push(`/album/${albId}`)
}

export const getAllComments = (albId) => async dispatch => {
    const res = [{
        commId: '0',
        albName: 'album1',
        userName: 'user1',
        text: 'text1',
        mark: '8',
        time: '4:20PM'
    }, {
        commId: '1',
        albName: 'album2',
        userName: 'user2',
        text: 'text2',
        mark: '9',
        time: '14:88AM'
    }];
    dispatch({
        type: GET_ALL_COMMENTS,
        payload: res
    });
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