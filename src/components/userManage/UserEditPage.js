import React, {Component} from 'react'
import 'react-accessible-accordion/dist/fancy-example.css';
import {getUser, editUser} from '../../actions/userActions'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'


class UserEditPage extends Component {
    constructor() {
        super();
        this.state = {
            id: '',
            username: '',
            email: '',
            firstName: '',
            lastName: '',
            role: ''
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        const {id} = this.props.match.params;
        this.props.getUser(id);
    }

    componentWillReceiveProps(nextProps) {
        const {
            id,
            username,
            email,
            firstName,
            lastName
        } = nextProps.user

        this.setState({
            id,
            username,
            email,
            firstName,
            lastName
        })
    }

    onSubmit(e) {
        e.preventDefault();
        const editedUser = {
            id: this.state.id,
            username: this.state.username,
            email: this.state.email,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            role: this.state.role
        }
        this.props.editUser(editedUser, this.props.history)
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    render() {
        return (
            <div className="card-body">
                <div className="form-group mt-3">
                    <form onSubmit={this.onSubmit}>
                        <input type="text" name="username" value={this.state.username} onChange={this.onChange}
                               placeholder='new username'/>
                        <input type="email" name="email" value={this.state.email} onChange={this.onChange}
                               placeholder='new email'/>
                        <input type="text" name="firstName" value={this.state.firstName} onChange={this.onChange}
                               placeholder='new first name'/>
                        <input type="text" name="lastName" value={this.state.lastName} onChange={this.onChange}
                               placeholder='new last name'/>
                        <div className='form-group'>
                            <select className='form-control form-control-lg'
                                    name='role' value={this.state.role} onChange={this.onChange}
                                    placeholder='new role'>
                                <option value='USER'>USER</option>
                                <option value='ADMIN'>ADMIN</option>
                            </select>
                        </div>
                        <button type="submit">Save</button>
                    </form>
                </div>
            </div>
        );
    }
}

UserEditPage.propTypes = {
    getUser: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
    user: state.userR.user
})
export default connect(mapStateToProps, {getUser, editUser})(UserEditPage)
