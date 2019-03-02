import React, { Component } from 'react';
import { Link } from "react-router-dom";

export class AdminForm extends Component {
    displayName = AdminForm.name;

    constructor(props) {
        super(props);

        this.state = {
            userData: []
        };

        fetch('api/User/GetAllUsers')
            .then((response) => {
                return response.json();
            }).then((data) => {
                data.map((user, i) => {
                    if (!user.isAdmin) {
                        fetch('api/ResumeData/GetByEmailId?emailId=' + user.email)
                            .then((response) => {
                                return response.json();
                            }).then((resumes) => {
                                var currentUserData = {
                                    user: user,
                                    resumes
                                }
                                this.setState(prevState => ({
                                    userData: [...prevState.userData, currentUserData]
                                }));
                            });
                    }
                });
            }).catch((error) => {
                console.error('problem in retrieving users ', error);
            });
    }

    //handleDelete = (user) => {
    //    fetch('api/User/' + user.email, {
    //        method: 'DELETE'
    //    }).then(response => {
    //        this.setState({
    //                users: this.state.users.filter((usr) => {
    //                    return usr.email !== user.email;
    //                })
    //            }); 
    //    });
    //}

    render() {

        const rows = this.state.userData.map((user, i) => {
            console.log("render user resumes: ", user, user.resumes);
            const resumes = user.resumes.map(r => {
                const newTo = {
                    pathname: "/MyCv/" + r.id
                };
                return (
                    <Link className="btn btn-pink" role="button" target="_blank" to={newTo}>
                        <button type="button" className="btn btn-outline-success">
                            {r.name}
                       </button>
                    </Link>);
            });

            return (
                <tr innerRef={React.createRef()}>
                    <th scope="row">{i + 1}</th>
                    <td>{user.user.name}</td>
                    <td>{user.user.email}</td>
                    <td>
                        {resumes}
                    </td>
                    <td>{user.user.createdTime}</td>
                </tr>
            );
        });

        return (
            <table className="table container">
                <thead className="thead">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">User Name</th>
                        <th scope="col">Email ID</th>
                        <th scope="col">Resumes</th>
                        <th scope="col">Created Time</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        );
    }
}