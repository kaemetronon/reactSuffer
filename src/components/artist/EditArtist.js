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
            img: ''
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        const {
            name,
            year,
            description,
            img
        } = nextProps.artist
        this.setState({
            name,
            year,
            description,
            img
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
            file: this.state.file,
        }
        this.props.addArtist(newAlbum, this.props.history)
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    render() {
        console.log(this.state.name)
        return (
            <div>
                <h1 className="display-4">Artist editor</h1>

                <div className="form-row">
                    <img src={`/img/{artist.img}`} className="img-thumbnail"/>

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
                            <div className="form-group">
                                <div className="custom-file">
                                    <input type="file"
                                           name="img"
                                           value={this.state.img}
                                           onChange={this.onChange} id="customFile"/>
                                    <label className="custom-file-label">New image</label>
                                </div>
                            </div>
                            <input type="hidden" name="_csrf" value="${_csrf.token}"/>
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

export default connect(mapStateToProps, {getArtist})(EditArtist)