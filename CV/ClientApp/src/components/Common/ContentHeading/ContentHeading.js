import React, { Component } from 'react';
import './ContentHeading.css';

export class ContentHeading extends Component {
    displayName = ContentHeading.name;

    render() {
        return (
            <h3 className="heading w-100"><b>{this.props.name.toUpperCase()}</b></h3>
        );
    }
}