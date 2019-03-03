import React, { Component } from 'react';
import personalPhoto from '../../../assets/img/profileplaceholder.png'
import './MyCV.css';
import { Experience } from './Experience/Experience';
import { PersonalInfo } from './PersonalInfo/PersonalInfo';
import { ProudOf } from './ProudOf/ProudOf';
import { Language } from './Language/Language';
import { Education } from './Education/Education';
import { Strength } from './Strength/Strength';
import { CvData } from '../../../models/CvData';
import { DayChart } from './DayChart/DayChart';
import { ContentHeading } from '../../Common/ContentHeading/ContentHeading';
import ReactToPrint from 'react-to-print';

export class MyCv extends Component {
    displayName = MyCv.name;

    constructor(props, context) {
        super(props, context);

        console.log('from url ', this.props.match.params.id);

        this.state = {
            id: this.props.match.params.id
        };

        console.log('now the state is set to: ', this.state);

        fetch('api/ResumeData/Get?id=' + this.state.id)
            .then((response) => {
                return response.json();
            }).then((data) => {
                console.log(data);
                const rData = this.renderToHTMLData(data);
                //const cvData = this.renderToHTMLData(data);
                console.log('cv data is ', rData);

                //var cvData = new CvData();
                //this.setState({ resume: cvData.getData() });
                this.setState({ resume: rData});
                console.log('state is ', this.state);
            });
    }

    renderToHTMLData = (resume) => {
        return {
            personalInfo: {
                name: resume.personalInfo.name,
                location: resume.personalInfo.location,
                currentOccupation: resume.personalInfo.currentOccupation,
                phoneNumber: resume.personalInfo.phoneNumber,
                designation: resume.personalInfo.designation,
                email: resume.personalInfo.eMail,
                linkedIn: resume.personalInfo.linkedIn,
                gitURL: resume.personalInfo.gitURL,
                blog: resume.personalInfo.blogURL
            },
            experiences: resume.experiences.map(exp => {
                return {
                    title: exp.title,
                    company: exp.company,
                    location: exp.location,
                    fromDate: exp.fromDate,
                    toDate: exp.toDate,
                    rolesAndResponsibilities: exp.rolesAndResponsibilities
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
                return { name: lan.name, level: lan.level };
            }),
            educations: resume.educations.map(edu => {
                return {
                    stream: edu.stream,
                    university: edu.university,
                    icon: "fa fa-calendar",
                    fromDate: edu.fromDate,
                    toDate: edu.toDate
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

        //fetch('api/ResumeData/Get?id=' + this.state.id)
        //    .then((response) => {
        //        return response.json();
        //    }).then((data) => {
        //        console.log(data);
        //        const rData = this.renderToHTMLData(data);
        //        //const cvData = this.renderToHTMLData(data);
        //        console.log('cv data is ', rData);
        //        this.setState({ resume: rData });
        //        console.log('state is ', this.state);
        //    });

        var resumeData = this.state.resume;

        return (
            <div>
                <hr />
                <hr/>
                <div className="text-center">
                    <ReactToPrint
                        trigger={() => <button className="btn btn-info">Print this out!</button>}
                        content={() => this.componentRef}
                    />
                </div>
                <hr/>
                {resumeData ?
                    (<div className="container pageBorder p-3" ref={el => (this.componentRef = el)}>
                        <div className="row w-100">
                            <div className="col-xs-6 col-md-8 col-sm-8">
                                <PersonalInfo info={resumeData.personalInfo} />
                            </div>
                            <div className="col-xs-6 col-md-2 col-sm-4">
                                <img src={personalPhoto} className="rounded-circle responsive" alt="my-photo" />
                            </div>
                        </div>
                        <hr />
                        <div className="row w-100">
                            <div className="col-md-8 col-xs-6 col-sm-8">
                                {resumeData.lifePhilosophy !== '' ?
                                    <div className="row w-100">
                                        <ContentHeading name="Life Philosophy" />
                                        <em>"{resumeData.lifePhilosophy}"</em>
                                    </div> :
                                    null}
                                <div className="row w-100">
                                    {resumeData.experiences.length > 0 ? [<ContentHeading name="Experience" />,
                                    resumeData.experiences.map(function (name, index) {
                                        return (index + 1 !== resumeData.experiences.length) ?
                                            ([<Experience key={index} experience={name} />, <hr key={index + "h"} className="style3" />]) :
                                            <Experience key={index} experience={name} />;
                                    })] : null}
                                </div>
                                <div className="row w-100">
                                    <ContentHeading name="Education" />
                                    {resumeData.educations.map(function (name, index) {
                                        return (index + 1 !== resumeData.educations.length) ?
                                            ([<Education key={index} education={name} />, <hr className="style3" />]) :
                                            <Education key={index} education={name} />;
                                    })}
                                </div>
                            </div>
                            <div className="col-md-4 col-xs-6 col-sm-4">
                                <div className="row w-100">
                                    {resumeData.languages.length > 0 ? [<ContentHeading name="Languages" />,
                                    resumeData.languages.map(function (name, index) {
                                        return (index + 1 !== resumeData.languages.length) ?
                                            ([<Language key={index} language={name} />, <hr className="style3" />]) :
                                            <Language key={index} language={name} />;
                                    })] : null}
                                </div>
                                <div className="row w-100">
                                    {resumeData.achievements.length > 0 ? [<ContentHeading name="Most Proud Of" />,
                                    resumeData.achievements.map(function (name, index) {
                                        return (index + 1 !== resumeData.achievements.length) ?
                                            ([<ProudOf key={index} achievement={name} />, <hr key={index + "p"} className="style3" />]) :
                                            <ProudOf key={index} achievement={name} />;
                                    })] : null}
                                </div>

                                <div className="row w-100">
                                    {resumeData.strengths.length > 0 ?
                                        [<ContentHeading name="Strengths" />,
                                        resumeData.strengths.map(function (name, index) {
                                            return (index + 1 !== resumeData.strengths.length) ?
                                                [<Strength strengths={name} />, <hr className="style3" />] :
                                                <Strength strengths={name} />;
                                        })] : null}
                                </div>
                            </div>
                        </div>
                        <div className="row w-100">
                            {resumeData.dayOfLife.length > 0 ? [
                                <div className="col">
                                    <ContentHeading name="A day of my life" />
                                    <DayChart />
                                </div>
                            ] : null}

                        </div>
                    </div>) : null}
            </div>

        );
    }
}