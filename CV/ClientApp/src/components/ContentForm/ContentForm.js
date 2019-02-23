import React, { Component } from 'react';

import { NewCVForm } from '../NewCVForm/NewCVForm';
import { MyCv } from '../MyCV/MyCv';
import { NewListItem } from '../NewCVForm/NewListItem/NewListItem';
import { ContentHeading } from '../ContentHeading/ContentHeading';
import './ContentForm.css';
import { AdminForm } from '../AdminForm/AdminForm';

export class ContentForm extends Component {
    displayName = ContentForm.name;

    constructor(props) {
        super(props);

        this.state = {
            isAdmin: this.props.location.userInfo.isAdmin,
            oldResumes: [],
            userEmail: this.props.location.userInfo.userEmail,
            userName: this.props.location.userInfo.userName,
            activeListItem: 1
        };

        if (!this.state.isAdmin) {
            fetch('api/ResumeData/GetByEmailId?emailId=' + this.props.location.userInfo.userEmail)
                .then((response) => {
                    return response.json();
                }).then((data) => {
                    this.setState({ oldResumes: data });
                });
        }
    }

    handleListItemClick = (e, idx, thisResume) => {
        this.setState({ activeListItem: idx + 1 });
        console.log(thisResume);
    }

    renderUserPage() {
        const resumes = this.state.oldResumes.map((resume, i) => {
            return (
                <NewListItem
                    key={i}
                    index={i}
                    innerRef={React.createRef()}
                    listItem={resume}
                    isActive={i === this.state.activeListItem - 1}
                    onListItemClick={(e, idx) => this.handleListItemClick(e, idx, resume)}
                />);
        });

        return (
            <div className="row h-100">
                <div className="col-md-2 h-100 saved-resumes">
                    <ContentHeading name="Saved Resumes" />
                    <ul className="list-group">
                        {resumes}
                    </ul>
                </div>
                <div className="col-md-10 h-100 edit-resumes">
                    <NewCVForm
                        userInfo={{ userName: this.state.userName, userEmail: this.state.userEmail }}
                        activeResumeIndex={this.state.activeListItem}
                        cvData={this.state.oldResumes[this.state.activeListItem - 1]}
                    />
                </div>
            </div>
        );
    }

    renderAdminPage() {
        return (
            <div className="row h-100">
                <div className="col h-100">
                    <AdminForm />
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className="container-fluid p-0">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between w-100">
                    <a className="navbar-brand" href="#">Resume Builder</a>
                    <p className="navbar-text navbar-center">Signed in as {this.state.userName}</p>
                    <p className="navbar-text navbar-right"><a href="#login" className="navbar-link">Logout</a></p>
                </nav>
                <hr />
                <div className="container-fluid h-100">
                    {this.state.isAdmin ? this.renderAdminPage() : this.renderUserPage()}
                </div>
            </div>
        );
    }
}