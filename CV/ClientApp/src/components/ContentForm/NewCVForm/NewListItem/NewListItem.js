﻿import React, { Component } from 'react';

export class NewListItem extends Component {
    displayName = NewListItem.name;

    render() {
        return (
            <li className={"list-group-item clearfix " + (this.props.isActive ? 'active' : '')}
                ref={this.props.innerRef} style={{ 'borderRadius': 0 , cursor: 'pointer'}}
                onClick={(e )=> this.props.onListItemClick(e, this.props.index)}>{this.props.listItem.name}
                <span className="pull-right button-group">
                    <button type="button" className="btn btn-outline-success"
                        onClick={(e) => this.props.delete(e, this.props.index)}>
                        <i className="fa fa-trash" />
                    </button>

                </span>
            </li>
        );
    }
}