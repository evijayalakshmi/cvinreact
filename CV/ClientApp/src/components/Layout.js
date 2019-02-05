import React, { Component } from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
import { NavMenu } from './NavMenu';
import { ContentHeading } from './ContentHeading/ContentHeading';
import { MyCv } from './MyCV/MyCv';
import { NewCVForm } from './NewCVForm/NewCVForm';

export class Layout extends Component {
    displayName = Layout.name

    render() {
        return (
            <NewCVForm />
        );
    }
}
