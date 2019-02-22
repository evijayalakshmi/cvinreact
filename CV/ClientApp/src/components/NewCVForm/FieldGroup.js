import React, { Component } from 'react';

export class FieldGroup extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div className="form-group">
                <label htmlFor={this.props.id}>{this.props.label}</label>
                <input type="text" className="form-control" id={this.props.id} {...this.props} />
                {this.props.help && <small id="help" className="form-text text-muted">{this.props.help}</small>}
            </div>
        );
    }
}