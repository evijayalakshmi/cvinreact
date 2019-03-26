import React, { Component } from 'react';
import { NewCVForm } from './NewCVForm/NewCVForm';
import './ContentForm.css';
import { AdminForm } from './AdminForm/AdminForm';
import { NewListItem } from './NewCVForm/NewListItem/NewListItem';
import { ContentHeading } from '../Common/ContentHeading/ContentHeading';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

export class ContentForm extends Component {
    displayName = ContentForm.name;

    constructor(props) {
        super(props);

        this.state = {
            isAdmin: this.props.location.userInfo.isAdmin,
            resumes: [],
            userEmail: this.props.location.userInfo.userEmail,
            userName: this.props.location.userInfo.userName,
            activeListItem: 0,
            areResumesLoaded: false,
            showModal: false
        };

        if (!this.state.isAdmin) {
            fetch('api/ResumeData/GetByEmailId?emailId=' + this.props.location.userInfo.userEmail)
                .then((response) => {
                    return response.json();
                }).then((data) => {
                    this.setState({ resumes: data, areResumesLoaded: true });
                    //this.setState({ resumes: data });
                    //this.setState({ areResumesLoaded: true });
                });
        }
    }

    handleListItemClick = (e, idx, thisResume) => {
        e.preventDefault();
        this.setState({ activeListItem: idx });
        console.log(thisResume);
    }

    addNewListItem = () => {
        const emptyResumeData = {
            userEmail: this.state.userEmail,
            userName: this.state.userName,
            id: '',
            name: 'Current Resume',
            personalInfo: {
                name: "",
                location: "",
                phoneNumer: "",
                designation: "",
                email: "",
                linkedIn: "",
                gitURL: "",
                blog: ""
            },
            experiences: [],
            educations: [],
            languages: [],
            lifePhilosophy: '',
            achievements: [],
            strengths: []
        };

        this.setState(prevState => ({
            resumes: [...prevState.resumes, emptyResumeData],
            activeListItem: prevState.resumes.length
        }));
        console.log(this.state);
    }

    deleteListItem = (idx, resume) => {
        confirmAlert({
            title: 'Confirm to delete',
            message: 'Are you sure to delete this?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        if (resume.id !== '') {
                            fetch('api/ResumeData/' + resume.id, {
                                method: 'DELETE'
                            }).then(response => {
                                this.setState({
                                    resumes: this.state.resumes.filter((res) => {
                                        return res.id !== resume.id;
                                    })
                                });
                            });
                        } else {
                            this.state.resumes.splice(idx, 1);
                            this.setState({
                                resumes: this.state.resumes
                            });
                        }
                    }
                },
                {
                    label: 'No',
                    onClick: () => { }
                }
            ]
        })
    }

    openModalDialog = () => {
        this.setState({ showModal: true });
    }

    renderUserPage() {
        const resumes = this.state.resumes.map((resume, i) => {
            return (
                <NewListItem
                    key={i}
                    index={i}
                    innerRef={React.createRef()}
                    listItem={resume}
                    isActive={i === this.state.activeListItem}
                    onListItemClick={(e, idx) => this.handleListItemClick(e, idx, resume)}
                    delete={(e, idx) => this.deleteListItem(idx, resume)}
                    openResume={() => this.openResumeExternal(resume)}
                />
            );

        });
        const resumeArea =
            this.state.areResumesLoaded ?
                (<ul className="list-group">
                    {resumes}
                </ul>) :
                (<div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>);
        return (
            <div className="row h-100">
                <div className="col-md-2 h-100 saved-resumes">
                    <ContentHeading name="Saved Resumes" />
                    {resumeArea}
                    <hr />
                    <button className="btn btn-primary btn-block" onClick={() => this.addNewListItem()}>
                        <i className="fa fa-plus"></i> Create new resume</button>
                </div>
                <div className="col-md-10 h-100 edit-resumes">
                    {this.state.resumes.length > 0 ?
                        <NewCVForm
                            userInfo={{ userName: this.state.userName, userEmail: this.state.userEmail }}
                            activeResumeIndex={this.state.activeListItem}
                            cvData={this.state.resumes[this.state.activeListItem]}
                        /> : null
                    }
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
                    <p className="navbar-text navbar-center">Signed in as <b> {this.state.userName} </b></p>
                    <p className="navbar-text navbar-right"><a href="/changepassword" className="navbar-link">Change Password</a></p>
                    <p className="navbar-text navbar-right"><a href="#login" className="navbar-link">Logout</a></p>
                </nav>
                <div className="container-fluid h-100 bg">
                    {this.state.isAdmin ? this.renderAdminPage() : this.renderUserPage()}
                </div>
            </div>
        );
    }
}