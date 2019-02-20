import React, { Component } from 'react';
import { Navbar, Button } from 'react-bootstrap';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { MyCv } from './components/MyCV/MyCv';
import { NewCVForm } from './components/NewCVForm/NewCVForm';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import MainPage from './components/MainPage/MainPage';
import { ContentForm } from './components/ContentForm/ContentForm';

export default class App extends Component {
    displayName = App.name

    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route exact path='/' component={MainPage} />
                        <Route path='/Cv' component={ContentForm} />
                    </Switch>
                </Router>
            </div>
        );
    }
}
