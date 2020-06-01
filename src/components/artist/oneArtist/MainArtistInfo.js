import React, {Component} from 'react'
import {Link} from "react-router-dom";


class MainArtistInfo extends Component {
    render() {
        const artist = this.props.artist;

        const isAdmin = () => {
            if (true) {
                return (
                    <React.Fragment>
                        <Link to={`/artist/${artist.id}/edit`} className="btn btn-primary">Edit</Link>
                        <Link to="/artist/${artist.id}/delete" className="btn btn-secondary">Delete</Link>
                    </React.Fragment>
                )
            }
        }
        const adminOptions = isAdmin();

        return (
            <div class="card mb-3">
                <div class="row no-gutters">
                    <div class="col-md-4">
                        <img src={`/img/${artist.imagePath}`} class="card-img-top"/>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="display-4">${artist.name}</h5>
                            <h5 class="lead">Years of activity: ${artist.year}</h5>
                            <p class="lead">${artist.description}</p>

                    </div>
                </div>
            </div>
    </div>
    )
    }
}

export default MainArtistInfo