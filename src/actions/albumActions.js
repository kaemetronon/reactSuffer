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
    console.log('get album')
    const res = {
        alb_id: 0,
        art_id: 0,
        name: 'A beautiful lie',
        artist: '30 seconds to mars',
        cover: 'a beautiful lie.jpg',
        genre: 'Alternative',
        averageScore: '9',
        songs: [{
            id: '0',
            song_name: 'Attack',
            number: '1',
            songPath: 'attack.mp3'
        }, {
            id: '1',
            song_name: 'A Beautiful Lie',
            number: '2',
            songPath: 'a beautiful lie.mp3'
        }, {
            id: '2',
            song_name: 'The Kill',
            number: '3',
            songPath: 'the kill.mp3'
        }, {
            id: '3',
            song_name: 'Was It a Dream?',
            number: '4',
            songPath: 'was it a dream.mp3'
        }, {
            id: '4',
            song_name: 'The Fantasy',
            number: '5',
            songPath: 'the fantasy.mp3'
        }, {
            id: '5',
            song_name: 'Savior',
            number: '6',
            songPath: 'savior.mp3'
        }, {
            id: '6',
            song_name: 'From Yesterday',
            number: '7',
            songPath: 'from yesterday.mp3'
        }, {
            id: '7',
            song_name: 'The Story',
            number: '8',
            songPath: 'the story.mp3'
        }, {
            id: '8',
            song_name: 'R-Evolve',
            number: '9',
            songPath: 'revolve.mp3'
        }, {
            id: '9',
            song_name: 'A Modern Myth',
            number: '10',
            songPath: 'a modern myth.mp3'
        }, {
            id: '10',
            song_name: 'Battle of One',
            number: '11',
            songPath: 'battle of one.mp3'
        }, {
            id: '11',
            song_name: 'Hunter',
            number: '12',
            songPath: 'hunter.mp3'
        },
        ]
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
    console.log('get all albums')
    const res = [
        {
            alb_id: 0,
            art_id: 0,
            name: 'A beautiful lie',
            artist: '30 seconds to mars',
            cover: 'a beautiful lie.jpg',
            genre: 'ROCK',
            averageScore: '9',
            songs: [{
                id: '0',
                song_name: 'Attack',
                number: '1'
            }, {
                id: '1',
                song_name: 'A Beautiful Lie',
                number: '2'
            }, {
                id: '2',
                song_name: 'The Kill',
                number: '3'
            }, {
                id: '3',
                song_name: 'Was It a Dream?',
                number: '4'
            }, {
                id: '4',
                song_name: 'The Fantasy',
                number: '5'
            }, {
                id: '5',
                song_name: 'Savior',
                number: '6'
            }, {
                id: '6',
                song_name: 'From Yesterday',
                number: '7'
            }, {
                id: '7',
                song_name: 'The Story',
                number: '8'
            }, {
                id: '8',
                song_name: 'The Story',
                number: '9'
            }, {
                id: '9',
                song_name: 'R-Evolve',
                number: '10'
            }, {
                id: '10',
                song_name: 'A Modern Myth',
                number: '11'
            }, {
                id: '11',
                song_name: 'Battle of One',
                number: '12'
            }, {
                id: '12',
                song_name: 'Hunter',
                number: '13'
            },
            ]
        },
        {
            alb_id: '1',
            art_id: '1',
            name: 'Master of puppets',
            artist: 'Metallica',
            cover: 'master of the puppets.jpg',
            genre: 'ROCK',
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
        },
        {
            alb_id: 2,
            art_id: 2,
            name: 'The Marshall Mathers LP',
            artist: 'Eminem',
            cover: 'The Marshall Mathers LP.jpg',
            genre: 'ROCK',
            averageScore: '9',
            songs: [{
                id: '0',
                song_name: 'Attack',
                number: '1'
            }, {
                id: '1',
                song_name: 'A Beautiful Lie',
                number: '2'
            }, {
                id: '2',
                song_name: 'The Kill',
                number: '3'
            }, {
                id: '3',
                song_name: 'Was It a Dream?',
                number: '4'
            }, {
                id: '4',
                song_name: 'The Fantasy',
                number: '5'
            }, {
                id: '5',
                song_name: 'Savior',
                number: '6'
            }, {
                id: '6',
                song_name: 'From Yesterday',
                number: '7'
            }, {
                id: '7',
                song_name: 'The Story',
                number: '8'
            }, {
                id: '8',
                song_name: 'The Story',
                number: '9'
            }, {
                id: '9',
                song_name: 'R-Evolve',
                number: '10'
            }, {
                id: '10',
                song_name: 'A Modern Myth',
                number: '11'
            }, {
                id: '11',
                song_name: 'Battle of One',
                number: '12'
            }, {
                id: '12',
                song_name: 'Hunter',
                number: '13'
            },
            ]
        },
        {
            alb_id: 3,
            art_id: 3,
            name: '30 seconds to mars',
            artist: '30 seconds to mars',
            cover: '30 seconds to mars.jpg',
            genre: 'ROCK',
            averageScore: '9',
            songs: [{
                id: '0',
                song_name: 'Attack',
                number: '1'
            }, {
                id: '1',
                song_name: 'A Beautiful Lie',
                number: '2'
            }, {
                id: '2',
                song_name: 'The Kill',
                number: '3'
            }, {
                id: '3',
                song_name: 'Was It a Dream?',
                number: '4'
            }, {
                id: '4',
                song_name: 'The Fantasy',
                number: '5'
            }, {
                id: '5',
                song_name: 'Savior',
                number: '6'
            }, {
                id: '6',
                song_name: 'From Yesterday',
                number: '7'
            }, {
                id: '7',
                song_name: 'The Story',
                number: '8'
            }, {
                id: '8',
                song_name: 'The Story',
                number: '9'
            }, {
                id: '9',
                song_name: 'R-Evolve',
                number: '10'
            }, {
                id: '10',
                song_name: 'A Modern Myth',
                number: '11'
            }, {
                id: '11',
                song_name: 'Battle of One',
                number: '12'
            }, {
                id: '12',
                song_name: 'Hunter',
                number: '13'
            },
            ]
        },
        {
            alb_id: 4,
            art_id: 4,
            name: '17',
            artist: 'XXXTentacion',
            cover: '17.jpg',
            genre: 'ROCK',
            averageScore: '9',
            songs: [{
                id: '0',
                song_name: 'Attack',
                number: '1'
            }, {
                id: '1',
                song_name: 'A Beautiful Lie',
                number: '2'
            }, {
                id: '2',
                song_name: 'The Kill',
                number: '3'
            }, {
                id: '3',
                song_name: 'Was It a Dream?',
                number: '4'
            }, {
                id: '4',
                song_name: 'The Fantasy',
                number: '5'
            }, {
                id: '5',
                song_name: 'Savior',
                number: '6'
            }, {
                id: '6',
                song_name: 'From Yesterday',
                number: '7'
            }, {
                id: '7',
                song_name: 'The Story',
                number: '8'
            }, {
                id: '8',
                song_name: 'The Story',
                number: '9'
            }, {
                id: '9',
                song_name: 'R-Evolve',
                number: '10'
            }, {
                id: '10',
                song_name: 'A Modern Myth',
                number: '11'
            }, {
                id: '11',
                song_name: 'Battle of One',
                number: '12'
            }, {
                id: '12',
                song_name: 'Hunter',
                number: '13'
            },
            ]
        },
        {
            alb_id: 5,
            art_id: 5,
            name: 'Harverd Dropout',
            artist: 'Lil Pump',
            cover: 'Harverd Dropout.jpg',
            genre: 'ROCK',
            averageScore: '9',
            songs: [{
                id: '0',
                song_name: 'Attack',
                number: '1'
            }, {
                id: '1',
                song_name: 'A Beautiful Lie',
                number: '2'
            }, {
                id: '2',
                song_name: 'The Kill',
                number: '3'
            }, {
                id: '3',
                song_name: 'Was It a Dream?',
                number: '4'
            }, {
                id: '4',
                song_name: 'The Fantasy',
                number: '5'
            }, {
                id: '5',
                song_name: 'Savior',
                number: '6'
            }, {
                id: '6',
                song_name: 'From Yesterday',
                number: '7'
            }, {
                id: '7',
                song_name: 'The Story',
                number: '8'
            }, {
                id: '8',
                song_name: 'The Story',
                number: '9'
            }, {
                id: '9',
                song_name: 'R-Evolve',
                number: '10'
            }, {
                id: '10',
                song_name: 'A Modern Myth',
                number: '11'
            }, {
                id: '11',
                song_name: 'Battle of One',
                number: '12'
            }, {
                id: '12',
                song_name: 'Hunter',
                number: '13'
            },
            ]
        },
        {
            alb_id: 6,
            art_id: 6,
            name: 'Scorpion',
            artist: 'Drake',
            cover: 'Scorpion.jpg',
            genre: 'ROCK',
            averageScore: '9',
            songs: [{
                id: '0',
                song_name: 'Attack',
                number: '1'
            }, {
                id: '1',
                song_name: 'A Beautiful Lie',
                number: '2'
            }, {
                id: '2',
                song_name: 'The Kill',
                number: '3'
            }, {
                id: '3',
                song_name: 'Was It a Dream?',
                number: '4'
            }, {
                id: '4',
                song_name: 'The Fantasy',
                number: '5'
            }, {
                id: '5',
                song_name: 'Savior',
                number: '6'
            }, {
                id: '6',
                song_name: 'From Yesterday',
                number: '7'
            }, {
                id: '7',
                song_name: 'The Story',
                number: '8'
            }, {
                id: '8',
                song_name: 'The Story',
                number: '9'
            }, {
                id: '9',
                song_name: 'R-Evolve',
                number: '10'
            }, {
                id: '10',
                song_name: 'A Modern Myth',
                number: '11'
            }, {
                id: '11',
                song_name: 'Battle of One',
                number: '12'
            }, {
                id: '12',
                song_name: 'Hunter',
                number: '13'
            },
            ]
        },
        {
            alb_id: 0,
            art_id: 0,
            name: 'Rosenrot',
            artist: 'Rammstein',
            cover: 'Rosenrot.jpg',
            genre: 'ROCK',
            averageScore: '9',
            songs: [{
                id: '0',
                song_name: 'Attack',
                number: '1'
            }, {
                id: '1',
                song_name: 'A Beautiful Lie',
                number: '2'
            }, {
                id: '2',
                song_name: 'The Kill',
                number: '3'
            }, {
                id: '3',
                song_name: 'Was It a Dream?',
                number: '4'
            }, {
                id: '4',
                song_name: 'The Fantasy',
                number: '5'
            }, {
                id: '5',
                song_name: 'Savior',
                number: '6'
            }, {
                id: '6',
                song_name: 'From Yesterday',
                number: '7'
            }, {
                id: '7',
                song_name: 'The Story',
                number: '8'
            }, {
                id: '8',
                song_name: 'The Story',
                number: '9'
            }, {
                id: '9',
                song_name: 'R-Evolve',
                number: '10'
            }, {
                id: '10',
                song_name: 'A Modern Myth',
                number: '11'
            }, {
                id: '11',
                song_name: 'Battle of One',
                number: '12'
            }, {
                id: '12',
                song_name: 'Hunter',
                number: '13'
            },
            ]
        },
        {
            alb_id: 7,
            art_id: 7,
            name: '111111',
            artist: 'Bumble beezy',
            cover: '111111.jpg',
            genre: 'ROCK',
            averageScore: '9',
            songs: [{
                id: '0',
                song_name: 'Attack',
                number: '1'
            }, {
                id: '1',
                song_name: 'A Beautiful Lie',
                number: '2'
            }, {
                id: '2',
                song_name: 'The Kill',
                number: '3'
            }, {
                id: '3',
                song_name: 'Was It a Dream?',
                number: '4'
            }, {
                id: '4',
                song_name: 'The Fantasy',
                number: '5'
            }, {
                id: '5',
                song_name: 'Savior',
                number: '6'
            }, {
                id: '6',
                song_name: 'From Yesterday',
                number: '7'
            }, {
                id: '7',
                song_name: 'The Story',
                number: '8'
            }, {
                id: '8',
                song_name: 'The Story',
                number: '9'
            }, {
                id: '9',
                song_name: 'R-Evolve',
                number: '10'
            }, {
                id: '10',
                song_name: 'A Modern Myth',
                number: '11'
            }, {
                id: '11',
                song_name: 'Battle of One',
                number: '12'
            }, {
                id: '12',
                song_name: 'Hunter',
                number: '13'
            },
            ]
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
    console.log('get albums by artist')
    const res = [
        {
            alb_id: 0,
            art_id: 3,
            name: 'Bad Vibes Forever',
            artist: 'XXXTentacion',
            cover: 'Bad Vibes Forever.jpg',
            genre: 'ROCK',
            averageScore: '9',
            songs: [{
                id: '9',
                song_name: 'R-Evolve',
                number: '10'
            }
            ]
        },
        {
            alb_id: 1,
            art_id: 3,
            name: 'Skins',
            artist: 'XXXTentacion',
            cover: 'Skins.jpg',
            genre: 'ROCK',
            averageScore: '9',
            songs: [{
                id: '0',
                song_name: 'Attack',
                number: '1'
            }
            ]
        },
        {
            alb_id: 2,
            art_id: 3,
            name: '?',
            artist: 'XXXTentacion',
            cover: 'qm.jpg',
            genre: 'ROCK',
            averageScore: '9',
            songs: [{
                id: '0',
                song_name: 'Attack',
                number: '1'
            }
            ]
        },
        {
            alb_id: 3,
            art_id: 3,
            name: '17',
            artist: 'XXXTentacion',
            cover: '17.jpg',
            genre: 'ROCK',
            averageScore: '9',
            songs: [{
                id: '0',
                song_name: 'Attack',
                number: '1'
            }
            ]
        }]
    dispatch({
        type: GET_ALBUMS_BY_ARTIST,
        payload: res
    });
};

export const addAlbum = (album, history) => async dispatch => {
    console.log('add album')
    await axios.post(`http://localhost:8080/music-manage/addAlbum`, album);
    history.push("/albums")
}

export const deleteAlbum = (id, name, history) => async dispatch => {
    console.log('delete album')
    if (
        window.confirm(
            `You are deleting album ${name}, this action cannot be undone`
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