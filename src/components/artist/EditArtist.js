import React, {Component} from 'react'
import {getArtist, addArtist} from "../../actions/artistActions";
import PropTypes from 'prop-types'
import {connect} from "react-redux";

class EditArtist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            year: '',
            description: '',
            artImg: ''
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        const {
            name,
            year,
            description,
            artImg
        } = nextProps.artist
        this.setState({
            name,
            year,
            description,
            artImg
        })
    }

    componentDidMount() {
        const {art_id} = this.props.match.params;
        this.props.getArtist(art_id);
    }

    onSubmit(e) {
        e.preventDefault();
        const newAlbum = {
            name: this.state.name,
            years: this.state.years,
            description: this.state.description,
            artImg: this.state.artImg,
        }
        this.props.addArtist(newAlbum, this.props.history)
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    render() {
        return (
            <div>
                <h1 className="display-4">Artist editor</h1>
                <div className="form-row">
                    <img src={`/image/artists/${this.state.artImg}`} alt={this.state.artImg} className="img-thumbnail"
                         style={{maxWidth: '400px', maxHeigth: '400px'}}/>

                    <div className="form-group col-md-6">
                        <form className="form-group" onSubmit={this.onSubmit} encType="multipart/form-data">
                            <input type="text" className="form-control" name="name"
                                   value={this.state.name}
                                   onChange={this.onChange}
                                   placeholder="Artist name"/>
                            <input type="text" className="form-control" name="year"
                                   value={this.state.year}
                                   onChange={this.onChange}
                                   placeholder="Year of activity"/>
                            <div className="input-group">
            <textarea name="description" className="form-control" aria-label="With textarea"
                      placeholder="Artist description"
                      value={this.state.description}
                      onChange={this.onChange}>
            </textarea>
                            </div>
                            <div className="custom-file">
                                <input type="file" name="artImg"
                                       // value={this.state.artImg}
                                       onChange={this.onChange} id="artImg"/>
                                <label className="custom-file-label" htmlFor="artImg">New image</label>
                            </div>
                            <button type="submit" className="btn btn-primary ml-3">Save</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

EditArtist.propTypes = {
    getArtist: PropTypes.func.isRequired,
    artist: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    artist: state.artistR.artist
})

export default connect(mapStateToProps, {getArtist, addArtist})(EditArtist)