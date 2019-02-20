import React, { Component } from 'react';

export class FieldGroup extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div className="form-group">
                <label for={this.props.id}>{this.props.label}</label>
                <input type="text" class="form-control" id={this.props.id} {...this.props} />
                {this.props.help && <small id="help" class="form-text text-muted">{this.props.help}</small>}
            </div>
        );
    }
}