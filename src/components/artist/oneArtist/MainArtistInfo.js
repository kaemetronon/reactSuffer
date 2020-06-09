import React, {Component} from 'react'
import {Link} from "react-router-dom";
import {deleteArtist} from "../../../actions/artistActions";
import {connect} from "react-redux";
import PropTypes from 'prop-types'
// import mars from '../../../../public/image/mars.jpg'

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
            <div className="card mb-3">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={`/image/artists/xxxtentacion.jpg`} className="card-img-top"
                             style={{maxWidth:'300px', maxHeight:'400px',
                                 marginBottom:'15px', marginTop:'15px'}}/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="display-4">{artist.name}</h5>
                            <h5 className="lead">Years of activity: {artist.year}</h5>
                            <p className="lead">{artist.description}</p>
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