import React, { Component } from 'react';
import { Col, Grid, Row, FormGroup, FormControl, ControlLabel, Checkbox, Radio, HelpBlock, Button, InputGroup } from 'react-bootstrap';
import { ContentHeading } from '../ContentHeading/ContentHeading';
import { FieldGroup } from './FieldGroup';
import { IconFieldGroup } from './IconFieldGroup';
import NewExperience from './NewExperience/NewExprience';
import NewAchievement from './NewAchievement/NewAchievement';
import './NewCVForm.css';
import { NewEducation } from './NewEducation/NewEducation';

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
                achievements: [

                ],
                lifePhilosophyContent: {
                    value: '',
                    placeHolder: 'Write Your Life Philosophy'
                },
                education: []
            }
        }
    };

    dislayName = NewCVForm.name;
    emptyExperience = {
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
    }

    emptyEducation = {
        educationUniversity: {
            value: '',
            placeHolder: 'UNIVERSITY'
        },
        educationStream: {
            value: '',
            placeHolder: 'STREAM OF GRADUATION'
        }

    }

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

    handlePreviousExperienceChecked = (e) => {
        const updatedControls = {
            ...this.state.formControls
        };

        updatedControls.experience.isPreviousExperienceChecked = !updatedControls.experience.isPreviousExperienceChecked;
        //this.setState({ isExpChecked: !this.state.isExpChecked });
        this.setState({
            formControls: updatedControls
        });
    }

    addExperience = (e) => {
        const updatedFormControls = {
            ...this.state.formControls
        };
        updatedFormControls.experience.allExperiences.push(this.emptyExperience);
        this.setState({
            formControls: updatedFormControls
        });
    }

    deleteExperience = (i) => {
        const updatedFormControls = {
            ...this.state.formControls
        };
        updatedFormControls.experience.allExperiences.splice(i, 1);
        this.setState({
            formControls: updatedFormControls
        });
    }

    addEducation = (e) => {
        const updatedFormControls = {
            ...this.state.formControls
        };
        updatedFormControls.education.push(this.emptyEducation);
        this.setState({
            formControls: updatedFormControls
        });
    }

    addAchievement = (e) => {
        debugger;
        const updatedControls = {
            ...this.state
        };
        updatedControls.numAchievements = this.state.numAchievements + 1;
        this.setState({
            numAchievements: updatedControls.numAchievements
        });
    }

    handleSubmit = (e) => {
        console.log('state value is ', this.state);
        const formData = {
            personalInfo: {}
        };
        for (let formElementId in this.state.formControls.personalInfo) {
            formData.personalInfo[formElementId] = this.state.formControls.personalInfo[formElementId].value;
        }

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
            experiences.push(<NewExperience key={i} experience={this.state.formControls.experience.allExperiences[i]} delete={() => this.deleteExperience(i)} />);
        };

        const educations = [];
        for (var i = 0; i < this.state.formControls.education.length; i += 1) {
            educations.push(<NewEducation key={i} education={this.state.formControls.education[i]} />);
        };

        const achievements = [];
        for (var i = 0; i < this.state.numAchievements; i += 1) {
            achievements.push(<NewAchievement key={i} />);
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
                            <Button id="addEducationBtn" onClick={this.addEducation}>Add Education </Button>
                            <NewEducation key={i} education={this.state.formControls.education[i]} />
                        </Col>

                        <Col md={6} style={{ 'padding-right': '0px' }}>
                            <ContentHeading name="Languages" />
                            <Col md={6}>
                                <FormControl componentClass="select" placeholder="select" className="languagesDropdown">
                                    <option value="select" active>SELECT LANGUAGE</option>
                                    <option value="english">English</option>
                                    <option value="finnish">Finnish</option>
                                    <option value="swedish">Swedish</option>
                                </FormControl>
                            </Col>
                            <Col md={6}>
                                <ControlLabel> Select Level </ControlLabel>
                                <br />
                                <Radio name="radioGroup" inline>
                                    1
                                    </Radio>{' '}
                                <Radio name="radioGroup" inline>
                                    2
                                    </Radio>{' '}
                                <Radio name="radioGroup" inline>
                                    3
                                    </Radio>{' '}
                                <Radio name="radioGroup" inline>
                                    4
                                    </Radio>{' '}
                                <Radio name="radioGroup" inline>
                                    5
                                    </Radio>{' '}
                            </Col>
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
                            onChange={this.changePersonalInfoHandler}
                        />
                    </Row>
                    <br />

                    <br />
                    <Row>
                        <Col md={6} style={{ 'padding-left': '0px' }}>
                            <ContentHeading name="Most Proud Of" />
                            <Button onClick={this.addAchievement} >Add Your Achievements</Button>
                            {achievements}
                        </Col>
                        <Col md={6} style={{ 'padding-right': '0px' }}>
                            <ContentHeading name="Strenghts" />
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