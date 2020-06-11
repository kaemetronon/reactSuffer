import React, {Component} from 'react'
import {connect} from "react-redux";
import MainArtistInfo from "./MainArtistInfo";
import MiniAlbumPage from "../../album/MiniAlbumPage";
import {getArtist} from '../../../actions/artistActions'
import {getAlbumsByArtist} from "../../../actions/albumActions";
import PropTypes from 'prop-types'


class ArtistView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            artist: {},
            albums: []
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            artist: nextProps.artist,
            albums: nextProps.albums
        })
    }

    componentDidMount() {
        const {art_id} = this.props.match.params;
        this.props.getArtist(art_id);
        this.props.getAlbumsByArtist(art_id)
    }

    render() {
        const {isAdmin} = this.props
        let totalRes;
        let resultArray=[];

        const renderAlgorithm = albums => {
            if (albums.length < 1) {
                return (<p className="lead">No albums yet</p>);
            } else {
                const oneAlbum = albums.map(album => (
                    <MiniAlbumPage key={album.alb_id} album={album} fromAllAlbumsPage={false}/>
                ));
                for (let i = 0; i < oneAlbum.length; i++) {
                    resultArray.push(oneAlbum[i])
                }
                return (
                    <React.Fragment>{resultArray}</React.Fragment>
                );
            }
        };
        totalRes = renderAlgorithm(this.state.albums);


        return (
            <div>
                <MainArtistInfo artist={this.state.artist} adminFlag ={isAdmin}/>
                <div className="card-columns">
                    {totalRes}
                </div>
            </div>
        )
    }
}

ArtistView.propTypes = {
    getArtist: PropTypes.func.isRequired,
    getAlbumsByArtist: PropTypes.func.isRequired,
    artist: PropTypes.object.isRequired,
    albums: PropTypes.array.isRequired
}
const mapStateToProps = state => ({
    artist: state.artistR.artist,
    albums: state.albumR.albumsByArtist
})

export default connect(mapStateToProps, {getArtist, getAlbumsByArtist})(ArtistView)