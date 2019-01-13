import React, { Component } from 'react';
import { Col, Grid, Row } from 'react-bootstrap';


export class PersonalInfo extends Component {
    displayName = PersonalInfo.name;

    render() {
        var linkedin = "https://www.linkedin.com/in/vijaya-lakshmi-edupuganti/";
        return (
            <div>
                <h1><b> {this.props.info.Name.toUpperCase()}</b></h1>
                <h4> {this.props.info.Designation} </h4>
                <Row>
                    <Col xs={4} md={4}>
                        <i className="fa fa-at"></i>
                        <span> {this.props.info.Email} </span>
                    </Col>
                    <Col xs={4} md={5}>
                        { this.props.info.blog !== ''  ?
                            [<i className="fa fa-map-marker"></i>, <span> {this.props.info.blog} </span>] :
                            null }
                    </Col>
                    <Col xs={4} md={3}>
                        <i className="fa fa-map-marker"></i>
                        <span> {this.props.info.Address} </span>
                    </Col>
                </Row>
                <br />
            </div>
        );
    }
}