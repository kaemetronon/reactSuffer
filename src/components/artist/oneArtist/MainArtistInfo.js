import React, {Component} from 'react'
import {Link} from "react-router-dom";
import {deleteArtist} from "../../../actions/artistActions";
import {connect} from "react-redux";
import PropTypes from 'prop-types'


class MainArtistInfo extends Component {

    onDel(artId, name) {
        this.props.deleteArtist(artId, name, this.props.history);
    }

    render() {
        const artist = this.props.artist;
        const adminFlag = this.props.adminFlag;

        const isAdmin = (adminFlag) => {
            if (adminFlag) {
                return (
                    <React.Fragment>
                        <Link to={`/artist/{artist.id}/edit`} className="btn btn-primary">Edit</Link>
                        <button
                            onClick={this.onDel.bind(this, artist.id, artist.name)}
                            className="btn btn-secondary">
                            Delete
                        </button>
                    </React.Fragment>
                )
            }
        }
        const adminOptions = isAdmin(adminFlag);

        return (
            <div class="card mb-3">
                <div class="row no-gutters">
                    <div class="col-md-4">
                        <img src={`/img/{artist.imagePath}`} class="card-img-top"/>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="display-4">{artist.name}</h5>
                            <h5 class="lead">Years of activity: {artist.year}</h5>
                            <p class="lead">{artist.description}</p>
                            {adminOptions}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
MainArtistInfo.propTypes ={
    deleteArtist:PropTypes.func.isRequired
}

export default connect(null, {deleteArtist}) (MainArtistInfo)