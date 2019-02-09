﻿import React, { Component } from 'react';
import { Col, Grid, ButtonGroup, Row, FormGroup, FormControl, ControlLabel, Checkbox, Radio, HelpBlock, Button, InputGroup } from 'react-bootstrap';
import './NewLanguage.css';

export class NewLanguage extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <Row ref={this.props.innerRef}>
                <Col md={5}>
                    <FormControl style={{ width: 200 }}
                        name="name"
                        componentClass="select"
                        placeholder="select"
                        className="languagesDropdown"
                        value={this.props.language.name}
                        onChange={(e) => this.props.selectionChange(e, this.props.index)}>
                        <option value="select" active>SELECT LANGUAGE</option>
                        <option value="english">English</option>
                        <option value="finnish">Finnish</option>
                        <option value="swedish">Swedish</option>
                        <option value="spanish">Spanish</option>
                        <option value="german">German</option>
                    </FormControl>
                </Col>
                <Col md={5}>
                    <Radio
                        name={this.props.levelGroupName} inline
                        onChange={(e) => this.props.selectionChange(e, this.props.index)}
                        value="1"
                        checked={this.props.language.level === 1}> 1</Radio>
                    <Radio
                        name={this.props.levelGroupName} inline
                        onChange={(e) => this.props.selectionChange(e, this.props.index)}
                        value="2"
                        checked={this.props.language.level === 2}>2</Radio>
                    <Radio
                        name={this.props.levelGroupName}
                        inline onChange={(e) => this.props.selectionChange(e, this.props.index)}
                        value="3"
                        checked={this.props.language.level === 3}>3</Radio>
                    <Radio
                        name={this.props.levelGroupName} inline
                        onChange={(e) => this.props.selectionChange(e, this.props.index)}
                        value="4"
                        checked={this.props.language.level === 4}>4</Radio>
                    <Radio
                        name={this.props.levelGroupName} inline
                        onChange={(e) => this.props.selectionChange(e, this.props.index)}
                        value="5"
                        checked={this.props.language.level === 5}>5</Radio>
                </Col>
                <Col md={2}>
                    <Button onClick={(e) => this.props.delete(e, this.props.index)}>
                        <i className="fa fa-times" />
                    </Button>
                </Col>
            </Row>
        );
    }
}