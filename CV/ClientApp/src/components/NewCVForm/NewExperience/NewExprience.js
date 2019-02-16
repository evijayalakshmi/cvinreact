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
                <Grid className="experience-style" ref={this.props.innerRef}>
                    <Row>
                        <Col xs={12}>
                            <Col md={4}>
                                <FieldGroup
                                    name="title"
                                    id="formControlsTitle"
                                    type="text"
                                    label="Title"
                                    value={this.props.experience.title.value}
                                    placeholder={this.props.experience.title.placeHolder}
                                    required="true"
                                    onChange={(e) => this.props.valueChange(e, this.props.index)}
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
                                    onChange={(e) => this.props.valueChange(e, this.props.index)}
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
                                    onChange={(e) => this.props.valueChange(e, this.props.index)}
                                />
                            </Col>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <Col md={4}>
                                <FormGroup>
                                    <ControlLabel>From</ControlLabel>
                                    <DatePicker
                                        id="ex-fromDatepicker"
                                        value={this.props.experience.fromDate.value}
                                        onChange={(v, fv) => this.props.dateValueChange('fromDate', v, fv, this.props.index)}
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <ControlLabel>To</ControlLabel>
                                    <DatePicker id="ex-toDatepicker"
                                        value={this.props.experience.toDate.value}
                                        disabled={this.props.experience.isCurrentEmployer}
                                        onChange={(v, fv) => this.props.dateValueChange('toDate', v, fv, this.props.index)}
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Checkbox inline checked={this.props.experience.isCurrentEmployer}
                                        onChange={() => this.props.handleCurrentEmployerCheck(this.props.index)}>
                                        <h4 style={{ 'margin-top': '0px', 'margin-bottom': '0px' }}> Current Employer? </h4>
                                    </Checkbox>
                                </FormGroup>
                            </Col>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <Col md={8}>
                                <FormGroup controlId="formControlsTextarea">
                                    <ControlLabel>Roles & Responsibilities</ControlLabel>
                                    <FormControl style={{ height: 100 }}
                                        name="rolesAndResponsibilities"
                                        componentClass="textarea"
                                        placeholder="Roles & Responsibilities"
                                        value={this.props.experience.rolesAndResponsibilities.value}
                                        onChange={(e) => this.props.valueChange(e, this.props.index)} />
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <Button type="submit" onClick={(e) => this.props.delete(e, this.props.index)}>
                                    <i class="fa fa-times"> Delete Experience</i></Button>
                            </Col>
                        </Col>
                    </Row>
                </Grid>
                <br></br>
            </div >
        );
    }
}
