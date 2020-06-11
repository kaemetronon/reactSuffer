import React, {Component} from 'react'
import {addComment} from "../../../actions/commentActions";
import {connect} from 'react-redux'

class AddComment extends Component {
    constructor() {
        super();
        this.state = {
            text: '',
            mark: ''
        }
        this.onClick = this.onClick.bind(this);
    }
    onClick(e) {
        e.preventDefault();
        const {alb_id} = this.props;
        const newComment = {
            text: this.state.text,
            mark: this.state.mark
        }
        this.props.addComment(alb_id, newComment, this.props.history)
    }
    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            <div align='center'>
                <div style={{marginTop: '20px'}}>Add comment below:</div>
                <div className="form-group mt-3">
                    <form onSubmit={this.onClick} >
                        <div className="form-group">
                            <input type="text" name="text"
                                   value={this.state.text}
                                   onChange={this.onChange}
                                   className="form-control" placeholder="Enter message:"/>
                        </div>
                        <div className="form-group">
                            <input type="text" name="mark"
                                   value={this.state.mark}
                                   onChange={this.onChange}
                                   className="form-control" placeholder="Put your mark (1-10):"/>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary">Comment</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default connect(null, {addComment}) (AddComment)