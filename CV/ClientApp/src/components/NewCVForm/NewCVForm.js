import React, { Component } from 'react';
import { Col, Grid, Row, FormGroup, FormControl, ControlLabel, Checkbox, Radio, HelpBlock, Button, InputGroup } from 'react-bootstrap';
import { ContentHeading } from '../ContentHeading/ContentHeading';
import { FieldGroup } from './FieldGroup';
import { IconFieldGroup } from './IconFieldGroup';
import NewExperience from './NewExperience/NewExprience';
import NewAchievement from './NewAchievement/NewAchievement';

export class NewCVForm extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            numExperiences: 0,
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
                    },
                    LifePhilosophyContent: {
                        value: '',
                        placeHolder: 'Write Your Life Philosophy'
                    }
                },
                experiences: [

                ]
            },
            achievements: [

            ]
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

    handleSubmit = (e) => {
        debugger;
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

    addExperience = (e) => {
        const updatedControls = {
            ...this.state
        };
        updatedControls.numExperiences = this.state.numExperiences + 1;
        this.setState({
            numExperiences: updatedControls.numExperiences
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

    render() {

        const experiences = [];
        for (var i = 0; i < this.state.numExperiences; i += 1) {
            experiences.push(<NewExperience key={i} />);
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
                        {experiences}
                        <br />
                        <Button onClick={this.addExperience}>Add experience</Button>
                    </Row>
                    <Row>
                        <ContentHeading name="Life Philosophy" />
                        <FieldGroup
                            name="LifePhilosophyContent"
                            componentClass="textarea"
                            id="formControlsLifePhilosophy"
                            label="Life Philosophy"
                            value={this.state.formControls.personalInfo.LifePhilosophyContent.value}
                            placeholder={this.state.formControls.personalInfo.LifePhilosophyContent.placeHolder}
                            onChange={this.changePersonalInfoHandler}
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
                            <ContentHeading name="Strenghts" />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col md={6}>
                            <ContentHeading name="Languages" />
                            <Col md={6}>
                                <h4> Select Language </h4>
                                <FormControl componentClass="select" placeholder="select" className="languagesDropdown">
                                    <option value="select" active>Select</option>
                                    <option value="english">English</option>
                                    <option value="finnish">Finnish</option>
                                    <option value="swedish">Swedish</option>
                                </FormControl>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <h4> Level </h4>
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
                                </FormGroup>
                            </Col>
                        </Col>
                    </Row>
                    <br />
                    <br />
                    <Button type="submit">Submit</Button>
                </Grid>
            </form>
        );
    }
}