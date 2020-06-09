import React, {Component} from 'react'
import {addUser} from "../actions/userActions";

class Register extends Component {
    constructor() {
        super();
        this.state ={
            login: '',
            password: '',
            email: '',
            fName: '',
            lName: ''
        }
        this.onButtonSubmit = this.onButtonSubmit.bind(this);
        this.onChange = this.onChange.bind(this);

    }
    onChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }
    onButtonSubmit(e) {
        e.preventDefault();
        const user = {
            login: this.state.login,
            password: this.state.password,
            email: this.state.email,
            fName: this.state.fName,
            lName: this.state.lName
        }
        addUser(user, this.props.history);
    }

    render() {
        return (
            <form onSubmit={this.onButtonSubmit}>
                <h3>Registration page</h3> <br/>
                <div className="form-group row" >
                    <label className="col-sm-2 col-form-label">Login:</label>
                    <div className="col-sm-6">
                        <input type="text" name="login"
                               value={this.state.login}
                               onChange={this.onChange}
                               className="form-control" placeholder="Your login"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Password:</label>
                    <div className="col-sm-6">
                        <input type="password" name="password"
                               value={this.state.password}
                               onChange={this.onChange}
                               className="form-control" placeholder="Password"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Your email:</label>
                    <div className="col-sm-6">
                        <input type="email" name="email"
                               value={this.state.email}
                               onChange={this.onChange}
                               className="form-control" placeholder="example@domain.com"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">First name:</label>
                    <div className="col-sm-6">
                        <input type="text" name="fName"
                               value={this.state.fName}
                               onChange={this.onChange}
                               className="form-control" placeholder="First name"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Last name:</label>
                    <div className="col-sm-6">
                        <input type="text" name="lName"
                               value={this.state.lName}
                               onChange={this.onChange}
                               className="form-control" placeholder="Last name"/>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">
                    Create
                </button>
            </form>
        )
    }
}

export default Register;