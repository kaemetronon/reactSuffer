import React, {Component} from 'react'
import MusicManagePage from "./MusicManagePage";
class AllAlbumsPage extends Component {

    render() {
        const album = {
            name: 'n1',
            artist: 'a1'
        };


        return (
            <div class="card-columns">
                <div class="card my-3">
                    <img src='' class="card-img-top rounded"/>
                    <div class="m-2">
                        <span>{album.name}</span>
                    </div>

                    <div class="card-footer text-muted">
                        <a href="/artist/${album.artist.id}">{album.artist}</a>
                    </div>
                    <div class="card-footer text-muted text-right">
                        <a href="/album/${album.id}" class="btn btn-primary">Comment</a>
                        <a href="/music-manage/album/${album.id}" class="btn btn-secondary">Edit</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default AllAlbumsPage