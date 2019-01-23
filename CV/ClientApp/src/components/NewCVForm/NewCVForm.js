import React, { Component } from 'react';
import { Col, Grid, Row, FormGroup, FormControl, ControlLabel, Checkbox, Radio, HelpBlock, Button, InputGroup } from 'react-bootstrap';
import { ContentHeading } from '../ContentHeading/ContentHeading';
import { FieldGroup } from './FieldGroup';
import { IconFieldGroup } from './IconFieldGroup';
import NewExperience from './NewExprience';

export default class NewCVForm extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            personalInfo: {
                name: '',
                location: '',
                email: '',
                linkedIn: '',
                phoneNumber: '',
                gitURL: '',
                blogURL: ''
            },
            experiences: []
        };
      }

    dislayName = NewCVForm.name;

    handleChange = (e) => {
        this.setState({ personalInfo: { name: e.target.value }});
    }

    handleSubmit = (e) => {
        console.log('state value is ', this.state);
    }

    addExprience = () => {
        const expriencesList = this.state.experiences;
        this.setState({ experiences: expriencesList.concat(<NewExperience />) })
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
                                    id="formControlsName"
                                    type="text"
                                    label="Name"
                                    value={this.state.personalInfo.name}
                                    placeholder="Enter name"
                                    onChange={this.handleChange}
                                />
                            </Col>
                            <Col md={6}>
                                <IconFieldGroup
                                    id="formControlsLocaiton"
                                    label="Location"
                                    placeholder="Enter Location"
                                    icon="fa fa-map-marker"
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col md={4}>
                                <IconFieldGroup
                                    id="formControlsEmail"
                                    label="Email address"
                                    placeholder="Enter email"
                                    icon="fa fa-at"
                                />
                            </Col>

                            <Col md={4}>
                                <IconFieldGroup
                                    id="formControlsLinkedIn"
                                    label="LinkedIn"
                                    placeholder="Enter LinkedIn URL"
                                    icon="fa fa-linkedin"
                                />
                            </Col>

                            <Col md={4}>
                                <IconFieldGroup
                                    id="formControlsPhone"
                                    label="Phone number"
                                    placeholder="Enter phonenumber"
                                    icon="fa fa-phone"
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <IconFieldGroup
                                    id="formControlsGitHub"
                                    label="GitHub/GitLab"
                                    placeholder="Enter URL"
                                    icon="fa fa-github"
                                />
                            </Col>

                            <Col md={6}>
                                <IconFieldGroup
                                    id="formControlsBlog"
                                    label="Blog"
                                    placeholder="Enter blog URL"
                                    icon="fa fa-newspaper-o"
                                />
                            </Col>
                        </Row>
                    </Row>
                    <Row>
                        <ContentHeading name="Experience" />
                        <Button type="submit" onClick={this.addExprience}>Add expereince</Button>
                        {this.state.experiences}
                    </Row>
                </Grid>
                <Button type="submit">Submit</Button>
            </form>
        );
    }
}