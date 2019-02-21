import React, { Component } from 'react';

import { NewCVForm } from '../NewCVForm/NewCVForm';
import { MyCv } from '../MyCV/MyCv';
import { NewListItem } from '../NewCVForm/NewListItem/NewListItem';
import { ContentHeading } from '../ContentHeading/ContentHeading';
import './ContentForm.css';

export class ContentForm extends Component {
    displayName = ContentForm.name;

    constructor(props) {
        super(props);

        this.state = {
            edit: true,
            render: false,
            oldResumes: [],
            userEmail: '',
            userName: ''
        };

    }

    render() {
        const resumes = [];
        for (var i = 0; i < this.state.oldResumes.length; i += 1) {
            resumes.push(<NewListItem
                key={i}
                index={i}
                innerRef={React.createRef()}
                listItem={this.state.oldResumes[i]} />);
        }

        return (
            <div className="container-fluid p-0">
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between w-100">
                    <a class="navbar-brand" href="#">Resume Builder</a>
                    <p class="navbar-text navbar-center">Signed in as {this.state.userName}</p>
                    <p class="navbar-text navbar-right"><a href="#login" class="navbar-link">Logout</a></p>
                </nav>
                <hr />
                <div className="container-fluid h-100">
                    <div className="row h-100">
                        <div className="col-md-2 h-100 saved-resumes">
                            <ContentHeading name="Saved Resumes" />
                            <ul className="list-group">
                                {resumes}
                            </ul>
                        </div>
                        <div className="col-md-10 h-100 edit-resumes">
                            {this.state.edit ? <NewCVForm userInfo={{ userName: this.state.userName, userEmail: this.state.userEmail }}/> : null}
                            {this.state.render ? <MyCv /> : null}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}