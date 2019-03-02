import React, { Component } from 'react';

export class Education extends Component {
    displayName = Education.name;

    render() {
        return (
            <div>
                <h4>{this.props.education.stream} </h4>
                <b> {this.props.education.university}</b> <br />
                <i className="fa fa-calendar"></i> {this.props.education.fromDate} - {this.props.education.toDate}
            </div>
            );
    }
}