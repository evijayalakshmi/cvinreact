import React, { Component } from 'react';

export class PersonalInfo extends Component {
    displayName = PersonalInfo.name;

    render() {
        var linkedin = "https://www.linkedin.com/in/vijaya-lakshmi-edupuganti/";
        return (
            <div>
                <h1><b> {this.props.info.name.toUpperCase()}</b></h1>
                <h5 style={{ color: '#500F8E' }}><b> {this.props.info.currentOccupation}</b> </h5>
                <hr />
                <div className="row w-100">
                    <div className="col-xs-4 col-md-4 col-sm-4">
                        {this.props.info.email !== '' ?
                            [<i className="fa fa-at"></i>,
                            <span> {this.props.info.email} </span>] :
                            null
                        }
                    </div>
                    <div className="col-xs-4 col-md-5 col-sm-4">
                        {this.props.info.linkedIn !== '' ?
                            [<i className="fa fa-linkedin"></i>, <a href={this.props.info.linkedIn}> {this.props.info.linkedIn} </a>] :
                            null}
                    </div>
                    <div className="col-xs-4 col-md-3 col-sm-4">
                        {this.props.info.phoneNumber !== '' ?
                            [<i className="fa fa-phone"></i>,
                            <span> {this.props.info.phoneNumber} </span>] : null
                        }
                    </div>

                </div>
                <div className="row w-100">
                    <div className="col-xs-4 col-md-4 col-sm-4">
                        {this.props.info.gitURL !== '' ?
                            [<i className="fa fa-external-link"></i>, <a href={this.props.info.gitURL}> {this.props.info.gitURL} </a>] :
                            null}
                    </div>
                    <div className="col-xs-4 col-md-5 col-sm-4">
                        {this.props.info.blog !== '' ?
                            [<i className="fa fa-external-link"></i>,
                                <a href={this.props.info.blog}> {this.props.info.blog} </a>] : null
                        }
                    </div>
                    <div className="col-xs-4 col-md-3 col-sm-4">
                        {this.props.info.location !== '' ?
                            [<i className="fa fa-map-marker"></i>,
                            <span> {this.props.info.location} </span>] : null
                        }
                    </div>
                </div>
                <br />
            </div>
        );
    }
}