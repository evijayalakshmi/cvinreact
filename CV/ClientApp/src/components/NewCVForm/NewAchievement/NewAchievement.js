import React, { Component } from 'react';
import { Col, Grid, Row, FormGroup, FormControl, ControlLabel, Checkbox, Radio, HelpBlock, Button, InputGroup } from 'react-bootstrap';
import { IconFieldGroup } from '../IconFieldGroup';

export default class NewAchievement extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <Row  ref={this.props.innerRef}>
                <Col md={10}>
                    <IconFieldGroup
                        name="achievement"
                        id="formControlsachievement"
                        value={this.props.achievement.value}
                        placeholder={this.props.achievement.placeHolder}
                        icon="fa fa-trophy fa-1x"
                        componentClass="textarea"
                        onChange={(e) => this.props.valueChange(e, this.props.index)}
                    />
                </Col>
                <Col md={2}>
                    <Button onClick={(e) => this.props.delete(e, this.props.index)}><i class="fa fa-times"></i></Button>
                </Col>
            </Row>
        )
    }
}