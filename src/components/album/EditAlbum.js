import React, {Component} from 'react'
import {addAlbum, getAlbum} from "../../actions/albumActions";
import PropTypes from 'prop-types'
import {connect} from "react-redux";
import {deleteSong} from "../../actions/songActions";

class EditAlbum extends Component {
    constructor(props) {
        super(props);
        this.state = {
            alb_id: '',
            file: '',
            alb_name: '',
            art_name: '',
            songs: '',
            song_name: '',
            genre: ''
        }
        this.onChange = this.onChange.bind(this);
        this.onSave = this.onSave.bind(this);
        this.onAdd = this.onAdd.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        const {
            alb_id,
            alb_name,
            art_name,
            genre,
            songs
        } = nextProps.album
        this.setState({
            alb_id,
            alb_name,
            art_name,
            genre,
            songs
        })
    }

    componentDidMount() {
        const {alb_id} = this.props.match.params;
        this.props.getAlbum(alb_id);
    }

    onSave(e) {
        e.preventDefault();
        const newAlbum = {
            albName: this.state.alb_name,
            artistName: this.state.art_name,
            genre: this.state.genre,
            file: this.state.file,
        }
        addAlbum(newAlbum, this.props.history)
    }

    onAdd(e) {
        e.preventDefault();
        const newSong = {
            song_name: this.state.song_name
        }
        const {alb_id} = this.props.match.params;
        this.props.addSong(alb_id, newSong);
    }

    onDel(song_id) {
        const {alb_id} = this.props.match.params;
        this.props.deleteSong(alb_id, song_id);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    render() {
        let songBoard;
        const songs = this.state.songs;

        const renderSongs = songs => {
            if (songs.length < 1) {
                return <p className="lead">No songs yet</p>
            } else {
                const songObject = songs.map(song =>
                    <li className="list-group-item">{song.number}. {song.song_name}
                    <button className="btn btn-secondary btn-sm"
                            onClick={this.onDel.bind(this, song.id)}>Delete</button>
                    </li>
                )
                return (<React.Fragment>{songObject}</React.Fragment>)
            }
        }
        songBoard = renderSongs(songs);

        return (
            <div>
                <div>
                    <h1 className="display-4">Music editor</h1>
                    <img src={`/img/${this.state.file}`} className="img-thumbnail mr-4"/>
                    <ul class="list-group">
                        {songBoard}
                    </ul>
                    <div className="form-group col-md-6">
                        <form className="form-group" onSubmit={this.onSave}
                              encType="multipart/form-data">
                            <input type="text" className="form-control" placeholder="Artist name"
                                   name="art_name"
                                   value={this.state.art_name}
                                   onChange={this.onChange} />
                            <input type="text" className="form-control" placeholder="Album name"
                                   name="alb_name"
                                   value={this.state.alb_name}
                                   onChange={this.onChange} />
                            <select className='form-control form-control-lg'
                                    name='genre'
                                    value={this.state.genre}
                                    onChange={this.onChange}>
                                <option value='ROCK'>ROCK</option>
                                <option value='HIP-HOP'>HIP-HOP</option>
                                <option value='POP'>POP</option>
                                <option value='JAZZ'>JAZZ</option>
                                <option value='BLUES'>BLUES</option>
                                <option value='ELECTRONIC'>ELECTRONIC</option>
                                <option value='LATIN'>LATIN</option>
                                <option value='OTHER'>OTHER</option>
                            </select>
                            <div className="custom-file">
                                <input type="file"
                                       name="albCover"
                                       value={this.state.file}
                                       onChange={this.onChange}/>
                                <label className="custom-file-label">New image</label>
                            </div>
                            <input type="hidden" name="_csrf" value="${_csrf.token}"/>
                            <button type="submit" className="btn btn-primary ml-3">Save</button>
                        </form>
                    </div>
                </div>

                <a className="btn btn-primary m-3" data-toggle="collapse" href="#collapseExample" role="button"
                   aria-expanded="false" aria-controls="collapseExample">
                    Add song
                </a>
                <div className="collapse" id="collapseExample">
                    <div className="form-group mt-3">
                        <form onSubmit={this.onAdd}
                              encType="multipart/form-data">
                            <div className="form-group">
                                <input type="text" name="songName" className="form-control" placeholder="Song name:"/>
                            </div>
                            <input type="hidden" name="_csrf" value="${_csrf.token}"/>
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary">Add</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
EditAlbum.propTypes = {
    getAlbum: PropTypes.func.isRequired,
    deleteSong: PropTypes.func.isRequired,
    addSong: PropTypes.func.isRequired,
    album: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    album: state.albumR.album
})

export default connect(mapStateToProps, {getAlbum, deleteSong})(EditAlbum)