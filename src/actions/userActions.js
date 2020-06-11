import axios from "axios";
import {
    GET_ALL_USERS,
    GET_USER,
    LOG_OUT
} from "../reducers/user/userTypes";

// export const getUser = (id) => async dispatch => {
//     const res = await axios.get(`http://localhost:8080/user/${id}`);
//     dispatch({
//         type: GET_USER,
//         payload: res.data
//     })
// }
export const getUser = (id) => async dispatch => {
    console.log('get usr')
    const res = {
        id: '0',
        username: 'Steeeeve',
        role: 'ADMIN',
        firstName: 'Sergey',
        lastName: 'Wozniak',
        email: 'st_wozniak@outlook.com',
        isActive: 'true'
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
    console.log('get all usrs')
    const res = [{
        id: '0',
        username: 'Steeeeve',
        role: 'ADMIN',
        firstName: 'Sergey',
        lastName: 'Wozniak',
        email: 'st_wozniak@outlook.com',
        isActive: 'true'
    }, {
        id: '1',
        username: 'BringMeThe',
        role: 'USER',
        firstName: 'Steve',
        lastName: 'Brin',
        email: 'gogogo@gmail.com',
        isActive: 'true'
    }]; // допустим это получили из стейта
    dispatch({
        type: GET_ALL_USERS,
        payload: res
    })
}

export const editUser = (user, history) => async dispatch => {
    console.log('edit usr')
    await axios.post(`http://localhost:8080/user/${user.id}`, user);
    history.push("/users")
}

export const addUser = (userDto, history) => async  dispatch => {
    console.log('add usr')
    await axios.post(`http://localhost:8080/registration`, userDto);
    history.push(`/login`)
}

export const logIn = (userDto, history) => async  dispatch => {
    console.log('login')
    await axios.post(`http://localhost:8080/login`, userDto);
    history.push(`/login`)
}

export const logOut = () => async  dispatch => {
    console.log('logout')
    // хз какой запрос к серверу должен быть на этот случай
    dispatch({
        type: LOG_OUT
    })
}
