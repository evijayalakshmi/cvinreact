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
            title: "President & CEO",
            company: "Yahoo!",
            from: "july 2012",
            to: "Ongoing",
            location: "Sunnyvale, CA",
            responsibilities: [
                "Led the $5 billion acquisition of the company with Verizon - the entity which believed most in the immense value Yahoo! has created",
                "Built Yahoo's mobile, video & social businesses from nothing in 2011 to $1.6 billion in GAAP revenue in 2015",
                "Tripled the conpany's mobile base to over 600 million monthly active users and generated over $1 billion of mobile advertising revenue last year"]
        }

        var experience2 = {
            title: "Vice President of Location & Local Services",
            company: "Google!",
            from: "Oct 2010",
            to: "July 2012",
            location: "9 Palo Alto.CA",
            responsibilities: [
                "Positioned Google Maps as the world leader in moble maps and navigation",
                "Oversaw 1000• engineers and product managers workingon Google Maps.Google Places and Google Earth.",
            ]
        }

        var experience3 = {
            title: "Vice President of Search Products & UX",
            company: "Google!",
            from: "Oct 2005",
            to: "July 2010",
            location: "Palo Alto.CA",
            responsibilities: []
        }

        var experience4 = {
            title: "Product Manager & Technical UILead",
            company: "Google!",
            from: "Oct 2001",
            to: "July 2005",
            location: "Palo Alto.CA",
            responsibilities: [
                "Appointed by the founder Larry Page in 2011 to lead the Product Management and UserInteraction teams",
                "Optimized Google's homepage and A/B tested every minor detailto increase usability (incl. spacing betweenwords,color schemes and pixel-by-pixelelement alignment)",
            ]
        }

        var experience5 = {
            title: "Product Engioeer",
            company: "Google!",
            from: "June 1999",
            to: "2001",
            location: "Palo Alto.CA",
            responsibilities: [
                "Joined the company as employee #20 and female employee #1",
                "Developed targeted advert sementin order to use users·search queries and show them related ads",
            ]
        }

        var experiences = [experience1, experience2, experience3, experience4, experience5]

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
                            <ContentHeading name="Experience" />
                            {experiences.map(function (name, index) {
                                return ([<Experience key={index} experience={name} /> , <hr className="style3" />]);
                            })}
                        </Col>
                        <Col xs={6} md={3} xsOffset={1}>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}