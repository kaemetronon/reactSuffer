import React, {Component} from 'react'
import '../../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css'
import {Link} from "react-router-dom";


class CustomTable extends Component {
    render() {
        const data = this.props.data;

        if (data.length === 0) {
            return (<div>No users yet</div>)
        } else {
            return (
                <table className="table">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>username</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>E-mail</th>
                        <th>role</th>
                        <th>isActive</th>
                        <th>edit</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.username}</td>
                            <td>{item.firstName}</td>
                            <td>{item.lastName}</td>
                            <td>{item.email}</td>
                            <td>{item.role}</td>
                            <td>{item.isActive}</td>
                            <td><Link to={`editPage/${item.id}`}>Edit</Link></td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            )
        }
    }
}

export default CustomTable