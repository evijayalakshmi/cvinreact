import React, { Component } from 'react';
import { ContentHeading } from '../ContentHeading/ContentHeading';
import { FieldGroup } from './FieldGroup';
import { IconFieldGroup } from './IconFieldGroup';
import NewExperience from './NewExperience/NewExprience';
import NewAchievement from './NewAchievement/NewAchievement';
import './NewCVForm.css';
import { NewEducation } from './NewEducation/NewEducation';
import { NewLanguage } from './NewLanguage/NewLanguage';
import { CvData } from '../../models/CvData';

export class NewCVForm extends Component {
    displayName = NewCVForm.name;

    constructor(props, context) {
        super(props, context);

        var data = this.props.cvData;
        this.state = {
            userEmail: this.props.userInfo.userEmail,
            userName: this.props.userInfo.userName,
            formControls: this.initializeFormControls(data)
        };
    }

    componentWillReceiveProps(props) {
        const activeIndex = this.props.activeResumeIndex;
        if (props.activeResumeIndex !== activeIndex) {
            var data = this.props.cvData;
            this.setState({ formControls: this.initializeFormControls(data) });
        }
    }

    initializeFormControls = (data) => {
        return {
            personalInfo: {
                name: {
                    value: data.personalInfo.name,
                    placeHolder: 'Enter name'
                },
                location: {
                    value: data.personalInfo.location,
                    placeHolder: 'Enter location'
                },
                email: {
                    value: data.personalInfo.eMail,
                    placeHolder: 'Enter email'
                },
                linkedIn: {
                    value: '',
                    placeHolder: 'Enter LinkedIn URL'
                },
                phoneNumber: {
                    value: data.personalInfo.phoneNumber,
                    placeHolder: 'Enter phoneNumber'
                },
                gitURL: {
                    value: '',
                    placeHolder: 'Enter Git URL'
                },
                blogURL: {
                    value: '',
                    placeHolder: 'Enter blog URL'
                }
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
                        value: '',
                        formattedValue: ''
                    },
                    toDate: {
                        value: '',
                        formattedValue: ''
                    },
                    rolesAndResponsibilities: {
                        value: '',
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
                        value: '',
                        formattedValue: ''
                    },
                    toDate: {
                        value: '',
                        formattedValue: ''
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
                value: '',
                placeHolder: 'Write Your Life Philosophy'
            },
            strength: data.strengths.map(st => {
                return {
                    value: st,
                    placeHolder: 'Enter strengths with comma separated values'
                };
            })
        };
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
        });
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
            fromDate: '',
            toDate: '',
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

    changeDateExperienceHandler = (name, value, formattedValue, i) => {
        const updatedControls = {
            ...this.state.formControls
        };
        const updatedFormElement = {
            ...updatedControls.experience[i][name]
        };
        updatedFormElement.value = value;
        updatedFormElement.formattedValue = formattedValue;
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
            fromDate: '',
            toDate: '',
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

    changeDateEducationHandler = (name, value, formattedValue, i) => {
        const updatedControls = {
            ...this.state.formControls
        };
        const updatedFormElement = {
            ...updatedControls.education[i][name]
        };
        updatedFormElement.value = value;
        updatedFormElement.formattedValue = formattedValue;
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
                formData.experiences[i][formElementId] = this.state.formControls.experience[i][formElementId].value;
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

    splitArrayIntoChunks = (arr, chunkLen) => {
        var chunkList = [];
        var chunkCount = Math.ceil(arr.length / chunkLen);
        for (var i = 0; i < chunkCount; i++) {
            chunkList.push(arr.splice(0, chunkLen));
        }
        return chunkList;
    }

    renderToHTMLData = () => {
        const formControls = this.state.formControls;
        return {
            personalDetails: {
                Name: formControls.personalInfo.name.value,
                Designation: '',
                Email: formControls.personalInfo.email.value,
                blog: formControls.personalInfo.blogURL.value,
                Address: formControls.personalInfo.location.value
            },
            experiences: formControls.experience.map(exp => {
                return {
                    title: exp.title.value,
                    company: exp.company.value,
                    from: "",
                    to: "",
                    location: exp.location.value,
                    responsibilities: exp.rolesAndResponsibilities.value.split('\r\n')
                };
            }),
            moments: formControls.achievement.map(mom => {
                return {
                    icon: "fa fa-trophy fa-2x",
                    heading: "Courage I had",
                    content: mom.value
                };
            }),
            strengths: this.splitArrayIntoChunks(formControls.strength.value.split(','), 3),
            languages: formControls.language.map(lan => {
                return { language: lan.name, level: lan.level }
            }),
            educations: formControls.education.map(edu => {
                return {
                    stream: edu.stream.value,
                    university: edu.university.value,
                    icon: "fa fa-calendar",
                    from: "",
                    to: ""
                };
            }),
            dayOfLife: []
        };
    }

    // Submit Form
    handleSubmit = (e) => {
        console.log('state value is ', this.state);
        var formData = this.stateToFormData();
        console.log('form data to backend ', formData);
        fetch('api/ResumeData/SaveToMongoDB', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        }).then((res) => {
            this.setState(() => ({ toPdf: true }));
        });
        e.preventDefault();
    }

    render() {
        // if (this.state.toPdf === true) {
        //     return (<Redirect to={{ pathname: '/MyCv', state: this.renderToHTMLData() }} />);
        // }

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
                            <div className="col-md-6">
                                <FieldGroup
                                    name="name"
                                    id="formControlsName"
                                    type="text"
                                    label="Name"
                                    value={this.state.formControls.personalInfo.name.value}
                                    placeholder={this.state.formControls.personalInfo.name.placeHolder}
                                    onChange={this.changePersonalInfoHandler}
                                />
                            </div>
                            <div className="col-md-6">
                                <IconFieldGroup
                                    name="location"
                                    id="formControlsLocaiton"
                                    label="Location"
                                    value={this.state.formControls.personalInfo.location.value}
                                    placeholder={this.state.formControls.personalInfo.location.placeHolder}
                                    icon="fa fa-map-marker"
                                    onChange={this.changePersonalInfoHandler}
                                />
                            </div>
                        </div>
                        <div className="row w-100">
                            <div className="col-md-4">
                                <IconFieldGroup
                                    name="email"
                                    id="formControlsEmail"
                                    label="Email address"
                                    value={this.state.formControls.personalInfo.email.value}
                                    placeholder={this.state.formControls.personalInfo.email.placeHolder}
                                    icon="fa fa-at"
                                    onChange={this.changePersonalInfoHandler}
                                />
                            </div>
                            <div className="col-md-4">
                                <IconFieldGroup
                                    name="linkedIn"
                                    id="formControlsLinkedIn"
                                    label="LinkedIn"
                                    value={this.state.formControls.personalInfo.linkedIn.value}
                                    placeholder={this.state.formControls.personalInfo.linkedIn.placeHolder}
                                    icon="fa fa-linkedin"
                                    onChange={this.changePersonalInfoHandler}
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
                                    label="Blog"
                                    value={this.state.formControls.personalInfo.blogURL.value}
                                    placeholder={this.state.formControls.personalInfo.blogURL.placeHolder}
                                    icon="fa fa-newspaper-o"
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
                                    onChange={this.changeStrengthsHandler} />
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
                    <button className="btn btn-primary" type="submit">Save</button>
                </div>
            </form >
        );
    }
}