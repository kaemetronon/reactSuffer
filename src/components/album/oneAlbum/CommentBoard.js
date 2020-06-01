import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {deleteComment} from "../../../actions/commentActions";

class CommentBoard extends Component {

    onClick(alb_id, comm_id) {
        this.props.deleteComment(alb_id, comm_id);
    }
    render() {

        const comments = this.props.comments;
        const isAdmin = this.props.isAdmin;
        const alb_id = this.props.alb_id;
        let tempUserName; //достать из сторажда
        let resultBoard;

        const additionalAlgorithm = (isAdmin, userName, tempUserName, commentId) => {
            if (isAdmin || userName === tempUserName) {
                return (
                    <React.Fragment>
                        <Link to={`/album/${alb_id}/comment/${commentId}/edit`}
                           className="btn btn-primary">Edit</Link>
                        <button className="btn btn-secondary"
                                onClick={this.onClick.bind(this, alb_id, commentId)}>
                            Delete
                        </button>
                    </React.Fragment>
                )
            }
        }

        const renderComments = comments => {
            if (comments.length < 1) {
                return (<p className="lead">No comments yet</p>);
            } else {
                const commentElements = comments.map(comment => {
                        const commentAuthor = comment.userName;
                        const comm_id = comment.commId;
                        const additionalBlock = additionalAlgorithm(isAdmin, commentAuthor, tempUserName, comm_id);
                        return (
                            <React.Fragment>
                                <div className="card mb-3 row no-gutters col-md-8 card-body" align="left">
                                    <div style={{overflow:"hidden"}}>
                                        <div style={{float:"left"}}><p className="lead">by {comment.userName}</p></div>
                                        <div style={{float:"right"}}>
                                            <p className="text-muted">{comment.time}
                                                {additionalBlock}
                                            </p>
                                        </div>
                                        <div style={{overflow:"hidden"}}>
                                            <div style={{float: "left"}}><p className="lead"></p>{comment.text}</div>
                                            <div style={{float: "right"}}><h5 className="display-4">{comment.mark}</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </React.Fragment>
                        )
                    }
                )
                return (
                    <React.Fragment>
                        {commentElements}
                    </React.Fragment>
                )
            }
        };
        resultBoard = renderComments(comments);

        return (
            <div align='center'>
                {resultBoard}
            </div>
        )
    }
}


export default connect(null, {deleteComment}) (CommentBoard)