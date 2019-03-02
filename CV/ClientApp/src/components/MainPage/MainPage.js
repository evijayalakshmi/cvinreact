import React, { Component } from 'react';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import resumeBuilder from '../../assets/img/resume-builder.png';
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
        if (word === "signup") {
            signup = true; login = false;
        }
        else {
            login = true; signup = false;
        }
        return this.setState({ login: login, signup: signup });
    };


    render() {

        return (
            <div className="vertical-center">
                <div className="container responsive">
                    <div class="row">
                        <div class="col-md-12 col-xs-auto">
                            <div className="col-md-6 offset-md-3" id="card">
                            <div id="buttons">
                                <button id="signupButton"
                                    onClick={() => this.switch("signup")}
                                    className={this.state.signup ? "yellow btnStyles" : "blue"}>
                                    <b> Sign In </b>
                                </button>
                                <button id="loginButton"
                                    onClick={() => this.switch("login")}
                                    className={this.state.login ? "yellow btnStyles" : "blue"}>
                                    <b> Login </b>
                                </button>
                            </div>
                            {this.state.signup ? <Signup /> : null}
                                {this.state.login ? <Login /> : null}
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}