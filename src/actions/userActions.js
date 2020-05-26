import axios from "axios";
import {GET_ALL_USERS,
        GET_USER} from "../reducers/user/userTypes";

export const getUser = (id) => async dispatch => {
    const res = await axios.get(`http://localhost:8080/user/${id}`);
    dispatch({
        type: GET_USER,
        payload: res.data
    })
}

export const getAllUsers = () => async dispatch => {
    const res = await axios.get(`http://localhost:8080/user/all`);
    dispatch({
        type: GET_ALL_USERS,
        payload: res.data
    })
}
export const editUser = (user, history) => async  dispatch => {
    await axios.post(`http://localhost:8080/user`, user);
    history.push(`/users`)
}
// export const addUser = (userDto, history) => async  dispatch => {
//     await axios.post(`http://localhost:8080/registration`, userDto);
//     history.push(`/login`)
// }
// export const activateUser = (code, history) => async  dispatch => {
//     await axios.post(`http://localhost:8080/activate/${code}`);
//     history.push(`/login`)
// }

