import React, { Component } from 'react';
import { Col, Grid, Row, img } from 'react-bootstrap';

import { ContentHeading } from './../ContentHeading/ContentHeading';

import personalPhoto from '../../assets/img/SamImg.jpg'

import './MyCV.css';


export class MyCv extends Component {
    displayName = MyCv.name;

    render() {
        return (
            <div className="page">
                <Grid fluid>
                    <Row>
                        <Col xs={6} md={4} xsOffset={2}> 
                            <ContentHeading name="Vijaya Lakshmi" /> 
                        </Col>
                        <Col xs={6} md={6}>
                            <div>
                                <img src={personalPhoto} className="responsive" alt="my-photo" />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6} md={4} xsOffset={2}>
                            <ContentHeading name="Experience" />
                        </Col>
                        <Col xs={6} md={6}>
                            <div>
                                <img src={personalPhoto} className="responsive" alt="my-photo" />
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}