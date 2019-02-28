import React, { Component } from 'react';

export class PersonalInfo extends Component {
    displayName = PersonalInfo.name;

    render() {
        var linkedin = "https://www.linkedin.com/in/vijaya-lakshmi-edupuganti/";
        return (
            <div>
                <h1><b> {this.props.info.Name.toUpperCase()}</b></h1>
                <h5 style={{ color: '#500F8E' }}><b> {this.props.info.Designation}</b> </h5>
                <div className="row w-100">
                    <div className="col-xs-4 col-md-4 col-sm-4">
                        <i className="fa fa-at"></i>
                        <span> {this.props.info.Email} </span>
                    </div>
                    <div className="col-xs-4 col-md-5 col-sm-5">
                        {this.props.info.blog !== '' ?
                            [<i className="fa fa-map-marker"></i>, <span> {this.props.info.blog} </span>] :
                            null}
                    </div>
                    <div className="col-xs-4 col-md-3 col-sm-3">
                        <i className="fa fa-map-marker"></i>
                        <span> {this.props.info.Location} </span>
                    </div>
                </div>
                <br />
            </div>
        );
    }
}