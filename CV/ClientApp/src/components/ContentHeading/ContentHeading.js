import React, { Component } from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
import './ContentHeading.css';

export class ContentHeading extends Component {
    displayName = ContentHeading.name;

    render() {
        return (
            <div className="clearfix">
                <h1 className="heading clearfix">{this.props.name}</h1>
                <hr className="line" />
            </div>
                );
            }
}