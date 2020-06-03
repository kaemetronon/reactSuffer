import React, {Component} from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class HomePage extends Component {
    render() {
        return (
            <div>
                <h5 class="display-4">Hello, {this.props.user.name}!</h5>
        <div class="lead">
            Welcome to our delightful MetaCritic for music! Enjoy. There is no other way.
        </div>
            </div>
        )
    }
}
HomePage.propTypes = {
    user: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    user: state.userR.user
})

export default connect(mapStateToProps) (HomePage);