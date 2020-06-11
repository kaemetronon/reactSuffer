import React, {Component} from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store'

import Navbar from "./components/Navbar";
import AllAlbumsPage from "./components/album/AllAlbumsPage";
import AllArtistsPage from "./components/artist/AllArtistsPage";
import UserManagePage from "./components/userManage/UserManagePage";
import MusicManagePage from "./components/MusicManagePage";
import HomePage from "./components/HomePage";
import UserEditPage from "./components/userManage/UserEditPage";
 import ArtistView from "./components/artist/oneArtist/ArtistView"
import AlbumView from "./components/album/oneAlbum/AlbumView"
import ManageAlbum from "./components/album/EditAlbum";
import CommentEdit from "./components/album/CommentEdit";
import EditArtist from './components/artist/EditArtist'
import Register from "./components/Register";
import SignIn from "./components/SignIn";


class App extends Component{
    render() {
        const isAdmin = true;
        const isAuthorised = true;
        return (
            <Provider store={store}>
                <Router>
                    <div className='App'>
                        <Navbar isAdmin={isAdmin} isAuthorised={isAuthorised}/>

                        <Route exact path="/registration" component={Register} />
                        <Route exact path="/sign-in" component={SignIn} />

                        <Route exact path="/" component={HomePage} />

                        <Route exact path="/albums"
                               render={props => <AllAlbumsPage isAdmin={isAdmin}/>}
                        />
                        <Route exact path="/album/:alb_id"
                               render={props => <AlbumView isAdmin={isAdmin}/>}
                        />
                        <Route exact path="/album/:alb_id/comment/:comment_id/edit"
                               render={props => <CommentEdit isAdmin={isAdmin}/>}
                        />

                        <Route exact path="/artists"
                               render={props => <AllArtistsPage isAdmin={isAdmin}/>}
                        />
                        <Route exact path="/artist/:art_id"
                               render={props => <ArtistView isAdmin={isAdmin}/>}
                        />
                        <Route exact path="/artist/:art_id/edit" component={EditArtist} />

                        <Route exact path="/user" component={UserManagePage} />
                        <Route exact path="/editPage/:id" component={UserEditPage} />

                        <Route exact path="/music-manage" component={MusicManagePage} />
                        <Route exact path="/music-manage/album/:alb_id" component={ManageAlbum} />

                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
