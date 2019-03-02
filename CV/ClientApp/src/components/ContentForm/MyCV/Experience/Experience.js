import React, { Component } from 'react';
import './Experience.css'

export class Experience extends Component {
    displayName = Experience.name;

    render() {
        return (
            <div>
                <h3 className="heading4">{this.props.experience.title}</h3>
                <h5 className="heading4"><b>{this.props.experience.company}</b></h5>
                <div className="row w-100">
                    <div className="col-xs-6 col-md-6 col-sm-6">
                        <i className="fa fa-calendar"></i> {this.props.experience.from} - {this.props.experience.to}
                    </div>
                    <div className="col-xs-6 col-md-6 col-sm-6">
                        <i className="fa fa-map-marker"></i> {this.props.experience.location}
                    </div>
                </div>
                <br />
                <ul>
                    {this.props.experience.rolesAndResponsibilities.map(function (name, index) {
                        return <li className="bulletlist" key={index}>{name}</li>
                    })}
                </ul>
            </div>
        );
    }
}