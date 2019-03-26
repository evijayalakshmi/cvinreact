import React, { Component } from 'react';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { IconFieldGroup } from '../../Common/IconFieldGroup';
import { ContentForm } from '../../ContentForm/ContentForm';
import { ContentHeading } from '../../Common/ContentHeading/ContentHeading';
import { FormGroup, ControlLabel, FormControl, HelpBlock, Button, Modal, ModalHeader, ModalFooter } from 'react-bootstrap';

export default class ChangePassword extends Component {
    displayName = ChangePassword.name;

    constructor(props) {
        super(props);
        var p = this.props.location.param;
        console.log(p);
    }
  
    render() {
        return (
            <div className="col-md-12">
                <IconFieldGroup
                    name="oldPassword"
                    id="password"
                    type="password"
                    label="oldPassword"
                    icon="fa fa-key"
                    placeholder="Enter your old password"

                />
                <IconFieldGroup
                    name="newPassword"
                    id="password"
                    type="password"
                    label="newPassword"
                    icon="fa fa-key"
                    placeholder="Enter your new password"

                />
                <IconFieldGroup
                    name="confirmNewPassword"
                    id="password"
                    type="password"
                    label="confirmNewPassword"
                    icon="fa fa-key"
                    placeholder="confirm your password"

                />
            </div>

        );
    }
}
