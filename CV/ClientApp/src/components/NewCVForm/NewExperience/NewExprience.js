import React, { Component } from 'react';
import { Col, Grid, Row, FormGroup, FormControl, ControlLabel, Checkbox, Radio, HelpBlock, Button, InputGroup, RadioGroup, RadioButton, ReversedRadioButton } from 'react-bootstrap';
import { FieldGroup } from '../FieldGroup';
import './NewExperience.css';
import DatePicker from 'react-bootstrap-date-picker';
import '../NewCVForm.css';


export default class NewExperience extends Component {

    constructor(props, context) {
        super(props, context);
       
    }

    handleChecked = (e) => {

        this.setState({ isCurrentEmpChecked: !this.state.isCurrentEmpChecked });
    }

    render() {
        return (
            <div>
                <Grid className="experience-style">
                    <Row>
                        <Col md={4}>
                            <FieldGroup
                                name="title"
                                id="formControlsTitle"
                                type="text"
                                label="Title"
                                value={this.props.experience.title.value}
                                placeholder={this.props.experience.title.placeHolder}
                                required="true"
                                onChange={(e) => this.props.valueChange(e)}
                            />
                        </Col>
                        <Col md={4}>
                            <FieldGroup
                                name="company"
                                id="formControlsCompany"
                                type="text"
                                label="Company"
                                value={this.props.experience.company.value}
                                placeholder={this.props.experience.company.placeHolder}
                                required="true"
                                onChange={(e) => this.props.valueChange(e)}
                            />
                        </Col>
                        <Col md={4}>
                            <FieldGroup
                                name="location"
                                id="formControlsLocation"
                                type="text"
                                label="Location"
                                value={this.props.experience.location.value}
                                placeholder={this.props.experience.location.placeHolder}
                                required="true"
                                onChange={(e) => this.props.valueChange(e)}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <FormGroup>
                                <Checkbox inline checked={this.props.experience.isCurrentEmployer}
                                    onChange={this.props.handleCurrentEmployerCheck}>
                                    <h4 style={{ 'margin-top': '0px', 'margin-bottom': '0px' }}> Current Employer? </h4>
                                </Checkbox>
                            </FormGroup>
                        </Col>

                        <Col md={6}>
                            <Col md={6}>
                                <FormGroup>
                                    <ControlLabel>From</ControlLabel>
                                    <DatePicker
                                        id="ex-fromDatepicker"
                                        value={this.props.experience.fromDate}
                                        />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <ControlLabel>To</ControlLabel>
                                    <DatePicker id="ex-toDatepicker" value={this.props.experience.toDate}
                                        disabled={this.props.experience.isCurrentEmployer} />
                                </FormGroup>
                            </Col>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={8}>
                            <FormGroup controlId="formControlsTextarea">
                                <ControlLabel>Roles & Responsibilities</ControlLabel>
                                <FormControl
                                    name="rolesAndResponsibilities"
                                    componentClass="textarea"
                                    placeholder="Roles & Responsibilities"
                                    onChange={(e) => this.props.valueChange(e)}/>
                            </FormGroup>
                        </Col>
                        <Col md={3} xsOffset={1}>
                            <label> Delete Experience</label>
                            <br />
                            <Button type="submit" onClick={this.props.delete}>Delete Experience</Button>
                        </Col>
                    </Row>
                </Grid>
                <br></br>
            </div >
        );
    }
}
