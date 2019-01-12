import React, { Component } from 'react';
import { Col, Grid, Row } from 'react-bootstrap';


export class PersonalInfo extends Component {
    displayName = PersonalInfo.name;


    render() {
        return (
            <div>
                <h1><b> {this.props.info.Name.toUpperCase()}</b></h1>
                <h4> {this.props.info.Designation} </h4>
                <Row>
                    <Col xs={4} md={4}>
                        <i className="fa fa-at"></i> {this.props.info.Email}
                    </Col>
                    <Col xs={4} md={5}>
                        <i className="fa fa-map-marker"></i> {this.props.info.blog}
                    </Col>
                    <Col xs={4} md={3}>
                        <i className="fa fa-map-marker"></i> {this.props.info.Address}
                    </Col>
                </Row>
                <br />
            </div>
        );
    }
}