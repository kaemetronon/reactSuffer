import React, {Component} from 'react'


class SongBoard extends Component {

    render() {
        const songs = this.props.songs;
        let resultBoard;

        const songsRender = songs => {
            if (songs.length < 1) {
                return (<p className="lead">No songs yet</p>)
            } else {
                const songsObjects = songs.map(song =>
                    <li className="list-group-item">{++song.number}. {song.song_name}</li>
                )
                return (
                    <React.Fragment>
                        {songsObjects}
                    </React.Fragment>
                )
            }
        }
        resultBoard = songsRender(songs);
        return (
            <div>{resultBoard}</div>
        )
    }
}

export default SongBoard