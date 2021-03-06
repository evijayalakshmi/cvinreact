﻿import React, { Component } from "react";
import "./Signup.css";
import { FieldGroup } from "../../Common/FieldGroup";
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { Redirect } from 'react-router';

export default class Signup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            confirmationCode: "",
            isConfirmationCodeSent: false,
            isUserRegistered: false,
            formErrors: {
                email: "",
                password: "",
                confirmPassword: ""
            },
            emailValid: false,
            passwordValid: false,
            confirmPasswordValid: false,
            formValid: false
        };
    }

    //validateForm() {
    //    return (
    //        this.state.name.length > 0 &&
    //        this.state.email.length > 0 &&
    //        this.state.password.length > 0 &&
    //        this.state.password === this.state.confirmPassword
    //    );
    //}

    validateConfirmationForm() {
        return this.state.confirmationCode.length > 0;
    }

    validateForm() {
        this.setState({ formValid: this.state.emailValid && this.state.passwordValid && this.state.confirmPasswordValid });
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;
        let confirmPasswordValid = this.state.confirmPasswordValid;

        switch (fieldName) {
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : ' is invalid';
                break;
            case 'password':
                passwordValid = value.length >= 6;
                fieldValidationErrors.password = passwordValid ? '' : ' is too short';
                break;
            case 'confirmPassword':
                confirmPasswordValid = value === this.state.password;
                fieldValidationErrors.confirmPassword = confirmPasswordValid ? '' : ' password doesnt match';
                break;
            default:
                break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            emailValid: emailValid,
            passwordValid: passwordValid,
            confirmPasswordValid: confirmPasswordValid,
        }, this.validateForm);
    }

    handleChange = event => {
        event.preventDefault();
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        }, () => { this.validateField(name, value) });
    }


    handleSubmit = async event => {
        event.preventDefault();

        fetch('api/User/SendOTP?to=' + this.state.email)
            .then((response) => {
                this.setState({ isConfirmationCodeSent: response.ok })
            })
    }

    handleConfirmationSubmit = async event => {
        event.preventDefault();

        var securityData = {
            email: this.state.email,
            code: this.state.confirmationCode
        };

        fetch('api/User/ValidateSecurityCode', {
            method: 'POST',
            headers: {
                'Accept': 'appication/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(securityData)
        }).then((response) => {
            if (response.ok) {
                var newUserData = {
                    name: this.state.name,
                    email: this.state.email,
                    password: this.state.password,
                    isAdmin: this.state.isAdmin
                };

                fetch('api/User/RegisterUser', {
                    method: 'POST',
                    headers: {
                        'Accept': 'appication/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(newUserData)
                }).then((response) => {
                    return response.json();
                }).then((res) => {
                    const userCredentials = {
                        email: this.state.email,
                        password: this.state.password
                    }
                    fetch('api/User/SendUserCredentials', {
                        method: 'POST',
                        headers: {
                            'Accept': 'appication/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(userCredentials)
                    });
                    alert(this.state.name + " registered successfully! Please login with your credentials sent to your mail.");
                    this.setState({ isUserRegistered: true, name: '', email: '', password: '', confirmPassword: '' });
                }).catch((error) => {
                    this.setState({ error: 'Email already registered!' });
                });
            } else {
                this.setState({ error: 'Invalid code, please try again!' });
            }
        }).catch((error) => {
            this.setState({ error: 'Invalid code, please try again!' });
        });

        this.setState({ isLoading: true });
    }

    renderConfirmationForm() {
        const errorStyle = {
            color: 'red'
        };
        const helpText = `Please check your given email  ${this.state.email}  for the code`;

        if (this.state.isUserRegistered) {
            return (
                <Redirect to={{ pathname: '/' }} />
            );
        }
        return (

            <form onSubmit={this.handleConfirmationSubmit}>
                <FieldGroup
                    name="confirmationCode"
                    id="confirmationCode"
                    placeHolder="Enter security code"
                    autoFocus
                    type="tel"
                    label="Confirmation Code"
                    help={helpText}
                    value={this.state.confirmationCode}
                    onChange={this.handleChange}
                />
                <hr />
                <button
                    className="btn btn-primary btn-block"
                    type="submit">
                    submit
                </button>
                {this.state.isUserRegistered
                    ? null
                    :
                    <div>
                        <p>Hello {this.state.name},</p>
                        <hr />
                        <small id="help" className="form-text text-error" style={errorStyle}>{this.state.error}</small>
                    </div>}
            </form>
        );
    }

    renderForm() {
        const errorStyle = {
            color: 'red'
        };

        return (
            <form onSubmit={this.handleSubmit}>
                <FieldGroup
                    name="name"
                    id="name"
                    type="text"
                    label=""
                    placeHolder="Enter Name"
                    value={this.state.name}
                    onChange={this.handleChange}

                />
                <FieldGroup
                    name="email"
                    id="email"
                    type="text"
                    label=""
                    placeHolder="Enter Email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    error={this.state.formErrors.email}
                />
                <FieldGroup
                    name="password"
                    id="password"
                    type="password"
                    label=""
                    placeHolder="Enter Password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    error={this.state.formErrors.password}
                />
                <FieldGroup
                    name="confirmPassword"
                    id="confirmPassword"
                    type="password"
                    label=""
                    placeHolder="Confirm your password"
                    value={this.state.confirmPassword}
                    onChange={this.handleChange}
                    error={this.state.formErrors.confirmPassword}
                />
                <hr />
                <button
                    className="btn btn-primary btn-block"
                    disabled={!this.state.formValid}
                    type="submit"
                >
                    SignIn
                </button>
                {this.state.isUserRegistered
                    ? <div className="alert alert-success" role="alert">
                        <p>Hi {this.state.name},</p>
                        <hr />
                        <p> Your registration is successful! Please login with your credentials. </p>
                    </div>
                    : <small id="help" className="form-text text-error" style={errorStyle}>{this.state.error}</small>}
            </form>
        );
    }

    render() {
        return (
            <div className="Signup">
                {!this.state.isConfirmationCodeSent ? this.renderForm() : this.renderConfirmationForm()}
            </div>
            //<div className="Signup">
            //    {this.renderConfirmationForm() ? this.renderForm() : null}
            //</div>
        );
    }
}