import React, { Component } from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
import './ProudOf.css';

export class ProudOf extends Component {
    dispalyName = ProudOf.name;

    render() {

        return (
            <Row>
                <Col md={2} sm={2}>
                    <i className={this.props.moment.icon} />
                </Col>
                <Col md={10} sm={10}>
                    <h5 className="heading5"><b>{this.props.moment.heading} </b></h5>
                    <p className="text">{this.props.moment.content}</p>
                </Col>
            </Row>
        );
    }

}