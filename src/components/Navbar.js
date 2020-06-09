import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from "react-router-dom";
import {logOut} from '../actions/userActions'
import PropTypes from 'prop-types'


class Navbar extends Component {

    onClick() {
        this.props.logOut();
    }

    render() {
        let adminPanel;
        let forPeopleWhoSuccessfulyLoggedInToOurGorgeousWebSite;
        const name = this.props.user
        const isAdmin = true; // plug


        const adminRenderFunc = (isAdmin) => {
            if (isAdmin) {
                return (
                    <React.Fragment>
                        <li className="nav-item">
                            <Link to='/' className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/albums' className="nav-link">Albums</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/artists' className="nav-link">Artists</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/user" className="nav-link">User List</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/music-manage' className="nav-link">Music administration</Link>
                        </li>
                    </React.Fragment>
                )
            }
        };

        const isLoggedIn = () => {
            if (name === 'guest') {
                return (
                    <React.Fragment>
                        <Link to={"/sign-in"}>
                            <input type="hidden" name="_csrf" value="${_csrf.token}"/>
                            <button className="btn btn-primary" type="submit">Log In</button>
                        </Link>
                    </React.Fragment>
                )
            } else {
                return (
                    <React.Fragment>
                        <Link to={"/sign-in"} onClick={this.onClick.bind(this)} method="post">
                            <input type="hidden" name="_csrf" value="${_csrf.token}"/>
                            <button className="btn btn-primary" type="submit">Log Out</button>
                        </Link>
                    </React.Fragment>
                )
            }
        };
        adminPanel = adminRenderFunc(isAdmin);
        forPeopleWhoSuccessfulyLoggedInToOurGorgeousWebSite = isLoggedIn();
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link to='/' className="navbar-brand">MusicStreaming</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            {adminPanel}
                        </ul>

                        <div className="navbar-text mx-3">{this.props.user}</div>

                        {forPeopleWhoSuccessfulyLoggedInToOurGorgeousWebSite}
                    </div>
                </div>
            </nav>
        );
    }
}
Navbar.propTypes = {
    logOut: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    user: state.userR.user.name
})

export default connect(mapStateToProps, null)(Navbar)