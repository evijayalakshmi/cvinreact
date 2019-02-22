import React, { Component } from "react";
import "./Signup.css";
import { FieldGroup } from "../NewCVForm/FieldGroup";

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
            isAdmin: false,
            isUserRegistered: false
        };
    }

    validateForm() {
        return (
            this.state.name.length > 0 &&
            this.state.email.length > 0 &&
            this.state.password.length > 0 &&
            this.state.password === this.state.confirmPassword
        );
    }

    validateConfirmationForm() {
        return this.state.confirmationCode.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleAdminChange = event => {
        this.setState({
            [event.target.id]: !this.state.isAdmin
        });
    }

    handleSubmit = async event => {
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
        }).then((res) => {
            console.log(JSON.stringify(res.json()));
            if (res.status === 200) {
                this.setState({ isUserRegistered: true, name: '', email: '', password: '', confirmPassword: '' });
            }
        }
        );

        event.preventDefault();

        this.setState({ isLoading: true });

        this.setState({ isLoading: false });
    }

    handleConfirmationSubmit = async event => {
        event.preventDefault();

        this.setState({ isLoading: true });
    }

    // renderConfirmationForm() {
    //     return (
    //         <form onSubmit={this.handleConfirmationSubmit}>
    //             <FormGroup controlId="confirmationCode" bsSize="large">
    //                 <ControlLabel>Confirmation Code</ControlLabel>
    //                 <FormControl
    //                     autoFocus
    //                     type="tel"
    //                     value={this.state.confirmationCode}
    //                     onChange={this.handleChange}
    //                 />
    //                 <HelpBlock>Please check your email for the code.</HelpBlock>
    //             </FormGroup>
    //         </form>
    //     );
    // }

    renderForm() {
        return (
            <form onSubmit={this.handleSubmit}>
                <FieldGroup
                    name="name"
                    id="name"
                    type="text"
                    label="Name"
                    value={this.state.name}
                    onChange={this.handleChange}
                />
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
                <FieldGroup
                    name="confirmPassword"
                    id="confirmPassword"
                    type="password"
                    label="Confirm Password"
                    value={this.state.confirmPassword}
                    onChange={this.handleChange}
                />
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="isAdmin"
                        checked={this.state.isAdmin}
                        onChange={this.handleAdminChange}
                    />
                    <label className="form-check-label" htmlFor="isAdmin">
                        Is Admin?
                    </label>
                </div>
                <hr />
                <button
                    className="btn btn-primary"
                    disabled={!this.validateForm()}
                    type="submit"
                >
                    SignIn
                </button>
                {this.state.isUserRegistered
                    ? <div className="alert alert-success" role="alert">
                        <p>Hey {this.state.name},</p>
                        <hr />
                        <p> You registered Successfully! Please login with your credentials. </p>
                    </div>
                    : null}
            </form>
        );
    }

    render() {

        return (
            <div className="Signup">
                {this.renderForm()}
            </div>
        );
    }
}