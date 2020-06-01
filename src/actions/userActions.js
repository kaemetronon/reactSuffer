import axios from "axios";
import {
    GET_ALL_USERS,
    GET_USER
} from "../reducers/user/userTypes";

// export const getUser = (id) => async dispatch => {
//     const res = await axios.get(`http://localhost:8080/user/${id}`);
//     dispatch({
//         type: GET_USER,
//         payload: res.data
//     })
// }
export const getUser = (id) => async dispatch => {
    const res = {
        id: '0',
        username: 'u1',
        role: 'r1',
        firstName: 'f1',
        lastName: 'l1',
        email: 'taganrulezz14@gmail.com',
        isActive: 'i1'
    }
    dispatch({
        type: GET_USER,
        payload: res
    })
}

// export const getAllUsers = () => async dispatch => {
//     const res = await axios.get(`http://localhost:8080/user/all`);
//     dispatch({
//         type: GET_ALL_USERS,
//         payload: res.data
//     })
// }
export const getAllUsers = () => async dispatch => {
    const res = [{
        id: '0',
        username: 'u1',
        role: 'r1',
        firstName: 'f1',
        lastName: 'l1',
        email: 'taganrulezz14@gmail.com',
        isActive: 'i1'
    }, {
        id: '1',
        username: 'u2',
        role: 'r2',
        firstName: 'f2',
        lastName: 'l2',
        email: 'taganrulezz14@gmail.com',
        isActive: 'i2'
    }]; // допустим это получили из стейта
    dispatch({
        type: GET_ALL_USERS,
        payload: res
    })
}

export const editUser = (user, history) => async dispatch => {
    await axios.post(`http://localhost:8080/user/${user.id}`, user);
    history.push("/users")
}

// export const addUser = (userDto, history) => async  dispatch => {
//     await axios.post(`http://localhost:8080/registration`, userDto);
//     history.push(`/login`)
// }

// export const activateUser = (code, history) => async  dispatch => {
//     await axios.post(`http://localhost:8080/activate/${code}`);
//     history.push(`/login`)
// }

