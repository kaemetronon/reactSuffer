import React, {Component} from 'react'
import {Link} from "react-router-dom";


class MiniArtistPage extends Component {

    render() {
        const artist = this.props.artist;

        const isAdmin = () => {
            if (/*some magic */ true/*true типа админ */) {
                return (
                    <Link to={`/artist/${artist.id}/edit`} className="btn btn-secondary">Edit</Link>
                )
            }
        }
        let adminBlock = isAdmin();

        return (
            <div class="card my-3">
                <img src={`/img/{artist.imagePath}`} class="card-img-top rounded"/>

                <div class="m-2">
                    <span class="lead">{artist.name}</span>
                </div>
                <div class="card-footer text-muted m-1">
                    <p>{artist.year}</p>
                </div>
                <div class="card-footer text-muted text-right">
                    <Link to={`/artist/${artist.id}`} class="btn btn-primary">Info</Link>
                    {adminBlock}
                </div>
            </div>
        )
    }
}


export default MiniArtistPage