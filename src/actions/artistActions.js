import axios from "axios";
import {
    GET_ARTIST,
    GET_ALL_ARTISTS,
    EDIT_ARTIST,
    DELETE_ARTIST
} from "../reducers/artist/artistTypes";
import mars from '../'


// export const getArtist = (id) => async dispatch => {
//     const res = await axios.get(`http://localhost:8080/artist/${id}`);
//     dispatch({
//         type: GET_ARTIST,
//         payload: res.data
//     });
// };
export const getArtist = (id) => async dispatch => {
    const res = {
        id: '3',
        name: 'XXXTentacion',
        year: '2013 — 2018',
        image: 'xxxtentacion.jpg',
        description: "Джасей Дуэйн Рикардо Онфрой (23 января 1998, Плантейшен, Флорида, — 18 июня 2018, Дирфилд-Бич, Флорида), известный под псевдонимом XXXTentacion — американский рэпер, певец, автор песен и музыкант. Несмотря на то, что Онфрой был противоречивой фигурой из-за множества проблем с законом, у него появились значительное количество молодых последователей и всплески популярности за его короткую карьеру. Его часто хвалили критики и поклонники за его разносторонность, за его музыку в стиле трэп, R&B, рок и эмо."
    }
    dispatch({
        type: GET_ARTIST,
        payload: res
    });
};

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
        name: '30 seconds to mars',
        year: '1998 — present',
        image: 'mars.jpg',
        description: "Thirty Seconds to Mars — американская рок-группа из Лос-Анджелеса, штат Калифорния, исполняющая альтернативный рок. Основана в 1998 году братьями Джаредом и Шенноном Лето."
    },{
        id: '1',
        name: 'Metallica',
        year: '1981 — present',
        image: 'metallica.jpg',
        description: "Американская метал-группа, образованная в 1981 году. Metallica оказала большое влияние на развитие метала и входит (вместе с такими группами как Slayer, Megadeth и Anthrax) в «большую четвёрку трэш-метала»."
    },{
        id: '2',
        name: 'Eminem',
        year: '1988 — present',
        image: 'eminem.jpg',
        description: "Thirty Seconds to Mars — американская рок-группа из Лос-Анджелеса, штат Калифорния, исполняющая альтернативный рок. Основана в 1998 году братьями Джаредом и Шенноном Лето."
    },{
        id: '3',
        name: 'XXXTentacion',
        year: '2013 — 2018',
        image: 'xxxtentacion.jpg',
        description: "Thirty Seconds to Mars — американская рок-группа из Лос-Анджелеса, штат Калифорния, исполняющая альтернативный рок. Основана в 1998 году братьями Джаредом и Шенноном Лето."
    },{
        id: '4',
        name: 'Lil Pump',
        year: '2015 — present',
        image: 'lil pump.jpg',
        description: "Thirty Seconds to Mars — американская рок-группа из Лос-Анджелеса, штат Калифорния, исполняющая альтернативный рок. Основана в 1998 году братьями Джаредом и Шенноном Лето."
    },{
        id: '4',
        name: 'Drake',
        year: '2001 — present',
        image: 'drake.jpg',
        description: "Thirty Seconds to Mars — американская рок-группа из Лос-Анджелеса, штат Калифорния, исполняющая альтернативный рок. Основана в 1998 году братьями Джаредом и Шенноном Лето."
    },{
        id: '4',
        name: 'Rammstein',
        year: '1994 — present',
        image: 'rammstein.jpg',
        description: "Thirty Seconds to Mars — американская рок-группа из Лос-Анджелеса, штат Калифорния, исполняющая альтернативный рок. Основана в 1998 году братьями Джаредом и Шенноном Лето."
    },{
        id: '4',
        name: 'Bumble beezy',
        year: '2011 — present',
        image: 'bumble beezy.jpg',
        description: "Thirty Seconds to Mars — американская рок-группа из Лос-Анджелеса, штат Калифорния, исполняющая альтернативный рок. Основана в 1998 году братьями Джаредом и Шенноном Лето."
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

// export const editArtist = (artist) => async dispatch => {
//     const res = await axios.put(`http://localhost:8080/music-manage/addArtist`, artist);
//     dispatch({
//         type: EDIT_ARTIST,
//         payload: res
//     });
// };

export const deleteArtist = (id, name, history) => async dispatch => {
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
        history.push("/artists");
    }
};