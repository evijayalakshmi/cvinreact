import React, { Component } from 'react';
import { Col, Grid, Row, FormGroup, FormControl, ControlLabel, Checkbox, Radio, HelpBlock, Button, InputGroup } from 'react-bootstrap';
import { IconFieldGroup } from '../IconFieldGroup';

export default class NewAchievement extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div>
                <Grid>
                    <Row>
                        <Col md={6}>
                            <IconFieldGroup
                                name="achievement"
                                id="formControlsachievement"
                                label="Add Achievement"
                                placeholder="Enter your achievement"
                                icon="fa fa-trophy fa-1x"
                                componentClass="textarea"
                            />
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}