import React, {Component} from 'react'
import {logIn} from '../actions/userActions'
import {Link} from "react-router-dom";
import {connect} from 'react-redux'


class SignIn extends Component {
    constructor() {
        super();
        this.state = {
            login: '',
            password: '',
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);

    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit(e) {
        e.preventDefault();
        const user = {
            login: this.state.login,
            password: this.state.password,
        }
        this.props.logIn(user, this.props.history);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label">Login:</label>
                        <div class="col-sm-6">
                            <input type="text" name="login"
                                   value={this.state.login}
                                   onChange={this.onChange}
                                   class="form-control" placeholder="Your login"/>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label">Password:</label>
                        <div class="col-sm-6">
                            <input type="password" name="password"
                                   value={this.state.password}
                                   onChange={this.onChange}
                                   class="form-control" placeholder="Password"/>
                        </div>
                    </div>
                    <input type="hidden" name="_csrf" value="${_csrf.token}"/>
                    <Link to={"/registration"}>Sign Up</Link>
                    <button type="submit" class="btn btn-primary">
                        Sign In
                    </button>
                </form>
            </div>
        )
    }
}
export default connect(null, {logIn})(SignIn);