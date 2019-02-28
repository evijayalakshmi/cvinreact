import React, { Component } from 'react';
import { ContentHeading } from './../ContentHeading/ContentHeading';
import personalPhoto from '../../assets/img/profileplaceholder.png'
import './MyCV.css';
import { Experience } from './Experience/Experience';
import { PersonalInfo } from './PersonalInfo/PersonalInfo';
import { ProudOf } from './ProudOf/ProudOf';
import { Language } from './Language/Language';
import { Education } from './Education/Education';
import { Strength } from './Strength/Strength';
import { CvData } from '../../models/CvData';
import { DayChart } from './DayChart/DayChart';

export class MyCv extends Component {
    displayName = MyCv.name;

    constructor(props, context) {
        super(props, context);

        console.log('from url ', this.props.match.params.id);

        this.state = {
            id: this.props.match.params.id
        };

        console.log('now the state is set to: ', this.state);
    }

    renderToHTMLData = (resume) => {
        return {
            personalInfo: {
                name: resume.personalInfo.name,
                location: resume.personalInfo.location,
                phoneNumber: resume.personalInfo.phoneNumber,
                designation: resume.personalInfo.designation,
                email: resume.personalInfo.email,
                linkedIn: resume.personalInfo.linkedIn,
                gitURL: resume.personalInfo.gitURL,
                blog: resume.personalInfo.blogURL
            },
            experiences: resume.experiences.map(exp => {
                return {
                    title: exp.title,
                    company: exp.company,
                    location: exp.location,
                    fromDate: "",
                    toDate: "",
                    rolesAndResponsibilities: exp.rolesAndResponsibilities.split('\r\n')
                };
            }),
            achievements: resume.achievements.map(mom => {
                return {
                    icon: "fa fa-trophy fa-2x",
                    heading: "Courage I had",
                    content: mom
                };
            }),
            strengths: resume.strengths ? this.splitArrayIntoChunks(resume.strengths, 3) : [],
            languages: resume.languages.map(lan => {
                return { language: lan.name, level: lan.level };
            }),
            educations: resume.educations.map(edu => {
                return {
                    stream: edu.stream,
                    university: edu.university,
                    icon: "fa fa-calendar",
                    fromDate: "",
                    toDate: ""
                };
            }),
            dayOfLife: [],
            lifePhilosophy: resume.lifePhilosophy
        };
    }

    splitArrayIntoChunks = (arr, chunkLen) => {
        var chunkList = [];
        var chunkCount = Math.ceil(arr.length / chunkLen);
        for (var i = 0; i < chunkCount; i++) {
            chunkList.push(arr.splice(0, chunkLen));
        }
        return chunkList;
    }

    render() {
        //console.log('from url ', this.props.location.state);
        //var data = this.renderToHTMLData(this.state.resume);

        fetch('api/ResumeData/Get?id=' + this.state.id)
            .then((response) => {
                return response.json();
            }).then((data) => {
                console.log(data);
                const rData = this.renderToHTMLData(data);
                //const cvData = this.renderToHTMLData(data);
                console.log('cv data is ', rData);
                this.setState({ resume: rData });
                console.log('state is ', this.state);
            });

        return (
            <div>
                {this.state.resume ? 
                (<div className="container-fluid">
                    <div className="row marginTop w-100">
                        <div className="com-xs-6 col-md-8 col-sm-8 col-xs-offset-1">
                            <PersonalInfo info={this.state.resume.personalInfo} />
                        </div>
                        <div className="col-xs-6 col-md-2 col-sm-2">
                            <img src={personalPhoto} className="img-circle responsive" alt="my-photo" />
                        </div>
                    </div>
                    <div className="row w-100">
                        <div className="col-xs-6 col-md-6 col-sm-6 col-xs-offset-1">
                            <ContentHeading name="Experience" />
                            {this.state.resume.experiences.map(function (name, index) {
                                return (index + 1 !== this.state.resume.experiences.length) ?
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
                            {this.state.resume.achievements.map(function (name, index) {
                                return (index + 1 !== this.state.resume.achievements.length) ?
                                    ([<ProudOf key={index} achievement={name} />, <hr key={index + "p"} className="style3" />]) :
                                    <ProudOf key={index} achievement={name} />;
                            })}
                            <ContentHeading name="Strengths" />
                            {this.state.resume.strengths.map(function (name, index) {
                                return (index + 1 !== this.state.resume.strengths.length) ?
                                    [<Strength strengths={name} />, <hr className="style3" />] :
                                    <Strength strengths={name} />;
                            })}
                            <ContentHeading name="Languages" />
                            {this.state.resume.languages.map(function (name, index) {
                                return (index + 1 !== this.state.resume.languages.length) ?
                                    ([<Language key={index} language={name} />, <hr className="style3" />]) :
                                    <Language key={index} language={name} />;
                            })}
                            <ContentHeading name="Education" />
                            {this.state.resume.educations.map(function (name, index) {
                                return (index + 1 !== this.state.resume.educations.length) ?
                                    ([<Education key={index} education={name} />, <hr className="style3" />]) :
                                    <Education key={index} education={name} />;
                            })}

                        </div>
                    </div>
                </div>) : null}
            </div>
            
        );
    }
}