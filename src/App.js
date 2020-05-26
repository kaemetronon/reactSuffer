import React, {Component} from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store'

import Navbar from "./components/Navbar";
import AllAlbumsPage from "./components/AllAlbumsPage";
import AllArtistsPage from "./components/AllArtistsPage";
import UserManagePage from "./components/userManage/UserManagePage";
import MusicManagePage from "./components/MusicManagePage";
import HomePage from "./components/HomePage";
import EditPage from "./components/userManage/EditPage";


class App extends Component{
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div className='App'>
                        <Navbar />

                        <Route exact path="/" component={HomePage} />
                        <Route exact path="/albums" component={AllAlbumsPage} />
                        <Route exact path="/artists" component={AllArtistsPage} />
                        <Route exact path="/user" component={UserManagePage} />
                        <Route exact path="/editPage/:id" component={EditPage} />
                        <Route exact path="/music-manage" component={MusicManagePage} />

                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
