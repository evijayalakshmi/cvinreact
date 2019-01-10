import React, { Component } from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
import { NavMenu } from './NavMenu';
import { ContentHeading } from './ContentHeading/ContentHeading';
import { MyCv } from './MyCV/MyCv';

export class Layout extends Component {
    displayName = Layout.name

    render() {
        return (
            <MyCv/>
        );
    }
}
