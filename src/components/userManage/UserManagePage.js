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
        const users = [{
            id: '0',
            username: 'u1',
            role: 'r1',
            firstName: 'f1',
            lastName: 'l1',
            email: 'e1',
            isActive: 'i1'
        }, {
            id: '1',
            username: 'u2',
            role: 'r2',
            firstName: 'f2',
            lastName: 'l2',
            email: 'e2',
            isActive: 'i2'
        }]; // допустим это получили из стейта

        return (
            <div className="App">
                <CustomTable data={users}/>
                {/*<CustomTable data={users}/> для запроса к серверу*/}
            </div>
        )
    }
}

UserManagePage.propTypes ={
    getAllUsers: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    users: state.userR.users
})

export default connect(mapStateToProps, {getAllUsers}) (UserManagePage)