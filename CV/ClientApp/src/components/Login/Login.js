import React, { Component } from "react";
import "./Login.css";
import { Redirect } from 'react-router';
import { FieldGroup } from "../NewCVForm/FieldGroup";

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            userName: "",
            userEmail: 0,
            isUserValid: false
        };
    }

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
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
        }
        ).then((data) => {
            this.setState({ isUserValid: true, userName: data.name, userEmail: data.email, isAdmin: data.isAdmin });
            return data;
        }
        );

        event.preventDefault();
    }

    render() {
        if (this.state.isUserValid) {
            return (<Redirect to={{ pathname: '/Cv', userInfo: { userName: this.state.userName, userEmail: this.state.userEmail, isAdmin: this.state.isAdmin } }} />);
        }

        return (
            <div className="Login">
                <form onSubmit={this.handleSubmit}>
                    <FieldGroup
                        name="email"
                        id="email"
                        type="text"
                        label="Email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                    <FieldGroup
                        name="password"
                        id="password"
                        type="password"
                        label="Password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                    <button
                        className="btn btn-primary"
                        disabled={!this.validateForm()}
                        type="submit"
                    >
                        Login
                    </button>
                </form>
            </div>
        );
    }
}