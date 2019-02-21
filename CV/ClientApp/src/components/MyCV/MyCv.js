import React, { Component } from 'react';
import { ContentHeading } from './../ContentHeading/ContentHeading';
import personalPhoto from '../../assets/img/profileplaceholder.png'
import './MyCV.css';
import { Experience } from '../Experience/Experience';
import { PersonalInfo } from '../PersonalInfo/PersonalInfo';
import { ProudOf } from '../ProudOf/ProudOf';
import { Language } from '../Language/Language';
import { Education } from '../Education/Education';
import { Strength } from '../Strength/Strength';
import { CvData } from '../../models/CvData';
import { DayChart } from '../DayChart/DayChart';

export class MyCv extends Component {
    displayName = MyCv.name;

    render() {
        console.log('from url ', this.props.location.state);
        var data = this.props.location.state;
        return (
            <div className="container-fluid">
                <div className="row marginTop w-100">
                    <div className="com-xs-6 col-md-8 col-sm-8 col-xs-offset-1">
                        <PersonalInfo info={data.personalDetails} />
                    </div>
                    <div className="col-xs-6 col-md-2 col-sm-2">
                        <img src={personalPhoto} className="img-circle responsive" alt="my-photo" />
                    </div>
                </div>
                <div className="row w-100">
                    <div className="col-xs-6 col-md-6 col-sm-6 col-xs-offset-1">
                        <ContentHeading name="Experience" />
                        {data.experiences.map(function (name, index) {
                            return (index + 1 !== data.experiences.length) ?
                                ([<Experience key={index} experience={name} />, <hr key={index + "h"} className="style3" />]) :
                                <Experience key={index} experience={name} />;
                        })}
                        <ContentHeading name="A day of my life" />
                        <DayChart />
                    </div>
                    <div className="col-xs-6 col-md-4 col-sm-4">
                        <ContentHeading name="Life Philosophy" />
                        <em> "If you don't have any shadows, you're not standing in the light."</em>
                        <ContentHeading name="Most Proud Of" />
                        {data.moments.map(function (name, index) {
                            return (index + 1 !== data.moments.length) ?
                                ([<ProudOf key={index} moment={name} />, <hr key={index + "p"} className="style3" />]) :
                                <ProudOf key={index} moment={name} />;
                        })}
                        <ContentHeading name="Strengths" />
                        {data.strengths.map(function (name, index) {
                            return (index + 1 !== data.strengths.length) ?
                                [<Strength strengths={name} />, <hr className="style3" />] :
                                <Strength strengths={name} />;
                        })}
                        <ContentHeading name="Languages" />
                        {data.languages.map(function (name, index) {
                            return (index + 1 !== data.languages.length) ?
                                ([<Language key={index} language={name} />, <hr className="style3" />]) :
                                <Language key={index} language={name} />;
                        })}
                        <ContentHeading name="Education" />
                        {data.educations.map(function (name, index) {
                            return (index + 1 !== data.educations.length) ?
                                ([<Education key={index} education={name} />, <hr className="style3" />]) :
                                <Education key={index} education={name} />;
                        })}

                    </div>
                </div>
            </div>
        );
    }
}