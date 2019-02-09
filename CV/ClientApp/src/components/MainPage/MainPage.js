import React, { Component } from 'react';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import './MainPage.css';

export default class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: true,
            signup: false
        };
    }

    switch = (word) => {
        var signup, login;
        if (word == "signup") {
            signup = true; login = false;
        }
        else {
            login = true; signup = false;
        }
        return this.setState({ login: login, signup: signup })
    };

    showLoginBox() {
        this.setState({ isLoginOpen: true, isRegisterOpen: false });
    }

    showRegisterBox() {
        this.setState({ isRegisterOpen: true, isLoginOpen: false });
    }

    render() {

        var self = this;
        return (
            <div>
                <div id="buttons">
                    <p id="signupButton"
                        onClick={() => this.switch("signup")}
                        className={this.state.signup ? "yellow" : "blue"}>
                        Sign In
                    </p>
                    <p id="loginButton"
                        onClick={() => this.switch("login")}
                        className={this.state.login ? "yellow" : "blue"}>
                        Login
                    </p>
                </div>

                {this.state.signup ? <Signup /> : null}
                {this.state.login ? <Login /> : null}
            </div>

        )
    }
}