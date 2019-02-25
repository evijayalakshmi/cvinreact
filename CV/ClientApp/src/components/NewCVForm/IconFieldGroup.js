import React, { Component } from 'react';

export class IconFieldGroup extends Component {
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
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                            <i className={this.props.icon} />
                        </span>
                    </div>
                    <input type="text" className="form-control" id={this.props.id} {...this.props} />
                </div>
                {this.props.help && <small id="help" className="form-text text-muted">{this.props.help}</small>}
                {this.props.error && <small id="help" className="form-text text-error" style={errorStyle}>{this.props.error}</small>}
            </div>
        );
    }
}