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
            confirmPasswordValid: confirmPasswordValid
        }, this.validateForm);
    }

    handleChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        }, () => { this.validateField(name, value) });
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