import React, { Component } from 'react';
import NewExperience from './NewExperience/NewExprience';
import NewAchievement from './NewAchievement/NewAchievement';
import { NewEducation } from './NewEducation/NewEducation';
import { NewLanguage } from './NewLanguage/NewLanguage';
import './NewCVForm.css';
import { IconFieldGroup } from '../../Common/IconFieldGroup';
import { ContentHeading } from '../../Common/ContentHeading/ContentHeading';

export class NewCVForm extends Component {
    displayName = NewCVForm.name;

    constructor(props, context) {
        super(props, context);

        var data = this.props.cvData;
        this.state = {
            userEmail: this.props.userInfo.userEmail,
            userName: this.props.userInfo.userName,
            id: data.id,
            formControls: this.initializeFormControls(data)
        };
    }

    componentWillReceiveProps(props) {
        console.log('updating...');
        const activeIndex = this.props.activeResumeIndex;
        if (props.activeResumeIndex !== activeIndex) {
            var data = props.cvData;
            this.setState({ id: data.id });
            this.setState({ formControls: this.initializeFormControls(data) });
        }
    }

    initializeFormControls = (data) => {
        return {
            personalInfo: {
                name: {
                    value: data.personalInfo.name,
                    placeHolder: 'Enter name',
                },
                email: {
                    value: data.personalInfo.eMail,
                    placeHolder: 'Enter email',
                    error: ''
                },
                currentOccupation: {
                    value: data.personalInfo.currentOccupation,
                    placeHolder: 'Student/Jobseeker/Developer...'
                },
                linkedIn: {
                    value: data.personalInfo.linkedIn ? data.personalInfo.linkedIn : '',
                    placeHolder: 'Enter LinkedIn URL'
                },
                phoneNumber: {
                    value: data.personalInfo.phoneNumber,
                    placeHolder: 'Enter phoneNumber'
                },
                location: {
                    value: data.personalInfo.location,
                    placeHolder: 'Enter location'
                },
                gitURL: {
                    value: data.personalInfo.gitURL ? data.personalInfo.gitURL : '',
                    placeHolder: 'Enter Git URL'
                },
                blogURL: {
                    value: data.personalInfo.blogURL ? data.personalInfo.blogURL : '',
                    placeHolder: 'Enter blog URL'
                },
                valid: false
            },
            experience: data.experiences.map(exp => {
                return {
                    title: {
                        value: exp.title,
                        placeHolder: 'Enter Title'
                    },
                    company: {
                        value: exp.company,
                        placeHolder: 'Enter company'
                    },
                    location: {
                        value: exp.location,
                        placeHolder: 'Enter location'
                    },
                    fromDate: {
                        value: exp.fromDate,
                        formattedValue: this.parseDate(exp.fromDate)
                    },
                    toDate: {
                        value: exp.toDate,
                        formattedValue: this.parseDate(exp.toDate)
                    },
                    rolesAndResponsibilities: {
                        value: exp.rolesAndResponsibilities.join('\n'),
                        placeHolder: 'Enter roles & responsibilities'
                    },
                    isCurrentEmployer: false
                };
            }),
            education: data.educations.map(edu => {
                return {
                    stream: {
                        value: edu.stream,
                        placeHolder: 'STREAM OF GRADUATION'
                    },
                    university: {
                        value: edu.university,
                        placeHolder: 'UNIVERSITY'
                    },
                    fromDate: {
                        value: edu.fromDate,
                        formattedValue: this.parseDate(edu.fromDate)
                    },
                    toDate: {
                        value: edu.toDate,
                        formattedValue: this.parseDate(edu.toDate)
                    },
                    isCurrentStudent: false
                };
            }),
            language: data.languages.map(lan => {
                return {
                    name: lan.name.toLocaleLowerCase(),
                    level: lan.level
                };
            }),
            achievement: data.achievements.map(mom => {
                return {
                    value: mom,
                    placeHolder: 'Enter your achievement'
                };
            }),
            lifePhilosophyContent: {
                value: data.lifePhilosophy,
                placeHolder: 'Write Your Life Philosophy'
            },
            strength: {
                value: data.strengths ? data.strengths.join(',') : '',
                placeHolder: 'Enter strengths with comma separated values'
            },
            formValid: false
        };
    }

    parseDate = (dateString) => {
        var dateParts = dateString.split("/");

        // month is 0-based, that's why we need dataParts[1] - 1
        return new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]); 
    }

    validateForm() {
        const updatedControls = {
            ...this.state.formControls
        };
        updatedControls.formValid = this.state.formControls.personalInfo.valid;

        this.setState({ formControls: updatedControls });
    }

    validateField(name, value) {
        const updatedControls = {
            ...this.state.formControls
        };
        const updatedFormElement = {
            ...updatedControls.personalInfo[name]
        };

        switch (name) {
            case 'name':
                break;
            case 'email':
                let emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                updatedFormElement.error = emailValid ? '' : ' is invalid';
                updatedControls.personalInfo[name] = updatedFormElement;

                updatedControls.personalInfo.valid = emailValid ? true : false;
                break;
            default:
                break;
        }
        this.setState({
            formControls: updatedControls
        }, this.validateForm);
    }

    // Personal Info
    changePersonalInfoHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        const updatedControls = {
            ...this.state.formControls
        };
        const updatedFormElement = {
            ...updatedControls.personalInfo[name]
        };
        updatedFormElement.value = value;
        updatedControls.personalInfo[name] = updatedFormElement;

        this.setState({
            formControls: updatedControls
        }, () => { this.validateField(name, value); });
    }

    // Experience
    addExperience = (e) => {
        e.preventDefault();

        const updatedFormControls = {
            ...this.state.formControls
        };
        updatedFormControls.experience.push({
            title: {
                value: '',
                placeHolder: 'Enter Title'
            },
            company: {
                value: '',
                placeHolder: 'Enter Name of Company'
            },
            location: {
                value: '',
                placeHolder: 'Enter the location'
            },
            isCurrentEmployer: false,
            fromDate: {
                value: new Date().toLocaleDateString(),
                formattedValue: new Date()
            },
            toDate: {
                value: new Date().toLocaleDateString(),
                formattedValue: new Date()
            },
            rolesAndResponsibilities: {
                value: '',
                placeHolder: 'Enter Your Role'
            }
        });
        this.setState({
            formControls: updatedFormControls
        });
    }

    changeExperienceHandler = (event, i) => {
        event.preventDefault();

        const name = event.target.name;
        const value = event.target.value;

        const updatedControls = {
            ...this.state.formControls
        };
        const updatedFormElement = {
            ...updatedControls.experience[i][name]
        };
        updatedFormElement.value = value;
        updatedControls.experience[i][name] = updatedFormElement;
        this.setState({
            formControls: updatedControls
        });
    }

    changeDateExperienceHandler = (name, value, i) => {
        const updatedControls = {
            ...this.state.formControls
        };
        const updatedFormElement = {
            ...updatedControls.experience[i][name]
        };
        updatedFormElement.formattedValue = value;
        updatedFormElement.value = value.toLocaleDateString();
        updatedControls.experience[i][name] = updatedFormElement;

        this.setState({
            formControls: updatedControls
        });
    }

    changeCurrentEmployerCheck = (i) => {
        const updatedControls = {
            ...this.state.formControls
        };
        const updatedFormElement = {
            ...updatedControls.experience[i]
        };
        updatedFormElement.isCurrentEmployer = !updatedFormElement.isCurrentEmployer;
        updatedControls.experience[i] = updatedFormElement;

        this.setState({
            formControls: updatedControls
        });
    }

    deleteExperience = (e, i) => {
        e.preventDefault();
        const updatedFormControls = {
            ...this.state.formControls
        };
        updatedFormControls.experience.splice(i, 1);
        this.setState({
            formControls: updatedFormControls
        });
    }

    // Education
    addEducation = (e) => {
        e.preventDefault();

        const updatedFormControls = {
            ...this.state.formControls
        };
        updatedFormControls.education.push({
            stream: {
                value: '',
                placeHolder: 'STREAM OF GRADUATION'
            },
            university: {
                value: '',
                placeHolder: 'UNIVERSITY'
            },
            isCurrentStudent: false,
            fromDate: {
                value: new Date().toLocaleDateString(),
                formattedValue: new Date()
            },
            toDate: {
                value: new Date().toLocaleDateString(),
                formattedValue: new Date()
            }
        });
        this.setState({
            formControls: updatedFormControls
        });
    }

    changeEducationHandler = (event, i) => {
        event.preventDefault();

        const name = event.target.name;
        const value = event.target.value;

        const updatedControls = {
            ...this.state.formControls
        };
        const updatedFormElement = {
            ...updatedControls.education[i][name]
        };
        updatedFormElement.value = value;
        updatedControls.education[i][name] = updatedFormElement;

        this.setState({
            formControls: updatedControls
        });
    }

    changeDateEducationHandler = (name, value, i) => {
        const updatedControls = {
            ...this.state.formControls
        };
        const updatedFormElement = {
            ...updatedControls.education[i][name]
        };
        updatedFormElement.formattedValue = value;
        updatedFormElement.value = value.toLocaleDateString();
        updatedControls.education[i][name] = updatedFormElement;
        this.setState({
            formControls: updatedControls
        });
    }

    changeCurrentStudentCheck = (i) => {
        const updatedControls = {
            ...this.state.formControls
        };
        const updatedFormElement = {
            ...updatedControls.education[i]
        };
        updatedFormElement.isCurrentStudent = !updatedFormElement.isCurrentStudent;
        updatedControls.education[i] = updatedFormElement;

        this.setState({
            formControls: updatedControls
        });
    }

    deleteEducation = (e, i) => {
        e.preventDefault();

        const updatedFormControls = {
            ...this.state.formControls
        };
        updatedFormControls.education.splice(i, 1);
        this.setState({
            formControls: updatedFormControls
        });
    }

    // Achievement
    addAchievement = (e) => {
        e.preventDefault();

        const updatedFormControls = {
            ...this.state.formControls
        };
        updatedFormControls.achievement.push({
            value: '',
            placeHolder: 'Enter your achievement'
        });
        this.setState({
            formControls: updatedFormControls
        });
    }

    changeAchievementHandler = (event, i) => {
        event.preventDefault();

        const name = event.target.name;
        const value = event.target.value;

        const updatedControls = {
            ...this.state.formControls
        };
        const updatedFormElement = {
            ...updatedControls.achievement[i]
        };
        updatedFormElement.value = value;
        updatedControls.achievement[i] = updatedFormElement;

        this.setState({
            formControls: updatedControls
        });
    }

    deleteAchievement = (e, i) => {
        e.preventDefault();

        const updatedFormControls = {
            ...this.state.formControls
        };
        updatedFormControls.achievement.splice(i, 1);
        this.setState({
            formControls: updatedFormControls
        });
    }

    // Life Philosophy
    changeLifePhilosophyHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        const updatedControls = {
            ...this.state.formControls
        };
        updatedControls.lifePhilosophyContent.value = value;

        this.setState({
            formControls: updatedControls
        });
    }

    // Language
    addLanguage = (e) => {
        e.preventDefault();

        const updatedFormControls = {
            ...this.state.formControls
        };
        updatedFormControls.language.push({
            name: '',
            level: 0
        });
        this.setState({
            formControls: updatedFormControls
        });
    }

    changeLanguageHandler = (event, i) => {
        let name = event.target.name;
        let value = event.target.value;

        // TODO: Find a better way later
        if (name.startsWith("level")) {
            value = parseInt(value);
            name = "level";
        }

        const updatedFormControls = {
            ...this.state.formControls
        };
        const updatedFormElement = {
            ...updatedFormControls.language[i]
        };
        updatedFormElement[name] = value;
        updatedFormControls.language[i] = updatedFormElement;

        this.setState({
            formControls: updatedFormControls
        });
    }

    deleteLanguage = (e, i) => {
        e.preventDefault();

        const updatedFormControls = {
            ...this.state.formControls
        };
        updatedFormControls.language.splice(i, 1);
        this.setState({
            formControls: updatedFormControls
        });
    }

    // Strengths
    changeStrengthsHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        const updatedControls = {
            ...this.state.formControls
        };
        updatedControls.strength.value = value;

        this.setState({
            formControls: updatedControls
        });
    }

    stateToFormData = () => {
        const formData = {
            userEmail: this.state.userEmail,
            userName: this.state.userName,
            id: this.state.id,
            personalInfo: {},
            experiences: [],
            educations: [],
            languages: [],
            lifePhilosophy: '',
            achievements: [],
            strengths: []
        };

        // personal info
        for (let formElementId in this.state.formControls.personalInfo) {
            formData.personalInfo[formElementId] = this.state.formControls.personalInfo[formElementId].value;
        }

        // Experience
        for (var i = 0; i < this.state.formControls.experience.length; i += 1) {
            var experience = this.state.formControls.experience[i];
            formData.experiences.push({});
            for (let formElementId in experience) {
                if (formElementId === "rolesAndResponsibilities") {
                    formData.experiences[i][formElementId] = this.state.formControls.experience[i][formElementId].value.split('\n');
                } else {
                    formData.experiences[i][formElementId] = this.state.formControls.experience[i][formElementId].value;
                }
            }
        }

        // Education
        for (var i = 0; i < this.state.formControls.education.length; i += 1) {
            var education = this.state.formControls.education[i];
            formData.educations.push({});
            for (let formElementId in education) {
                formData.educations[i][formElementId] = this.state.formControls.education[i][formElementId].value;
            }
        }

        // Languages
        for (var i = 0; i < this.state.formControls.language.length; i += 1) {
            var language = this.state.formControls.language[i];
            formData.languages.push(language);
        }

        // Life Philosophy
        formData.lifePhilosophy = this.state.formControls.lifePhilosophyContent.value;

        // Achievements
        for (var i = 0; i < this.state.formControls.achievement.length; i += 1) {
            var achievement = this.state.formControls.achievement[i].value;
            formData.achievements.push(achievement);
        }

        // Strengths
        var strength = this.state.formControls.strength.value;
        var values = strength.split(',');
        values.forEach(val => formData.strengths.push(val));

        return formData;
    }

    // Submit Form
    handleSubmit = (e) => {
        console.log('state value is ', this.state);
        var formData = this.stateToFormData();
        console.log('form data to backend ', formData);

        if (this.state.id !== '') {
            fetch('api/ResumeData/' + this.state.id, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            }).then((res) => {
                if (res.status === 204) {
                    alert("Resume successfully updated!!");
                }
            }).catch((error) => {
                alert('problem in updating resume ' + error);
            });
        } else {
            fetch('api/ResumeData/SaveToMongoDB', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            }).then((res) => {
                if (res.status === 200) {
                    alert("Resume successfully saved!!");
                }
            }).catch((error) => {
                alert('problem in saving resume ' + error);
            });
        }
        e.preventDefault();
    }

    render() {
        // Experiences
        const experiences = [];
        for (var i = 0; i < this.state.formControls.experience.length; i += 1) {
            experiences.push(<NewExperience
                key={i}
                index={i}
                innerRef={React.createRef()}
                experience={this.state.formControls.experience[i]}
                handleCurrentEmployerCheck={(idx) => this.changeCurrentEmployerCheck(idx)}
                valueChange={(e, idx) => this.changeExperienceHandler(e, idx)}
                dateValueChange={(n, v, fv, i) => this.changeDateExperienceHandler(n, v, fv, i)}
                delete={(e, idx) => this.deleteExperience(e, idx)} />);
        }

        // Educations
        const educations = [];
        for (var i = 0; i < this.state.formControls.education.length; i += 1) {
            educations.push(<NewEducation
                key={i}
                index={i}
                innerRef={React.createRef()}
                education={this.state.formControls.education[i]}
                handleCurrentStudentCheck={(idx) => this.changeCurrentStudentCheck(idx)}
                valueChange={(e, idx) => this.changeEducationHandler(e, idx)}
                dateValueChange={(n, v, fv, i) => this.changeDateEducationHandler(n, v, fv, i)}
                delete={(e, idx) => this.deleteEducation(e, idx)} />);
        }

        // Achievements
        const achievements = [];
        for (var i = 0; i < this.state.formControls.achievement.length; i += 1) {
            achievements.push(<NewAchievement
                key={i}
                index={i}
                innerRef={React.createRef()}
                achievement={this.state.formControls.achievement[i]}
                valueChange={(e, idx) => this.changeAchievementHandler(e, idx)}
                delete={(e, idx) => this.deleteAchievement(e, idx)} />);
        }

        // Languages
        const languages = [];
        for (var i = 0; i < this.state.formControls.language.length; i += 1) {
            languages.push(<NewLanguage
                key={i}
                index={i}
                innerRef={React.createRef()}
                levelGroupName={"level" + i}
                language={this.state.formControls.language[i]}
                selectionChange={(e, idx) => this.changeLanguageHandler(e, idx)}
                delete={(e, idx) => this.deleteLanguage(e, idx)} />);
        }

        return (
            <form key="CVFormKey" onSubmit={this.handleSubmit} className="edit-form">
                <div className="row w-100">
                    <div className="w-100">
                        <ContentHeading name="Personal Info" />
                        <div className="row w-100">
                            <div className="col-md-4">
                                <IconFieldGroup
                                    name="name"
                                    id="formControlsName"
                                    type="text"
                                    label="Name"
                                    value={this.state.formControls.personalInfo.name.value}
                                    placeholder={this.state.formControls.personalInfo.name.placeHolder}
                                    icon="fa fa-user-circle"
                                    onChange={this.changePersonalInfoHandler}
                                    required
                                />
                            </div>
                            <div className="col-md-4">
                                <IconFieldGroup
                                    name="email"
                                    id="formControlsEmail"
                                    label="Email address"
                                    value={this.state.formControls.personalInfo.email.value}
                                    placeholder={this.state.formControls.personalInfo.email.placeHolder}
                                    icon="fa fa-at"
                                    onChange={this.changePersonalInfoHandler}
                                    error={this.state.formControls.personalInfo.email.error}
                                    required
                                />
                            </div>
                            <div className="col-md-4">
                                <IconFieldGroup
                                    name="currentOccupation"
                                    id="formControlsRole"
                                    label="Current Occupation"
                                    value={this.state.formControls.personalInfo.currentOccupation.value}
                                    placeholder={this.state.formControls.personalInfo.currentOccupation.placeHolder}
                                    icon="fa fa-briefcase"
                                    onChange={this.changePersonalInfoHandler}
                                    required
                                />
                            </div>
                        </div>
                        <div className="row w-100">
                            <div className="col-md-4">
                                <IconFieldGroup
                                    name="linkedIn"
                                    id="formControlsLinkedIn"
                                    label="LinkedIn"
                                    value={this.state.formControls.personalInfo.linkedIn.value}
                                    placeholder={this.state.formControls.personalInfo.linkedIn.placeHolder}
                                    icon="fa fa-linkedin"
                                    onChange={this.changePersonalInfoHandler}
                                    required
                                />
                            </div>
                            <div className="col-md-4">
                                <IconFieldGroup
                                    name="phoneNumber"
                                    id="formControlsPhone"
                                    label="Phone number"
                                    value={this.state.formControls.personalInfo.phoneNumber.value}
                                    placeholder={this.state.formControls.personalInfo.phoneNumber.placeHolder}
                                    icon="fa fa-phone"
                                    onChange={this.changePersonalInfoHandler}
                                    required
                                />
                            </div>
                            <div className="col-md-4">
                                <IconFieldGroup
                                    name="location"
                                    id="formControlsLocaiton"
                                    label="Location"
                                    value={this.state.formControls.personalInfo.location.value}
                                    placeholder={this.state.formControls.personalInfo.location.placeHolder}
                                    icon="fa fa-map-marker"
                                    onChange={this.changePersonalInfoHandler}
                                    required
                                />
                            </div>
                        </div>
                        <div className="row w-100">
                            <div className="col-md-6">
                                <IconFieldGroup
                                    name="gitURL"
                                    id="formControlsGitHub"
                                    label="GitHub/GitLab"
                                    value={this.state.formControls.personalInfo.gitURL.value}
                                    placeholder={this.state.formControls.personalInfo.gitURL.placeHolder}
                                    icon="fa fa-github"
                                    onChange={this.changePersonalInfoHandler}
                                />
                            </div>
                            <div className="col-md-6">
                                <IconFieldGroup
                                    name="blogURL"
                                    id="formControlsBlog"
                                    label="Blog/Other Links"
                                    value={this.state.formControls.personalInfo.blogURL.value}
                                    placeholder={this.state.formControls.personalInfo.blogURL.placeHolder}
                                    icon="fa fa-external-link"
                                    onChange={this.changePersonalInfoHandler}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-100">
                        <ContentHeading name="Experience" />
                        {experiences}
                        <button type="button" className="btn btn-primary" id="addExpBtn" onClick={this.addExperience}>Add experience</button>
                    </div>
                    <br />
                    <div className="w-100">
                        <ContentHeading name="Education" />
                        {educations}
                        <button type="button" className="btn btn-primary" id="addEducationBtn" onClick={this.addEducation}>Add Education</button>
                    </div>
                    <br />
                    <div className="row w-100">
                        <div className="col-md-6">
                            <ContentHeading name="Languages" />
                            {languages}
                            <hr />
                            <button type="button" className="btn btn-primary" id="addLanguageBtn" onClick={this.addLanguage}>Add language</button>
                        </div>
                        <div className="col-md-6">
                            <ContentHeading name="Most Proud Of" />
                            {achievements}
                            <button type="button" className="btn btn-primary" onClick={this.addAchievement} >Add Your Achievements</button>
                        </div>
                    </div>
                    <br />
                    <div className="row w-100">
                        <div className="col-md-6">
                            <ContentHeading name="Strengths" />
                            <div className="form-group">
                                <textarea
                                    name="strength"
                                    className="form-control"
                                    id="exampleFormControlTextarea1"
                                    rows="3"
                                    value={this.state.formControls.strength.value}
                                    placeholder={this.state.formControls.strength.placeHolder}
                                    onChange={this.changeStrengthsHandler}
                                    required
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <ContentHeading name="Life Philosophy" />
                            <div className="form-group">
                                <textarea
                                    name="LifePhilosophyContent"
                                    className="form-control"
                                    id="formControlsLifePhilosophy"
                                    rows="3"
                                    value={this.state.formControls.lifePhilosophyContent.value}
                                    placeholder={this.state.formControls.lifePhilosophyContent.placeHolder}
                                    onChange={this.changeLifePhilosophyHandler} />
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                    <button className="btn btn-primary" disabled={!this.state.formControls.formValid} type="submit">Save</button>
                </div>
            </form >
        );
    }
}