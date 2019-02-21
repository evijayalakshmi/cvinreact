import React, { Component } from 'react';
import './Strength.css';

export class Strength extends Component {
    dispalyName = Strength.name;

    render() {

        return (
            <div>
                {this.props.strengths.map(function (name, index) {
                    return <span className="label label-default strengthstyle">{name}</span>;
                })}
            </div>
        );
    }

}