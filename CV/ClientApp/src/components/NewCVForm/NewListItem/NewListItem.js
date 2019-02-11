import React, { Component } from 'react';

export class NewListItem extends Component {
    displayName = NewListItem.name;

    render() {
        return (
            <li className="list-group-item clearfix">{this.props.listItem.name}
                <span className="pull-right button-group">
                    <button type="button" className="btn btn-secondary ">
                        <i className="fa fa-trash" />
                    </button>
                </span>
            </li>
        );
    }
}