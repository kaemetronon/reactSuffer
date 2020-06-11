import axios from "axios";
import {GET_ALL_COMMENTS, EDIT_COMMENT, DELETE_COMMENT} from "../reducers/comment/commentTypes";

export const addComment = (albId, comment, history) => async dispatch => {
    console.log('add comm')
    await axios.post(`http://localhost:8080/album/${albId}`, comment);
    history.push(`/album/${albId}`)
}

export const commentEdit = (albId, commentId, comment, history) => async dispatch => {
    console.log('edit comm')
    await axios.put(`http://localhost:8080/album/${albId}/comment/${commentId}/`, comment);
    dispatch({
        type: EDIT_COMMENT,
        payload: comment
    });
    history.push(`/album/${albId}`)
}

// export const getAllComments = (albId) => async dispatch => {
//     const res = await axios.get(`http://localhost:8080/album/${albId}/comments`)
//     dispatch({
//         type: GET_ALL_COMMENTS,
//         payload: res
//     });
// }
export const getAllComments = (albId) => async dispatch => {
    console.log('get all comms')
    const res = [{
        commId: '0',
        albName: 'A beautiful lie',
        userName: 'Steeeeve',
        text: 'Perfect!',
        mark: '10',
        time: '3:19PM'
    }, {
        commId: '1',
        albName: 'Master Of Puppets',
        userName: 'BringMeThe',
        text: 'Old school',
        mark: '9',
        time: '2:00AM'
    }];
    dispatch({
        type: GET_ALL_COMMENTS,
        payload: res
    });
}

export const deleteComment = (albId, commId) => async dispatch => {
    console.log('del comm')
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