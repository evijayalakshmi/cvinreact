﻿import React, { Component } from "react";
import "./Login.css";
import { Redirect } from 'react-router';
import Signup from "../Signup/Signup";
import { FieldGroup } from "../../Common/FieldGroup";

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            userName: "",
            userEmail: "",
            isUserValid: false,
            formErrors: {
                email: "",
                password: ""
            },
            emailValid: false,
            passwordValid: false,
            formValid: false
        };
    }

    validateForm() {
        //return this.state.email.length > 0 && this.state.password.length > 0;
        this.setState({ formValid: this.state.emailValid && this.state.passwordValid });
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;

        switch (fieldName) {
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : ' is invalid';
                break;
            case 'password':
                passwordValid = value.length >= 4;
                fieldValidationErrors.password = passwordValid ? '' : ' is too short';
                break;
            default:
                break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            emailValid: emailValid,
            passwordValid: passwordValid
        }, this.validateForm);
    }

    handleChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        }, () => { this.validateField(name, value) });
    }

    handleSubmit = event => {
        var userData = {
            email: this.state.email,
            password: this.state.password
        };
        fetch('api/User/ValidateUser', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        }).then((response) => {
            return response.json();
        }).then((data) => {
            this.setState({ isUserValid: true, userName: data.name, userEmail: data.email, isAdmin: data.isAdmin });
            return data;
        }).catch((error) => {
            this.setState({ error: 'Invalid username or password' });
        });

        event.preventDefault();
    }

    render() {
        if (this.state.isUserValid) {
            debugger;
            return (
                <Redirect to={{ pathname: '/Cv', userInfo: { userName: this.state.userName, userEmail: this.state.userEmail, password: this.state.password, isAdmin: this.state.isAdmin } }} />
            );
        }

        const errorStyle = {
            color: 'red'
        };

        return (
            <div className="Login">
                <form onSubmit={this.handleSubmit}>
                    <FieldGroup
                        name="email"
                        id="email"
                        type="text"
                        label=""
                        placeholder="Enter your emailId"
                        value={this.state.email}
                        onChange={this.handleChange}
                        error={this.state.formErrors.email}
                    />
                    <FieldGroup
                        name="password"
                        id="password"
                        type="password"
                        label=""
                        placeholder="Enter your password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        error={this.state.formErrors.password}
                    />
                    <button
                        className="btn btn-primary btn-block"
                        disabled={!this.state.formValid}
                        type="submit"
                    >
                        <h5>Login</h5>
                    </button>
                    <hr />
                    {this.state.isUserValid ? null :
                        <small id="help" className="form-text text-error" style={errorStyle}>{this.state.error}</small>}
                </form>
            </div>
        );
    }
}