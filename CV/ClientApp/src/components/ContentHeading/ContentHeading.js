import React, { Component } from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
import './ContentHeading.css';

export class ContentHeading extends Component {
    displayName = ContentHeading.name;

    render() {
        return (
            <div>
                <h3 className="heading"><b>{this.props.name.toUpperCase()}</b></h3>
            </div>
        );
    }
}