import axios from "axios";
import {
    GET_ALBUM,
    GET_ALL_ALBUMS,
    DELETE_ALBUM,
    GET_ALBUMS_BY_ARTIST
} from "../reducers/album/albumTypes";

// export const getAlbum = (id, history) => async dispatch => {
//         const res = await axios.get(`http://localhost:8080/album/${id}`);
//         dispatch({
//             type: GET_ALBUM,
//             payload: res.data
//         });
// };
export const getAlbum = (id) => async dispatch => {
    const res = {
        alb_id: 0,
        art_id: '1',
        name: id,
        artist: 'artName1',
        file: 'path1',
        genre: 'genre1',
        averageScore: '9',
        songs: [{
            id: '0',
            song_name: 'sName1',
            number: '0'
        },
            {
                id: '1',
                song_name: 'sName2',
                number: '1'
            }]
    };
    dispatch({
        type: GET_ALBUM,
        payload: res
    });
};

// export const getAllAlbums = () => async dispatch => {
//     const res = await axios.get(`http://localhost:8080/album/all`);
//     dispatch({
//         type: GET_ALL_ALBUMS,
//         payload: res.data
//     });
// };
export const getAllAlbums = () => async dispatch => {
    const res = [
        {
            alb_id: '0',
            art_id: '1',
            name: 'name1',
            artist: 'artName1',
            file: 'path1',
            genre: 'genre1',
            averageScore: '9',
            songs: [{
                id: '0',
                song_name: 'sName1',
                number: '99'
            },
            {
                id: '1',
                song_name: 'sName2',
                number: '1'
            }]
        },
        {
            alb_id: '2',
            art_id: '3',
            name: 'name2',
            artist: 'artName2',
            file: 'path2',
            genre: 'genre2',
            averageScore: '7',
            songs: [{
                id: '0',
                song_name: 'sName1',
                number: '2'
            },
            {
                id: '1',
                song_name: 'sName2',
                number: '3'
            }]
        }]
    dispatch({
        type: GET_ALL_ALBUMS,
        payload: res
    });
};

// export const getAlbumsByArtist = (art_id) => async dispatch => {
//     const res = await axios.get(`http://localhost:8080/album/by/${art_id}`);
//     dispatch({
//         type: GET_ALBUMS_BY_ARTIST,
//         payload: res.data
//     });
// };
export const getAlbumsByArtist = (art_id) => async dispatch => {
    const res = [
        {
            alb_id: '0',
            art_id: '1',
            name: 'name1',
            artist: 'artName1',
            file: 'path1',
            genre: 'genre1',
            averageScore: '9',
            songs: [{
                id: '0',
                song_name: 'sName1',
                number: '99'
            },
                {
                    id: '1',
                    song_name: 'sName2',
                    number: '1'
                }]
        },
        {
            alb_id: '2',
            art_id: '3',
            name: 'name2',
            artist: 'artName1',
            file: 'path2',
            genre: 'genre2',
            averageScore: '7',
            songs: [{
                id: '0',
                song_name: 'sName1',
                number: '2'
            },
                {
                    id: '1',
                    song_name: 'sName2',
                    number: '3'
                }]
        }]
    dispatch({
        type: GET_ALBUMS_BY_ARTIST,
        payload: res
    });
};

export const addAlbum = (album, history) => async dispatch => {
    await axios.post(`http://localhost:8080/music-manage/addAlbum`, album);
    history.push("/albums")
}

export const deleteAlbum = (id, history) => async dispatch => {
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
        history.push("/albums");
    }
};