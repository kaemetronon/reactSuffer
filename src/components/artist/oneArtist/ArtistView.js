import React, {Component} from 'react'
import {Link} from "react-router-dom";
import {getAlbum, deleteAlbum} from "../../../actions/albumActions";
import {getAllComments} from "../../../actions/commentActions";
import PropTypes from 'prop-types'
import {connect} from "react-redux";
import SongBoard from './SongBoard'
import CommentBoard from './CommentBoard'


class ArtistView extends Component {
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
            <div></div>
        )
    }
}

ArtistView.propTypes = {
    getAlbum: PropTypes.func.isRequired,
    album: PropTypes.object.isRequired,
    comments: PropTypes.array.isRequired,
    deleteAlbum: PropTypes.func.isRequired,
}
const mapStateToProps = state => ({
    album: state.albumR.album,
    comments: state.commentR.comments
})

export default connect(mapStateToProps, {getAlbum, getAllComments, deleteAlbum})(ArtistView)