import React, {Component} from 'react'
import {Link} from "react-router-dom";


class MiniArtistPage extends Component {

    render() {
        const {artist} = this.props
        const {isAdmin} = this.props

        const adminFunc = (isAdmin => {
            if (isAdmin) {
                return (
                    <Link to={`/artist/${artist.id}/edit`} className="btn btn-secondary">Edit</Link>
                )
            }
        })
        const adminBlock = adminFunc(isAdmin);

        return (
            <div class="card my-3">
                <img src={`/image/artists/${artist.artImg}`} class="card-img-top rounded" style={{maxWidth:'200px',maxHeigth:'200px'}}/>

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