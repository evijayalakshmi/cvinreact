import React, { Component } from 'react';
import { Col, Grid, Row, FormGroup, FormControl, Checkbox, Button, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { ContentHeading } from '../ContentHeading/ContentHeading';
import { FieldGroup } from './FieldGroup';
import { IconFieldGroup } from './IconFieldGroup';
import NewExperience from './NewExperience/NewExprience';
import NewAchievement from './NewAchievement/NewAchievement';
import './NewCVForm.css';
import { NewEducation } from './NewEducation/NewEducation';
import { NewLanguage } from './NewLanguage/NewLanguage';
import { Redirect } from 'react-router';
import { CvData } from '../../models/CvData';
import { NewListItem } from './NewListItem/NewListItem';

export class NewCVForm extends Component {
    displayName = NewCVForm.name;

    constructor(props, context) {
        super(props, context);

        var cvData = new CvData();
        var data = cvData.getData();

        console.log('from url ', this.props.location.userInfo);

        this.state = {
            toPdf: false,
            userEmail: '',
            userName: '',
            formControls: {
                personalInfo: {
                    name: {
                        value: data.personalDetails.Name,
                        placeHolder: 'Enter name'
                    },
                    location: {
                        value: data.personalDetails.Address,
                        placeHolder: 'Enter location'
                    },
                    email: {
                        value: data.personalDetails.Email,
                        placeHolder: 'Enter email'
                    },
                    linkedIn: {
                        value: '',
                        placeHolder: 'Enter LinkedIn URL'
                    },
                    phoneNumber: {
                        value: '',
                        placeHolder: 'Enter phoneNumber'
                    },
                    gitURL: {
                        value: '',
                        placeHolder: 'Enter Git URL'
                    },
                    blogURL: {
                        value: data.personalDetails.blog,
                        placeHolder: 'Enter blog URL'
                    }
                },
                experience: {
                    isPreviousExperienceChecked: true,
                    allExperiences: data.experiences.map(exp => {
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
                            rolesAndResponsibilities: {
                                value: exp.responsibilities.join("\r\n"),
                                placeHolder: 'Enter roles & responsibilities'
                            }
                        };
                    })
                },
                education: data.educations.map(edu => {
                    return {
                        stream: {
                            value: edu.stream,
                            placeHolder: 'STREAM OF GRADUATION'
                        },
                        university: {
                            value: edu.university,
                            placeHolder: 'UNIVERSITY'
                        }
                    };
                }),
                language: data.languages.map(lan => {
                    return {
                        name: lan.language.toLocaleLowerCase(),
                        level: lan.level
                    };
                }),
                achievement: data.moments.map(mom => {
                    return {
                        value: mom.content,
                        placeHolder: 'Enter your achievement'
                    };
                }),
                lifePhilosophyContent: {
                    value: '',
                    placeHolder: 'Write Your Life Philosophy'
                },
                strength: {
                    value: ([].concat.apply([], data.strengths)).join(','),
                    placeHolder: 'Enter strengths with comma separated values'
                }
            }
        };

        this.setState({ userEmail: this.props.location.userInfo.userEmail, userName: this.props.location.userInfo.userName });
        console.log('state from ctor: ', this.state);
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
        updatedFormControls.experience.allExperiences.push({
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
            ...updatedControls.experience.allExperiences[i][name]
        };
        updatedFormElement.value = value;
        updatedControls.experience.allExperiences[i][name] = updatedFormElement;

        this.setState({
            formControls: updatedControls
        });
    }

    changeCurrentEmployerCheck = (i) => {
        const updatedControls = {
            ...this.state.formControls
        };
        const updatedFormElement = {
            ...updatedControls.experience.allExperiences[i]
        };
        updatedFormElement.isCurrentEmployer = !updatedFormElement.isCurrentEmployer;
        updatedControls.experience.allExperiences[i] = updatedFormElement;

        this.setState({
            formControls: updatedControls
        });
    }

    handlePreviousExperienceChecked = (e) => {
        e.preventDefault();

        const updatedControls = {
            ...this.state.formControls
        };

        updatedControls.experience.isPreviousExperienceChecked = !updatedControls.experience.isPreviousExperienceChecked;
        this.setState({
            formControls: updatedControls
        });
    }

    deleteExperience = (e, i) => {
        e.preventDefault();
        const updatedFormControls = {
            ...this.state.formControls
        };
        updatedFormControls.experience.allExperiences.splice(i, 1);
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

    deleteAchievemnt = (e, i) => {
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
        event.preventDefault();

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
            userEmail: this.props.location.userInfo.userEmail,
            userName: this.props.location.userInfo.userName,
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
        for (var i = 0; i < this.state.formControls.experience.allExperiences.length; i += 1) {
            var experience = this.state.formControls.experience.allExperiences[i];
            formData.experiences.push({});
            for (let formElementId in experience) {
                formData.experiences[i][formElementId] = this.state.formControls.experience.allExperiences[i][formElementId].value;
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
            experiences: formControls.experience.allExperiences.map(exp => {
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

        //if (this.state.toPdf === true) {
        //    return (<Redirect to={{ pathname: '/MyCv', state: this.renderToHTMLData() }} />);
        //}

        const resumes = [];

        // Experiences
        const experiences = [];
        for (var i = 0; i < this.state.formControls.experience.allExperiences.length; i += 1) {
            experiences.push(<NewExperience
                key={i}
                index={i}
                innerRef={React.createRef()}
                experience={this.state.formControls.experience.allExperiences[i]}
                handleCurrentEmployerCheck={(idx) => this.changeCurrentEmployerCheck(idx)}
                valueChange={(e, idx) => this.changeExperienceHandler(e, idx)}
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
                valueChange={(e, idx) => this.changeEducationHandler(e, idx)}
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
                delete={(e, idx) => this.deleteAchievemnt(e, idx)} />);
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
            <div>
            <Navbar bg="dark" variant="dark" fixed="top"
                style={{ width: "100%" }}>
                    <Navbar.Brand href="#">Resume Builder App</Navbar.Brand>
            </Navbar>
            <form key="CVFormKey" onSubmit={this.handleSubmit}>
                    <Grid fluid>
                        <Row className="w-100">
                            <Col md={2}>
                                <ul className="list-group">
                                    {this.resumes}
                                </ul>
                            </Col>
                            <Col md={10}>
                                <Row>
                                    <Row>
                                        <ContentHeading name="Personal Info" />
                                        <Row>
                                            <Col md={6}>
                                                <FieldGroup
                                                    name="name"
                                                    id="formControlsName"
                                                    type="text"
                                                    label="Name"
                                                    value={this.state.formControls.personalInfo.name.value}
                                                    placeholder={this.state.formControls.personalInfo.name.placeHolder}
                                                    onChange={this.changePersonalInfoHandler}
                                                />
                                            </Col>
                                            <Col md={6}>
                                                <IconFieldGroup
                                                    name="location"
                                                    id="formControlsLocaiton"
                                                    label="Location"
                                                    value={this.state.formControls.personalInfo.location.value}
                                                    placeholder={this.state.formControls.personalInfo.location.placeHolder}
                                                    icon="fa fa-map-marker"
                                                    onChange={this.changePersonalInfoHandler}
                                                />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md={4}>
                                                <IconFieldGroup
                                                    name="email"
                                                    id="formControlsEmail"
                                                    label="Email address"
                                                    value={this.state.formControls.personalInfo.email.value}
                                                    placeholder={this.state.formControls.personalInfo.email.placeHolder}
                                                    icon="fa fa-at"
                                                    onChange={this.changePersonalInfoHandler}
                                                />
                                            </Col>

                                            <Col md={4}>
                                                <IconFieldGroup
                                                    name="linkedIn"
                                                    id="formControlsLinkedIn"
                                                    label="LinkedIn"
                                                    value={this.state.formControls.personalInfo.linkedIn.value}
                                                    placeholder={this.state.formControls.personalInfo.linkedIn.placeHolder}
                                                    icon="fa fa-linkedin"
                                                    onChange={this.changePersonalInfoHandler}
                                                />
                                            </Col>

                                            <Col md={4}>
                                                <IconFieldGroup
                                                    name="phoneNumber"
                                                    id="formControlsPhone"
                                                    label="Phone number"
                                                    value={this.state.formControls.personalInfo.phoneNumber.value}
                                                    placeholder={this.state.formControls.personalInfo.phoneNumber.placeHolder}
                                                    icon="fa fa-phone"
                                                    onChange={this.changePersonalInfoHandler}
                                                />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md={6}>
                                                <IconFieldGroup
                                                    name="gitURL"
                                                    id="formControlsGitHub"
                                                    label="GitHub/GitLab"
                                                    value={this.state.formControls.personalInfo.gitURL.value}
                                                    placeholder={this.state.formControls.personalInfo.gitURL.placeHolder}
                                                    icon="fa fa-github"
                                                    onChange={this.changePersonalInfoHandler}
                                                />
                                            </Col>

                                            <Col md={6}>
                                                <IconFieldGroup
                                                    name="blogURL"
                                                    id="formControlsBlog"
                                                    label="Blog"
                                                    value={this.state.formControls.personalInfo.blogURL.value}
                                                    placeholder={this.state.formControls.personalInfo.blogURL.placeHolder}
                                                    icon="fa fa-newspaper-o"
                                                    onChange={this.changePersonalInfoHandler}
                                                />
                                            </Col>
                                        </Row>
                                    </Row>
                                    <Row>
                                        <ContentHeading name="Experience" />
                                        <FormGroup>
                                            <Checkbox inline
                                                checked={this.state.formControls.experience.isPreviousExperienceChecked}
                                                onChange={this.handlePreviousExperienceChecked}>
                                                <h4 style={{ 'margin-top': '0px', 'margin-bottom': '0px' }}> Any Previous Experiences?</h4>
                                            </Checkbox>
                                        </FormGroup>
                                        {experiences}
                                        <br />
                                        {this.state.formControls.experience.isPreviousExperienceChecked ?
                                            <Button id="addExpBtn" onClick={this.addExperience}>Add experience</Button> :
                                            null}
                                    </Row>
                                    <br />
                                    <Row>
                                        <Col md={6}>
                                            <ContentHeading name="Education" />
                                            <Button id="addEducationBtn" onClick={this.addEducation}>Add Education</Button>
                                            {educations}
                                        </Col>

                                        <Col md={6}>
                                            <ContentHeading name="Languages" />
                                            <Button id="addLanguageBtn" onClick={this.addLanguage}>Add language</Button>
                                            {languages}
                                        </Col>
                                    </Row>
                                    <br />
                                    <Row>
                                        <ContentHeading name="Life Philosophy" />
                                        <FieldGroup
                                            name="LifePhilosophyContent"
                                            componentClass="textarea"
                                            id="formControlsLifePhilosophy"
                                            value={this.state.formControls.lifePhilosophyContent.value}
                                            placeholder={this.state.formControls.lifePhilosophyContent.placeHolder}
                                            onChange={this.changeLifePhilosophyHandler}
                                        />
                                    </Row>
                                    <br />
                                    <Row>
                                        <Col md={6}>
                                            <ContentHeading name="Most Proud Of" />
                                            <Button onClick={this.addAchievement} >Add Your Achievements</Button>
                                            {achievements}
                                        </Col>
                                        <Col md={6}>
                                            <ContentHeading name="Strengths" />
                                            <FormControl style={{ height: 100 }}
                                                name="strength"
                                                componentClass="textarea"
                                                value={this.state.formControls.strength.value}
                                                placeholder={this.state.formControls.strength.placeHolder}
                                                onChange={this.changeStrengthsHandler}
                                            />
                                        </Col>
                                    </Row>
                                    <br />
                                    <br />
                                    <Button type="submit">Save & Render as HTML</Button>
                                </Row>
                            </Col>
                        </Row>
                </Grid>
                </form >
            </div>
        );
    }
}