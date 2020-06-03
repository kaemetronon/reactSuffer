import React, {Component} from 'react'


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
            email: this.state.email,
            fName: this.state.fName,
            lName: this.state.lName
        }
        this.props.addUser(user, this.props.history);
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                Add new user <br></br>
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
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Your email:</label>
                    <div class="col-sm-6">
                        <input type="email" name="email"
                               value={this.state.email}
                               onChange={this.onChange}
                               class="form-control" placeholder="example@domain.com"/>
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">First name:</label>
                    <div class="col-sm-6">
                        <input type="text" name="fName"
                               value={this.state.fName}
                               onChange={this.onChange}
                               class="form-control" placeholder="First name"/>
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">Last name:</label>
                    <div class="col-sm-6">
                        <input type="text" name="lName"
                               value={this.state.lName}
                               onChange={this.onChange}
                               class="form-control" placeholder="Last name"/>
                    </div>
                </div>
                <input type="hidden" name="_csrf" value="${_csrf.token}"/>
                <button type="submit" class="btn btn-primary">
                    Create
                </button>
            </form>
        )
    }
}

export default Register;