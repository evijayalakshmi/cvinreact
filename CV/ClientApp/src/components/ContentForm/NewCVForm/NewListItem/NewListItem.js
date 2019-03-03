import React, { Component } from 'react';
import { Link } from "react-router-dom";

export class NewListItem extends Component {
    displayName = NewListItem.name;

    render() {
        const newTo = {
            pathname: "/MyCv/595212758daa6810cbba4104"
        };

        return (
            <li className={"list-group-item clearfix " + (this.props.isActive ? 'active' : '')}
                ref={this.props.innerRef}
                onClick={(e )=> this.props.onListItemClick(e, this.props.index)}>{this.props.listItem.name}
                <span className="pull-right button-group">
                    <button type="button" className="btn btn-outline-success" onClick={(e) => this.props.delete(e, this.props.index)}>
                        <i className="fa fa-trash" />
                    </button>
                </span>
            </li>
        );
    }
}