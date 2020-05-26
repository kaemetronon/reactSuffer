import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from "react-router-dom";

class Navbar extends Component {

    render() {
        let adminPanel;
        let forPeopleWhoSuccessfulyLoggedInToOurGorgeousWebSite;
        const name = this.props.user

        const isAdmin = () => {
            //хз пока как проверять на админа
            if (/*some magic */ true/*true типа админ */) {
                return (
                    <React.Fragment>
                        <li className="nav-item">
                            <Link to="/user" className="nav-link">User List</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/music-manage' className="nav-link">Music administration</Link>
                        </li>
                    </React.Fragment>
                )
            } else return ''
        };

        const isLoggedIn = () => {
            if (name === 'guest') {
                return (
                    <React.Fragment>
                        <form action="/login" method="post">
                            <input type="hidden" name="_csrf" value="${_csrf.token}"/>
                            <button className="btn btn-primary" type="submit">Log In</button>
                        </form>
                    </React.Fragment>
                )
            } else {
                return (
                    <React.Fragment>
                        <form action="/logout" method="post">
                            <input type="hidden" name="_csrf" value="${_csrf.token}"/>
                            <button className="btn btn-primary" type="submit">Log Out</button>
                        </form>
                    </React.Fragment>
                )
            }
        };
        adminPanel = isAdmin();
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
                            <li className="nav-item">
                                <Link to='/' className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/albums' className="nav-link">Albums</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/artists' className="nav-link">Artists</Link>
                            </li>

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

const mapStateToProps = state => ({
    user: state.userR.user.name
})

export default connect(mapStateToProps)(Navbar)