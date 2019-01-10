import React, { Component } from 'react';
import { Col, Grid, Row, img } from 'react-bootstrap';

import { ContentHeading } from './../ContentHeading/ContentHeading';

import personalPhoto from '../../assets/img/SamImg.jpg'

import './MyCV.css';
import { Experience } from '../Experience/Experience';


export class MyCv extends Component {
    displayName = MyCv.name;

    render() {
        var experience1 = {
            title:  "President & CEO",
            company: "Yahoo!",
            from: "july 2012",
            to: "Ongoing",
            location: "Sunnyvale, CA",
            responsibilities: [
                "Led the $5 billion acquisition of the company with Verizon - the entity which believed most in the immense value Yahoo! has created",
                "Built Yahoo's mobile, video & social businesses from nothing in 2011 to $1.6 billion in GAAP revenue in 2015",
                "Tripled the conpany's mobile base to over 600 million monthly active users and generated over $1 billion of mobile advertising revenue last year"]
        }

        return (
            <div className="page">
                <Grid fluid>
                    <Row>
                        <Col xs={6} md={6} xsOffset={1}> 

                        </Col>
                        <Col xs={6} md={4} xsOffset={1}>
                            <div>
                                <img src={personalPhoto} className="responsive" alt="my-photo" />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6} md={7} xsOffset={1}>
                            <Experience experience={experience1} />
                        </Col>
                        <Col xs={6} md={3} xsOffset={1}>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}