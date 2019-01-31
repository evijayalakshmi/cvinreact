import React, { Component } from 'react';
import { Col, Grid, Row, FormGroup, FormControl, ControlLabel, Checkbox, Radio, HelpBlock, Button, InputGroup } from 'react-bootstrap';
import { FieldGroup } from '../FieldGroup';
import { IconFieldGroup } from '../IconFieldGroup';

export class NewEducation extends Component {
    constructor(props, context) {
        super(props, context)
    };

    render() {
        return (
            <Row>
                <Col md={6} style={{ 'padding-left': '0px' }}>
                    <FieldGroup
                        name="educationStream"
                        id="formControlseducationStream"
                        type="text"
                        value={this.props.education.educationStream.value}
                        placeholder={this.props.education.educationStream.placeHolder}
                        onChange={this.changePersonalInfoHandler}
                    />
                </Col>
                <Col md={6}>
                    <FieldGroup
                        name="educationUniversity"
                        id="formControlseducationUniversity"
                        type="text"
                        value={this.props.education.educationUniversity.value}
                        placeholder={this.props.education.educationUniversity.placeHolder}
                        onChange={this.changePersonalInfoHandler}
                    />
                </Col>
            </Row>
        )
    }
}