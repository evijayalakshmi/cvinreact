import React, { Component } from 'react';
import { Col, Grid, Row, FormGroup, FormControl, ControlLabel, Checkbox, Radio, HelpBlock, Button, InputGroup } from 'react-bootstrap';
import './NewLanguage.css';

export class NewLanguage extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <Row>
                <Col md={6}>
                    <FormControl componentClass="select" placeholder="select" className="languagesDropdown">
                        <option value="select" active>SELECT LANGUAGE</option>
                        <option value="english">English</option>
                        <option value="finnish">Finnish</option>
                        <option value="swedish">Swedish</option>
                    </FormControl>
                </Col>
                <Col md={4}>
                    <Radio name="radioGroup" inline>
                        1
                        </Radio>
                    <Radio name="radioGroup" inline>
                        2
                        </Radio>
                    <Radio name="radioGroup" inline>
                        3
                        </Radio>
                    <Radio name="radioGroup" inline>
                        4
                        </Radio>
                    <Radio name="radioGroup" inline>
                        5
                        </Radio>
                </Col>
                <Col md={2}>
                    <Button type="submit" onClick={(e) => this.props.delete(e, this.props.index)}><i class="fa fa-times"></i></Button>
                </Col>
            </Row>
        )
    }
}