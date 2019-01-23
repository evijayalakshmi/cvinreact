import React, { Component } from 'react';
import { Col, Grid, Row, FormGroup, FormControl, ControlLabel, Checkbox, Radio, HelpBlock, Button, InputGroup } from 'react-bootstrap';
import { FieldGroup } from './FieldGroup';

export default class NewExperience extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            jobTitle: '',
            company: '',
            location: ''
        }
    }

    render() {
        return (
            <Grid>
                <Button type="submit">delete expereince</Button>
                <Row>
                    <Col md={4}>
                        <FieldGroup
                            id="formControlsTitle"
                            type="text"
                            label="Title"
                            placeholder="Enter title"
                            required="true"
                        />
                    </Col>
                    <Col md={4}>
                        <FieldGroup
                            id="formControlsCompany"
                            type="text"
                            label="Company"
                            placeholder="Enter company"
                            required="true"
                        />
                    </Col>
                    <Col md={4}>
                        <FieldGroup
                            id="formControlsLocation"
                            type="text"
                            label="Location"
                            placeholder="Enter location"
                            required="true"
                        />
                    </Col>
                </Row>
            </Grid>
        );
    }
}
