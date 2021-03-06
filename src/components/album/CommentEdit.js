import React, {Component} from 'react'
import {commentEdit} from '../../actions/commentActions'
import {connect} from 'react-redux'


class CommentEdit extends Component {

    constructor() {
        super();
        this.state = {
            text: '',
            mark: ''
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this)
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit(e) {
        e.preventDefault();
        const {alb_id, comment_id} = this.props.match.params;
        const editedComment = {
            text: this.state.text,
            mark: this.state.mark
        }
        this.props.commentEdit(alb_id, comment_id, editedComment, this.props.history)
    }

    render() {

        return (
            <div className="form-row">
                <div className="form-group col-md-6">
                    <form onSubmit={this.onSubmit} className="form-group" >
                        <input type="text" className="form-control"
                               name="text"
                               value={this.state.text}
                               onChange={this.onChange}
                               placeholder="Text"/>
                        <input type="text" className="form-control"
                               name="mark"
                               value={this.state.mark}
                               onChange={this.onChange}
                               placeholder="Your mark (1-10)"/>
                        <button type="submit" className="btn btn-primary ml-3">Save</button>
                    </form>
                </div>
            </div>
        )
    }
}


export default connect(null, {commentEdit})(CommentEdit)