import React, {Component} from 'react'
import ReactAudioPlayer from 'react-audio-player';


class SongBoard extends Component {

    render() {
        const songs = this.props.songs;
        let resultBoard;

        const songsRender = songs => {
            if (songs.length < 1) {
                return (<p className="lead">No songs yet</p>)
            } else {
                const songsObjects = songs.map(song =>
                    <React.Fragment>
                        <li className="list-group-item">
                            <li className="list-group">
                                {song.number}. {song.song_name}
                            </li>
                            <ReactAudioPlayer
                                src={`/audio/${song.songPath}`}
                                controls
                                volume
                            />
                        </li>
                    </React.Fragment>
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