import React, { Component } from 'react';
import { FormGroup, ControlLabel, InputGroup, FormControl, HelpBlock } from 'react-bootstrap';
import { FieldGroup } from './FieldGroup';

export class IconFieldGroup extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <FormGroup>
                <ControlLabel>{this.props.label}</ControlLabel>
                <InputGroup>
                    <InputGroup.Addon><i className={this.props.icon} /></InputGroup.Addon>
                    <FormControl key={this.props.id} {...this.props} />
                    {this.props.help && <HelpBlock>{this.props.help}</HelpBlock>}
                </InputGroup>
            </FormGroup>
        );
    }
}