import React, { Component } from 'react';
import './ProudOf.css';

export class ProudOf extends Component {
    dispalyName = ProudOf.name;

    render() {

        return (
            <div className="row w-100">
                <div className="col-md-2 col-sm-2">
                    <i className={this.props.achievement.icon} />
                </div>
                <div className="col-md-10 col-sm-10">
                    <h5 className="heading5"><b>{this.props.achievement.heading} </b></h5>
                    <p className="text">{this.props.achievement.content}</p>
                </div>
            </div>
        );
    }

}