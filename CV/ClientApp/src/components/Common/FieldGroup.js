import React, { Component } from 'react';

export class FieldGroup extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const errorStyle = {
            color: 'red'
        };

        return (
            <div className="form-group">
                <label htmlFor={this.props.id}>{this.props.label}</label>
                <input type="text" className="form-control input-lg" id={this.props.id} {...this.props} autoComplete="off" />
                {this.props.help && <small id="help" className="form-text text-muted">{this.props.help}</small>}
                {this.props.error && <small id="help" className="form-text text-error" style={errorStyle}>{this.props.error}</small>}
            </div>
        );
    }
}