import React, { Component } from 'react';
import './Experience.css'

export class Experience extends Component {
    displayName = Experience.name;

    render() {
        return (
            <div className="w-100">
                <h3 className="heading4">{this.props.experience.title}</h3>
                <h4 className="heading4"><b>{this.props.experience.company}</b></h4>
                <hr />
                <div className="row w-100">
                    <div className="col-xs-6 col-md-4 col-md-pull-2 col-sm-6">
                        <i className="fa fa-calendar"></i> {this.props.experience.fromDate} - {this.props.experience.toDate}
                    </div>
                    <div className="col-xs-6 col-md-4  col-sm-6">
                        <i className="fa fa-map-marker"></i> {this.props.experience.location}
                    </div>
                </div>
                <hr />
                <h6><b> Roles And Responsibilities: </b></h6>
                <ul>
                    {this.props.experience.rolesAndResponsibilities.map(function (name, index) {
                        return <li className="bulletlist" key={index}>{name}</li>
                    })}
                </ul>
            </div>
        );
    }
}