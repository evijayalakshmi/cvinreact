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
            <Row ref={this.props.innerRef}>
                <Col md={5}>
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
                <Col md={5}>
                    <FieldGroup
                        name="university"
                        id="formControlseducationUniversity"
                        type="text"
                        value={this.props.education.university.value}
                        placeholder={this.props.education.university.placeHolder}
                        onChange={(e) => this.props.valueChange(e, this.props.index)}
                    />
                </Col>
                <Col md={2}>
                    <Button type="submit" onClick={(e) => this.props.delete(e, this.props.index)}><i class="fa fa-times"></i></Button>
                </Col>
            </Row>
        )
    }
}