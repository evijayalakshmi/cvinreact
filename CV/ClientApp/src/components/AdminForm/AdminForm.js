import React, { Component } from 'react';

export class AdminForm extends Component {
    displayName = AdminForm.name;

    constructor(props) {
        super(props);

        this.state = {
            users: []
        };

        fetch('api/User/GetAllUsers')
            .then((response) => {
                return response.json();
            }).then((data) => {
                this.setState({ users: data });
            }).catch((error) => {
                console.error('problem in retrieving users ', error);
            });
    }

    handleDelete = (user) => {
        fetch('api/User/' + user.email, {
            method: 'DELETE'
        }).then(response => {
            this.setState({
                    users: this.state.users.filter((usr) => {
                        return usr.email !== user.email;
                    })
                }); 
        });
    }

    render() {

        const rows = this.state.users.map((user, i) => {
            return (
                <tr innerRef={React.createRef()}>
                    <th scope="row">{i + 1}</th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.createdTime}</td>
                    <td>
                        <button className="btn">
                            <i className="fa fa-edit" />
                        </button>
                        <button className="btn" onClick={() => this.handleDelete(user)}>
                            <i className="fa fa-trash" />
                        </button>
                    </td>
                </tr>
            );
        });

        return (
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">User Name</th>
                        <th scope="col">Email ID</th>
                        <th scope="col">Created Time</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        );
    }
}