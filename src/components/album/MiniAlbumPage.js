import React, {Component} from 'react'
import {Link} from "react-router-dom";


class MiniAlbumPage extends Component {

    render() {
        const album = this.props.album;

        const isAdmin = () => {
            if (/*some magic */ true/*true типа админ */) {
                return(
                    <Link to={`/music-manage/album/${album.alb_id}`} alb_id={album.alb_id}
                          className="btn btn-secondary">Edit</Link>
                )
            }
        }
        let adminBlock = isAdmin();

        return (
            <div>
                <img src={album.path} className="card-img-top rounded"/>
                <div className="m-2">
                    <span>{album.name}</span>
                </div>
                <div className="card-footer text-muted">
                    <Link to={`artist/${album.art_id}`} art_id={album.art_id}>
                        {album.artist}
                    </Link>
                </div>
                <div className="card-footer text-muted text-right">
                    <Link to={`album/${album.alb_id}`} alb_id={album.alb_id} className="btn btn-primary">
                        Comment
                    </Link>
                    {adminBlock}
                </div>
            </div>
        )
    }
}


export default MiniAlbumPage