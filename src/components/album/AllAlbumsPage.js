import React, {Component} from 'react'
import MiniAlbumPage from "./MiniAlbumPage";
import PropTypes from "prop-types";
import {connect} from 'react-redux'
import {getAllAlbums} from '../../actions/albumActions'


class AllAlbumsPage extends Component {
    componentDidMount() {
        this.props.getAllAlbums();
    }

    render() {
        const albums = this.props.albums;
        let resultArray = [];
        let totalRes;

        const renderAlgorithm = albums => {
            if (albums.length < 1) {
                return (<p className="lead">No albums yet</p>);
            } else {
                const oneAlbum = albums.map(album => (
                    <MiniAlbumPage key={album.alb_id} album={album}/>
                ));
                for (let i = 0; i < oneAlbum.length; i++) {
                    resultArray.push(oneAlbum[i])
                }
                return (
                    <React.Fragment>{resultArray}</React.Fragment>
                );
            }
        };
        totalRes = renderAlgorithm(albums);

        return (
            <div className="card-columns">
                    {totalRes}
            </div>
        )
    }
}

AllAlbumsPage.propTypes = {
    getAllAlbums: PropTypes.func.isRequired,
    albums: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    albums: state.albumR.albums
})


export default connect(mapStateToProps, {getAllAlbums})(AllAlbumsPage)