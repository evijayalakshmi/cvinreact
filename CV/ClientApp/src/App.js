import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { MyCv } from './components/MyCV/MyCv';
import { NewCVForm } from './components/NewCVForm/NewCVForm';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class App extends Component {
    displayName = App.name

    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark" fixed="top"
                    style={{ width: "100%" }}>
                    <Navbar.Brand href="/">Resume Builder App</Navbar.Brand>
                </Navbar>

                <Router>
                    <div>
                        <Route exact path='/' component={NewCVForm} />
                        <Route path='/MyCv' component={MyCv} />
                    </div>
                </Router>
            </div>
        );
    }
}
