import React, { Component } from 'react';
import { NewCVForm } from './NewCVForm/NewCVForm';

export class Layout extends Component {
    displayName = Layout.name

    render() {
        return (
            <NewCVForm />
        );
    }
}
