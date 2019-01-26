import React, { Component } from 'react';
import { Col, Grid, Row, FormGroup, FormControl, ControlLabel, Checkbox, Radio, HelpBlock, Button, InputGroup } from 'react-bootstrap';
import { ContentHeading } from '../ContentHeading/ContentHeading';
import { FieldGroup } from './FieldGroup';
import { IconFieldGroup } from './IconFieldGroup';
import NewExperience from './NewExprience';

export default class NewCVForm extends Component {

    dislayName = NewCVForm.name;
    experiencesList = [];

    constructor(props, context) {
        super(props, context);

        this.state = {
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
                }
            }
        };
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

    addExperience = (e) => {
        e.preventDefault();
        console.log('experiences ', this.state.experiences);
        this.state.experiences.push(<NewExperience />);
        console.log('experiences ', this.state.experiences);
    }

    render() {
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
                        <Button type="submit" onClick={this.addExperience}>Add expereince</Button>
                        {this.state.experiences}
                    </Row>
                    <Button type="submit">Submit</Button>
                </Grid>
            </form>
        );
    }
}