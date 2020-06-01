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
// import ArtistPage from "./components/artist/ArtistPage"
import AlbumView from "./components/album/oneAlbum/AlbumView"
import ManageAlbum from "./components/album/EditAlbum";
import CommentEdit from "./components/album/CommentEdit";
import EditArtist from './components/artist/EditArtist'


class App extends Component{
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div className='App'>
                        <Navbar />

                        <Route exact path="/" component={HomePage} />

                        <Route exact path="/albums" component={AllAlbumsPage} />
                        <Route exact path="/album/:alb_id" component={AlbumView} />
                        <Route exact path="/album/:alb_id/comment/:comment_id/edit" component={CommentEdit} />

                        <Route exact path="/artists" component={AllArtistsPage} />
                        {/*<Route exact path="/artist/:art_id" component={ArtistPage} />*/}
                        <Route exact path="/artist/:art_id}/edit" component={EditArtist} />

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
