import React, { Component } from 'react';
import { Col, Grid, Row, FormGroup, FormControl, ControlLabel, Checkbox, Radio, HelpBlock, Button, InputGroup } from 'react-bootstrap';
import { FieldGroup } from '../FieldGroup';
import { IconFieldGroup } from '../IconFieldGroup';
import DatePicker from 'react-bootstrap-date-picker';

export class NewEducation extends Component {
    constructor(props, context) {
        super(props, context)
    };

    render() {
        return (
            <div>
                <Grid className="experience-style" ref={this.props.innerRef}>
                    <Row>
                        <Col md={4}>
                            <FieldGroup
                                name="stream"
                                id="formControlseducationStream"
                                type="text"
                                value={this.props.education.stream.value}
                                placeholder={this.props.education.stream.placeHolder}
                                onChange={(e) => this.props.valueChange(e, this.props.index)}
                                required="true"
                            />
                        </Col>
                        <Col md={4}>
                            <FieldGroup
                                name="university"
                                id="formControlseducationUniversity"
                                type="text"
                                value={this.props.education.university.value}
                                placeholder={this.props.education.university.placeHolder}
                                onChange={(e) => this.props.valueChange(e, this.props.index)}
                            />
                        </Col>
                        <Col md={4}>
                            <Button type="submit" onClick={(e) => this.props.delete(e, this.props.index)}>
                                <i class="fa fa-times"> Delete Education</i></Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={8}>
                            <Col md={6}>
                                <FormGroup>
                                    <ControlLabel>From</ControlLabel>
                                    <DatePicker
                                        id="ed-fromDatepicker"
                                        value={this.props.education.fromDate.value}
                                        onChange={(v, fv) => this.props.dateValueChange('fromDate', v, fv, this.props.index)}
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <ControlLabel>To</ControlLabel>
                                    <DatePicker id="ed-toDatepicker"
                                        value={this.props.education.toDate.value}
                                        disabled={this.props.education.isCurrentStudent}
                                        onChange={(v, fv) => this.props.dateValueChange('toDate', v, fv, this.props.index)}
                                    />
                                </FormGroup>
                            </Col>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Checkbox inline checked={this.props.education.isCurrentStudent}
                                    onChange={() => this.props.handleCurrentStudentCheck(this.props.index)}>
                                    <h4 style={{ 'margin-top': '0px', 'margin-bottom': '0px' }}> Current Studnet? </h4>
                                </Checkbox>
                            </FormGroup>
                        </Col>
                    </Row>
                </Grid>
                <br></br>
            </div>
        )
    }
}