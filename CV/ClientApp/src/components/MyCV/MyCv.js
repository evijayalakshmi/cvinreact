import React, { Component } from 'react';
import { Col, Grid, Row, img } from 'react-bootstrap';
import { ContentHeading } from './../ContentHeading/ContentHeading';
import personalPhoto from '../../assets/img/SamImg.jpg'
import './MyCV.css';
import { Experience } from '../Experience/Experience';
import { PersonalInfo } from '../PersonalInfo/PersonalInfo';
import { ProudOf } from '../ProudOf/ProudOf';
import { Language } from '../Language/Language';
import { Education } from '../Education/Education';
import { Strength } from '../Strength/Strength';



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
            company: "Google",
            from: "Oct 2010",
            to: "July 2012",
            location: "Palo Alto.CA",
            responsibilities: [
                "Positioned Google Maps as the world leader in moble maps and navigation",
                "Oversaw 1000• engineers and product managers workingon Google Maps.Google Places and Google Earth.",
            ]
        }

        var experience3 = {
            title: "Vice President of Search Products & UX",
            company: "Google",
            from: "Oct 2005",
            to: "July 2010",
            location: "Palo Alto.CA",
            responsibilities: []
        }

        var experience4 = {
            title: "Product Manager & Technical UILead",
            company: "Google",
            from: "Oct 2001",
            to: "July 2005",
            location: "Palo Alto.CA",
            responsibilities: [
                "Appointed by the founder Larry Page in 2011 to lead the Product Management and UserInteraction teams",
                "Optimized Google's homepage and A/B tested every minor detailto increase usability (incl. spacing betweenwords,color schemes and pixel-by-pixelelement alignment)",
            ]
        }

        var experience5 = {
            title: "Product Engineer",
            company: "Google",
            from: "June 1999",
            to: "2001",
            location: "Palo Alto.CA",
            responsibilities: [
                "Joined the company as employee #20 and female employee #1",
                "Developed targeted advert sementin order to use users·search queries and show them related ads",
            ]
        }

        var PersonalDetails = {
            Name: "Marissa Mayer",
            Designation: "Business Woman & Proud Geek",
            Email: "mmayer@yahoo-inc.com",
            blog: "http://marissamayr.tumblr.com/",
            Address: "Sunnyvale.CA"
        }

        var experiences = [experience1, experience2, experience3, experience4, experience5];

        var moment1 = {
            icon: "fa fa-at",
            heading: "Courage I had",
            content: "to take a sinking ship and try to make it float"
        }

        var moment2 = {
            icon: "fa fa-calendar fa-2x",
            heading: "Persistence & Loyalty",
            content: "Ishowed despite the hard moments and my willingness to stay with Yahoo after the acquisition"
        }

        var moment3 = {
            icon: "fa fa-at",
            heading: "Google's   growth",
            content: "from a hundred thousand searches per day to over a billion"
        }

        var moment4 = {
            icon: "fa fa-at",
            heading: "Inspiringwomen in tech",
            content: "Youngest CEOin Fortune's list of 50 most powerfulwomen"
        }

        var moments = [moment1, moment2, moment3, moment4];

        var strengths = [["Hard-Working 18/24", "Persuasive", "Motivator&Leader"],
        ["User Experience", "Mobile Devices & Applications", "Product Management & Marketing"]];

        var languages = [{ language: "English", level: 5 }, { language: "Spanish", level: 4 }, { language: "German", level: 3 }];

        var education1 = {
            stream: "M.S in Computer Science",
            university: "Stanford University",
            icon: "fa fa-calendar",
            from: "Sep 1997",
            to: "June 1999"

        }
        var education2 = {
            stream: "B.S in Symbolic Systems",
            university: "Stanford University",
            icon: "fa fa-calendar",
            from: "Sep 1993",
            to: "June 1997"
        }

        var educations = [education1, education2];

        return (
            <div className="page">
                <Grid fluid>
                    <Row>
                        <Col xs={6} md={9} xsOffset={1}>
                            <PersonalInfo info={PersonalDetails} />
                        </Col>
                        <Col xs={6} md={2}>
                            <div>
                                <img src={personalPhoto} className="responsive" alt="my-photo" />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6} md={6} xsOffset={1}>
                            <ContentHeading name="Experience" />
                            {experiences.map(function (name, index) {
                                return ([<Experience key={index} experience={name} />,
                                <hr key={index + "h"} className="style3" />]);
                            })}
                            <ContentHeading name="A day of my life" />
                            {languages.map(function (name, index) {
                                return <Language key={index} language={name} />;
                            })}
                        </Col>
                        <Col xs={6} md={4}>
                            <ContentHeading name="Life Philosophy" />
                            <em> "If you don't haveany shadows, you 're not standing in the light."</em>
                            <ContentHeading name="Most Proud Of" />
                            {moments.map(function (name, index) {
                                return ([<ProudOf key={index} moment={name} />,
                                <hr key={index + "p"} className="style3" />]);
                            })}
                            <ContentHeading name="Strengths" />
                            {strengths.map(function (name, index) {
                                return [<Strength strengths={name} />, <hr className="style3" />] ;
                            })}
                            <ContentHeading name="Languages" />
                            {languages.map(function (name, index) {
                                return <Language key={index} language={name} />;
                            })}
                            <ContentHeading name="Education" />
                            {educations.map(function (name, index) {
                                return ([<Education key={index} education={name} />, <hr className="style3" />]);
                            })}
                           
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}