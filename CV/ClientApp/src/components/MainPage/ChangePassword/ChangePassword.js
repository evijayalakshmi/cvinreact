import React, { Component } from 'react';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { IconFieldGroup } from '../../Common/IconFieldGroup';
import { ContentForm } from '../../ContentForm/ContentForm';
import { ContentHeading } from '../../Common/ContentHeading/ContentHeading';
import '../MainPage.css'
import { Redirect } from 'react-router';

export default class ChangePassword extends Component {
    displayName = ChangePassword.name;

    constructor(props) {
        super(props);
        var p = this.props.location.param;
        debugger;
        this.state = {
            userEmail: p.userEmail,
            userName: p.userName,
            userPassword: p.userPassword,
            oldPassword: "",
            newPassword: "",
            confirmNewPassword: "",
            isOldPwdValid: false,
            isNewPwdValid: false,
            isConfirmNewPwdValid: false,
            isPwdSame: false,
            formValid: false,
            formErrors: {
                oldPassword: "",
                newPassword: "",
                confirmNewPassword: ""
            },
            isPasswordChangeSuccess: false

        };

    }
    validateForm() {
        //return this.state.email.length > 0 && this.state.password.length > 0;
        this.setState({ formValid: this.state.oldPassword && this.state.newPassword && this.state.confirmNewPassword });
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let isOldPwdValid = this.state.isOldPwdValid;
        let isNewPwdValid = this.state.isNewPwdValid;
        let isConfirmNewPwdValid = this.state.isConfirmNewPwdValid;

        switch (fieldName) {
            case 'oldPassword':
                isOldPwdValid = value.length >= 4;
                fieldValidationErrors.oldPassword = isOldPwdValid ? '' : ' is too short';
                break;
            case 'newPassword':
                isNewPwdValid = value.length >= 4;
                fieldValidationErrors.newPassword = isNewPwdValid ? '' : ' is too short';
                break;
            case 'confirmNewPassword':
                isConfirmNewPwdValid = value === this.state.newPassword;
                fieldValidationErrors.confirmNewPassword = isConfirmNewPwdValid ? '' : ' password doesnt match';
                break;
            default:
                break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            isOldPwdValid: isOldPwdValid,
            isNewPwdValid: isNewPwdValid,
            isConfirmNewPwdValid: isConfirmNewPwdValid
        }, this.validateForm);
    }

    //handleChange = event => {
    //    const name = event.target.name;
    //    const value = event.target.value;
    //    debugger;
    //    this.setState({
    //        [name]: value
    //    }, () => { this.validateField(name, value) });
    //}

    handleChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        debugger;
        this.setState({
            [name]: value
        });
    }

    handleSubmit = event => {
        debugger;
        var userData = {
            email: this.state.userEmail,
            oldPassword: this.state.oldPassword,
            newPassword: this.state.newPassword
        };
        fetch('api/User/ChangePassword', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        }).then((response) => {
            return response.json();
            }).then((data) => {
                debugger;
                this.setState({ userEmail: data.email, newPassword: data.password });
                var userCredentials = {
                    email: this.state.userEmail,
                    password: this.state.newPassword
                };
                fetch('api/User/SendUpdatedPassword', {
                method: 'POST',
                headers: {
                    'Accept': 'appication/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userCredentials)
            }).then((res) => {
                if (res.ok) {
                    alert("Your password changed successfully! Please re-login");
                    this.setState({ isPasswordChangeSuccess: true });
                }
            })
        }).catch((error) => {
            debugger;
            this.setState({ error: 'May given invalid password, please try again!' });
            alert('Problem in changing password ' + error);
        });
    }

    render() {
        if (this.state.isPasswordChangeSuccess) {
            return (
                <Redirect to={{ pathname: '/' }} />
            );
        }
        return (
            <div className="vertical-center">
                <div className="container responsive">
                    <div className="row">
                        <div className="col-md-12 col-xs-auto">
                            <div className="col-md-6 offset-md-3" id="card">
                                <div className="col-md-12">
                                    <IconFieldGroup
                                        name="oldPassword"
                                        id="password"
                                        type="password"
                                        label="Current Password"
                                        icon="fa fa-key"
                                        placeholder="Enter your current password"
                                        onChange={this.handleChange}

                                    />
                                    <IconFieldGroup
                                        name="newPassword"
                                        id="password"
                                        type="password"
                                        label="New Password"
                                        icon="fa fa-key"
                                        placeholder="Enter your new password"
                                        onChange={this.handleChange}

                                    />
                                    <IconFieldGroup
                                        name="confirmNewPassword"
                                        id="password"
                                        type="password"
                                        label="Confirm New Password"
                                        icon="fa fa-key"
                                        placeholder="Confirm your password"
                                        onChange={this.handleChange}

                                    />
                                    <hr />
                                    <button
                                        className="btn btn-primary btn-block"
                                        type="submit" onClick={this.handleSubmit}
                                    >
                                        <h5>Submit</h5>
                                    </button>
                                    <hr />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
