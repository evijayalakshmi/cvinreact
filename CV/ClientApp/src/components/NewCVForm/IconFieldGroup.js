import React, { Component } from 'react';

export class IconFieldGroup extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div className="form-group">
                <label for={this.props.id}>{this.props.label}</label>
                <div className="input-group">
                    <div class="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                            <i className={this.props.icon} />
                        </span>
                    </div>
                    <input type="text" class="form-control" id={this.props.id} {...this.props} />
                    {this.props.help && <small id="help" class="form-text text-muted">{this.props.help}</small>}
                </div>
            </div>
        );
    }
}