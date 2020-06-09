import React, {Component} from 'react'
import {Link} from "react-router-dom";
import {getAlbum, deleteAlbum} from "../../../actions/albumActions";
import {getAllComments} from "../../../actions/commentActions";
import PropTypes from 'prop-types'
import {connect} from "react-redux";
import SongBoard from './SongBoard'
import CommentBoard from './CommentBoard'
import {addComment} from "../../../actions/commentActions";
// import cover from '../../../../public/image/a beautiful lie.jpg'

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
            comments: '',
            text: '',
            mark: ''
        }
        this.onDelClick = this.onDelClick.bind(this);
        this.onAddCommClick = this.onAddCommClick.bind(this);
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
    onDelClick() {
        this.props.deleteAlbum(this.state.alb_id, this.state.name, this.props.history);
    }
    onAddCommClick(e) {
        e.preventDefault();
        const newComment = {
            text: this.state.text,
            mark: this.state.mark
        }
        this.props.addComment(this.state.alb_id, newComment, this.props.history)
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    render() {
        const album = this.props.album;

        const isAdmin = () => {
            if (true) {
                return (
                    <React.Fragment >
                        <Link to={`/music-manage/album/${this.state.alb_id}`} style={{marginTop:'10px'}} className="btn btn-primary" >
                            Edit
                        </Link>
                        <button style={{marginTop:'10px'}} className="btn btn-secondary"
                                onClick={this.onDelClick}>
                            Delete
                        </button>
                    </React.Fragment>
                )
            }
        }
        const adminOptions = isAdmin();

        return(
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <img src={`/image/covers/${album.file}`} className="card-img" alt={album.file}/>
                        <h5 className="display-4">{this.state.name}</h5>
                        <p className="lead">by {this.state.artist}</p>
                        <p className="lead">Genre: {this.state.genre}</p>
                        <h5 className="display-4">{this.state.averageScore}</h5>
                    </div>
                    <div className="col-lg-3">
                        <div className="card-body">
                            <ul className="list-group">
                                <SongBoard songs={this.state.songs} isAdmin={true}/>
                            </ul>
                            {adminOptions}
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <CommentBoard comments={this.state.comments} isAdmin={true} alb_id={album.alb_id}/>
                        <div style={{marginTop:'20px'}}>Add comment below: </div>
                        <div className="form-group mt-3">
                            <form onSubmit={this.onAddCommClick} encType="multipart/form-data">
                                <div className="form-group">
                                    <input type="text" name="text"
                                           // value={this.state.text}

                                           value="My new comment"
                                           onChange={this.onChange}
                                           className="form-control" placeholder="Enter message:"/>
                                </div>
                                <div className="form-group">
                                    <input type="text" name="mark"
                                           // value={this.state.mark}
                                        value="My new mark"
                                           onChange={this.onChange}
                                           className="form-control" placeholder="Put your mark (1-10):"/>
                                </div>
                                <input type="hidden" name="_csrf" value="${_csrf.token}"/>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary">Comment</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

AlbumView.propTypes = {
    getAlbum: PropTypes.func.isRequired,
    album: PropTypes.object.isRequired,
    comments: PropTypes.array.isRequired,
    deleteAlbum: PropTypes.func.isRequired,
    addComment: PropTypes.func.isRequired
}
const mapStateToProps = state => ({
    album: state.albumR.album,
    comments: state.commentR.comments
})

export default connect(mapStateToProps,
    {getAlbum, getAllComments, deleteAlbum})(AlbumView)