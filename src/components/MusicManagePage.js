import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel
} from "react-accessible-accordion";
import 'react-accessible-accordion/dist/fancy-example.css';
import {addArtist} from "../actions/artistActions";
import {addAlbum} from "../actions/albumActions";


class MusicManagePage extends Component {
    constructor() {
        super();
        this.state = {
            //for artist
            artName: '',
            description: '',
            year: '',
            artImg: '',
            //for album
            albName: '',
            artistName: '',
            albImg: '',
            genre: ''
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmitAlb = this.onSubmitAlb.bind(this)
        this.onSubmitArt = this.onSubmitArt.bind(this)
    }

    onSubmitArt(e) {
        e.preventDefault();
        const newArtist = {
            artName: this.state.artName,
            description: this.state.description,
            year: this.state.year,
            artImg: this.state.artImg
        }
        this.props.addArtist(newArtist, this.props.history);
    }

    onSubmitAlb(e) {
        e.preventDefault();
        const newAlbum = {
            albName: this.state.albName,
            artistName: this.state.artistName,
            albImg: this.state.albImg,
            genre: this.state.genre
        }
        this.props.addAlbum(newAlbum, this.props.history)
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        return (
            <Accordion>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            Add new Artist
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <div className="card-body">
                            <div className="form-group mt-3">
                                <form onSubmit={this.onSubmitArt} encType="multipart/form-data">
                                    <div className="form-group">
                                        <input type="text"
                                               name="artName"
                                               value={this.state.artName}
                                               onChange={this.onChange} className="form-control" placeholder="Name"/>
                                        <textarea name="description" value={this.state.description}
                                                  onChange={this.onChange} className="form-control" aria-label="With textarea"
                                                  placeholder="Artist description"></textarea>
                                        <input type="text" className="form-control"
                                               name="year" value={this.state.year}
                                               onChange={this.onChange}
                                               placeholder="Year of activity"/>
                                        <div className="custom-file">
                                            <input type="file"
                                                   name="artImg" value={this.state.artImg}
                                                   onChange={this.onChange} id="artImg"/>
                                            <label className="custom-file-label" htmlFor="artImg">New image</label>
                                        </div>
                                        <button style={{marginTop: '15px'}} type="submit"
                                                className="btn btn-primary">Add artist to base
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            Add new album
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <div className="card-body">
                            <div className="form-group mt-3">
                                <form onSubmit={this.onSubmitAlb} encType="multipart/form-data">
                                    <div className="form-group">
                                        <input type="text"
                                               name="albName" value={this.state.albName}
                                               onChange={this.onChange} className="form-control" placeholder="Album name"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text"
                                               name="artistName" value={this.state.artistName}
                                               onChange={this.onChange} className="form-control"
                                               placeholder="Artist name"/>
                                    </div>

                                        <div className="custom-file">
                                            <input type="file"
                                                   name="albImg" value={this.state.albImg}
                                                   onChange={this.onChange} id="albImg"/>
                                            <label className="custom-file-label" htmlFor="albImg">Choose
                                                file</label>
                                        </div>

                                    <div className='form-group'>
                                        <select className='form-control form-control-lg'
                                                name='genre' value={this.state.genre}
                                                onChange={this.onChange}>
                                            <option value='ROCK'>ROCK</option>
                                            <option value='HIP-HOP'>HIP-HOP</option>
                                            <option value='POP'>POP</option>
                                            <option value='JAZZ'>JAZZ</option>
                                            <option value='BLUES'>BLUES</option>
                                            <option value='ELECTRONIC'>ELECTRONIC</option>
                                            <option value='LATIN'>LATIN</option>
                                            <option value='OTHER'>OTHER</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-primary">Add album</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </AccordionItemPanel>
                </AccordionItem>
            </Accordion>
        );
    }
}

MusicManagePage.propTypes = {
    addArtist: PropTypes.func.isRequired,
    addAlbum: PropTypes.func.isRequired
}

export default connect(null, {addAlbum, addArtist}) (MusicManagePage)