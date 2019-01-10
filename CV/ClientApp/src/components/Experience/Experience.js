import React, { Component } from 'react';
import { Col, Grid, Row } from 'react-bootstrap';

import { ContentHeading } from '../ContentHeading/ContentHeading';

export class Experience extends Component {
    displayName = Experience.name;

    render() {
        return (
            <div>
                <ContentHeading name="Experience" />
                <h4>{this.props.experience.title}</h4>
                <h4><b>{this.props.experience.company}</b></h4>
                <Row>
                    <Col xs={6} md={6}>
                        <i className="fa fa-calendar"></i> {this.props.experience.from} - {this.props.experience.to}
                    </Col>
                    <Col xs={6} md={6}>
                        <i className="fa fa-map-marker"></i> {this.props.experience.location}
                    </Col>
                </Row>
                <br/>
                <ul>
                    {this.props.experience.responsibilities.map(function (name, index) {
                        return <li key={index}>{name}</li>;
                    })}
                </ul>
            </div>
        );
    }
}