import React, { Component } from 'react';
import { Col, Grid, Row, FormGroup, FormControl, ControlLabel, Checkbox, Radio, HelpBlock, Button, InputGroup } from 'react-bootstrap';
import { ContentHeading } from '../ContentHeading/ContentHeading';
import { FieldGroup } from './FieldGroup';
import { IconFieldGroup } from './IconFieldGroup';
import NewExperience from './NewExperience/NewExprience';
import NewAchievement from './NewAchievement/NewAchievement';
import './NewCVForm.css';
import { NewEducation } from './NewEducation/NewEducation';
import { NewLanguage } from './NewLanguage/NewLanguage';

export class NewCVForm extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            numAchievements: 0,
            formControls: {
                personalInfo: {
                    name: {
                        value: '',
                        placeHolder: 'Enter name'
                    },
                    location: {
                        value: '',
                        placeHolder: 'Enter location'
                    },
                    email: {
                        value: '',
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
                        value: '',
                        placeHolder: 'Enter blog URL'
                    }
                },
                experience: {
                    isPreviousExperienceChecked: false,
                    allExperiences: []
                },
                education: [],
                language: [],
                achievements: [],
                lifePhilosophyContent: {
                    value: '',
                    placeHolder: 'Write Your Life Philosophy'
                },
                strength: {
                    value: '',
                    placeHolder: 'Enter strengths with comma separated values'
                }
            }
        }
    };

    dislayName = NewCVForm.name;

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

    addEducation = (e) => {
        e.preventDefault();

        const updatedFormControls = {
            ...this.state.formControls
        };
        updatedFormControls.education.push({
            educationStream: {
                value: '',
                placeHolder: 'STREAM OF GRADUATION'
            },
            educationUniversity: {
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

    addAchievement = (e) => {
        e.preventDefault();

        const updatedControls = {
            ...this.state
        };
        updatedControls.numAchievements = this.state.numAchievements + 1;
        this.setState({
            numAchievements: updatedControls.numAchievements
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
            ...updatedControls.achievement[i][name]
        };
        updatedFormElement.value = value;
        updatedControls.achievement[i][name] = updatedFormElement;

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

    addLanguage = (e) => {
        e.preventDefault();

        const updatedFormControls = {
            ...this.state.formControls
        };
        updatedFormControls.language.push({
            language: '',
            level: 0
        });
        this.setState({
            formControls: updatedFormControls
        });
    }

    changeLanguageHandler = (event, i) => {
        event.preventDefault();

        const name = event.target.name;
        const value = event.target.value;

        const updatedControls = {
            ...this.state.formControls
        };
        const updatedFormElement = {
            ...updatedControls.language[i][name]
        };
        updatedFormElement.value = value;
        updatedControls.language[i][name] = updatedFormElement;

        this.setState({
            formControls: updatedControls
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

    handleSubmit = (e) => {
        console.log('state value is ', this.state);
        const formData = {
            personalInfo: {},
            experiences: [],
        };

        // personal info
        for (let formElementId in this.state.formControls.personalInfo) {
            formData.personalInfo[formElementId] = this.state.formControls.personalInfo[formElementId].value;
        }

        // Experience
        for(var i = 0; i < this.state.formControls.experience.allExperiences.length; i += 1) {
            var experience = this.state.formControls.experience.allExperiences[i];
            formData.experiences.push({});
            for (let formElementId in experience) {
                formData.experiences[i][formElementId] = this.state.formControls.experience.allExperiences[i][formElementId].value;
            }
        }

        // Education
        // for (let formElementId in this.state.formControls.education) {
        //     formData.personalInfo[formElementId] = this.state.formControls.personalInfo[formElementId].value;
        // }

        console.log(formData);
        fetch('api/ResumeData/SaveToMongoDB', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        e.preventDefault();
    }

    render() {
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
        };

        const educations = [];
        for (var i = 0; i < this.state.formControls.education.length; i += 1) {
            educations.push(<NewEducation
                key={i}
                index={i}
                innerRef={React.createRef()}
                education={this.state.formControls.education[i]}
                valueChange={(e, idx) => this.changeEducationHandler(e, idx)}
                delete={(e, idx) => this.deleteEducation(e, idx)} />);
        };

        const achievements = [];
        for (var i = 0; i < this.state.formControls.achievements.length; i += 1) {
            achievements.push(<NewAchievement
                key={i}
                index={i}
                innerRef={React.createRef()}
                achievement={this.state.formControls.achievement[i]}
                valueChange={(e, idx) => this.changeAchievementHandler(e, idx)}
                delete={(e, idx) => this.deleteAchievemnt(e, idx)} />);
        }

        const languages = [];
        for (var i = 0; i < this.state.formControls.language.length; i += 1) {
            languages.push(<NewLanguage
                key={i}
                index={i}
                innerRef={React.createRef()}
                language={this.state.formControls.language[i]}
                valueChange={(e, idx) => this.changeLanguageHandler(e, idx)}
                delete={(e, idx) => this.deleteLanguage(e, idx)} />);
        }

        return (
            <form key="CVFormKey" onSubmit={this.handleSubmit}>
                <Grid>
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
                            <Checkbox inline checked={this.state.formControls.experience.isPreviousExperienceChecked} onChange={this.handlePreviousExperienceChecked}>
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
                            <FormControl
                                name="strength"
                                componentClass="textarea"
                                value={this.state.formControls.strength.value}
                                placeholder={this.state.formControls.strength.placeHolder} />
                        </Col>
                    </Row>
                    <br />
                    <br />
                    <Button type="submit">Submit</Button>
                </Grid>
            </form >
        );
    }
}