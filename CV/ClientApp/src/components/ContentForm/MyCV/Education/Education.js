import React, { Component } from 'react';

export class Education extends Component {
    displayName = Education.name;

    render() {
        return (
            <div className="w-100">
                <h3 className="heading4">{this.props.education.stream} </h3>
                <h4 className="heading4"> <b>{this.props.education.university} </b></h4> <hr/>
                <i className="fa fa-calendar"></i> {this.props.education.fromDate} - {this.props.education.toDate}
            </div>
            );
    }
}