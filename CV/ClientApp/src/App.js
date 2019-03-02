import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from './components/MainPage/MainPage';
import { ContentForm } from './components/ContentForm/ContentForm';
import { MyCv } from './components/ContentForm/MyCV/MyCv';


export default class App extends Component {
    displayName = App.name

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/' component={MainPage} />
                    <Route path='/Cv' component={ContentForm} />
                    <Route path='/MyCv/:id' component={MyCv} />
                </Switch>
            </Router>
        );
    }
}
