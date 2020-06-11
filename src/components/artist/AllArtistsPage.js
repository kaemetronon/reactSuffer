import React, {Component} from 'react'
import PropTypes from "prop-types";
import {connect} from 'react-redux'
import {getAllArtists} from '../../actions/artistActions'
import MiniArtistPage from "./MiniArtistPage";


class AllArtistsPage extends Component {
    componentDidMount() {
        this.props.getAllArtists();
    }

    render() {
        const artists = this.props.artists;
        let resultArray = [];
        let totalRes;
        const {isAdmin} = this.props

        const renderAlgorithm = artists => {
            if (artists.length < 1) {
                return (<p className="lead">No artists yet</p>);
            } else {
                const oneAlbum = artists.map(artist => (
                    <MiniArtistPage key={artist.id} artist={artist} isAdmin={isAdmin}/>
                ));
                for (let i = 0; i < oneAlbum.length; i++) {
                    resultArray.push(oneAlbum[i])
                }
                return (
                    <React.Fragment>{resultArray}</React.Fragment>
                );
            }
        };
        totalRes = renderAlgorithm(artists);

        return (
            <div className="card-columns">
                                    {totalRes}
            </div>
        )
    }
}

AllArtistsPage.propTypes = {
    getAllArtists: PropTypes.func.isRequired,
    artists: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    artists: state.artistR.artists
})


export default connect(mapStateToProps, {getAllArtists})(AllArtistsPage)