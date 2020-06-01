import React, {Component} from 'react'
import {Link} from "react-router-dom";
import {getAlbum, deleteAlbum} from "../../../actions/albumActions";
import {getAllComments} from "../../../actions/commentActions";
import PropTypes from 'prop-types'
import {connect} from "react-redux";
import SongBoard from './SongBoard'
import CommentBoard from './CommentBoard'


class AlbumView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            alb_id: '',
            file: '',
            name: '',
            artist: '',
            genre: '',
            averageScore: '',
            songs: '',
            comments: ''
        }
    }

    componentWillReceiveProps(nextProps) {
        const {
            alb_id,
            file,
            name,
            artist,
            genre,
            averageScore,
            songs
        } = nextProps.album
        const comments = nextProps.comments;
        this.setState({
            alb_id,
            file,
            name,
            artist,
            genre,
            averageScore,
            songs,
            comments
        })
    }

    componentDidMount() {
        const {alb_id} = this.props.match.params;
        this.props.getAlbum(alb_id);
        this.props.getAllComments(alb_id);
    }

    onClick(alb_id){
        this.props.deleteAlbum(alb_id, this.props.history);
    }

    render() {
        const album = this.props.album;

        const isAdmin = () => {
            if (true) {
                return (
                    <React.Fragment>
                        <Link to={`/music-manage/album/${this.state.alb_id}`} className="btn btn-primary">
                            Edit
                        </Link>
                        <button className="btn btn-secondary"
                                onClick={this.onClick.bind(this, this.state.alb_id)}>
                            Delete
                        </button>
                    </React.Fragment>
                )
            }
        }
        const adminOptions = isAdmin();

        return (
            <div className="card mb-3">
                <div className="row no-gutters">
                    <div className="col-md-4">

                        <img src={this.state.file} className="card-img" alt="..."/>

                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="display-4">{this.state.name}</h5>
                                <p className="lead">by {this.state.artist}</p>
                                <p className="lead">Genre: {this.state.genre}</p>
                                <h5 className="display-4">{this.state.averageScore}</h5>

                                <ul className="list-group">
                                    <SongBoard songs={this.state.songs} isAdmin={true}/>
                                </ul>
                                {adminOptions}
                            </div>
                        </div>
                    </div>
                </div>
                <CommentBoard comments={this.state.comments} isAdmin={true} alb_id={album.alb_id}/>
            </div>
        )
    }
}

AlbumView.propTypes = {
    getAlbum: PropTypes.func.isRequired,
    album: PropTypes.object.isRequired,
    comments: PropTypes.array.isRequired,
    deleteAlbum: PropTypes.func.isRequired,
}
const mapStateToProps = state => ({
    album: state.albumR.album,
    comments: state.commentR.comments
})

export default connect(mapStateToProps, {getAlbum, getAllComments, deleteAlbum})(AlbumView)