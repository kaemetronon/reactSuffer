import React, {Component} from 'react'
import CustomTable from "./CustomTable";
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {getAllUsers} from '../../actions/userActions'


class UserManagePage extends Component {
    componentDidMount() {
        this.props.getAllUsers();
    }

    render() {
        console.log(this.props.users)
        return (
            <div className="App">
                <CustomTable data={this.props.users}/>
            </div>
        )
    }
}

UserManagePage.propTypes ={
    getAllUsers: PropTypes.func.isRequired,
    users: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    users: state.userR.users
})

export default connect(mapStateToProps, {getAllUsers}) (UserManagePage)