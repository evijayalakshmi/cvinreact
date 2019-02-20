import React, { Component } from 'react';
import { Col, Grid, Row, FormGroup, FormControl, Checkbox, Button, Navbar, Nav, NavDropdown } from 'react-bootstrap';

import { NewCVForm } from '../NewCVForm/NewCVForm';
import { MyCv } from '../MyCV/MyCv';
import { NewListItem } from '../NewCVForm/NewListItem/NewListItem';
import { ContentHeading } from '../ContentHeading/ContentHeading';

export class ContentForm extends Component {
    displayName = ContentForm.name;

    constructor(props) {
        super(props);

        this.state = {
            edit: true,
            render: false,
            oldResumes: [],
            userEmail: '',
            userName: ''
        };

    }

    render() {
        const resumes = [];
        for (var i = 0; i < this.state.oldResumes.length; i += 1) {
            resumes.push(<NewListItem
                key={i}
                index={i}
                innerRef={React.createRef()}
                listItem={this.state.oldResumes[i]} />);
        }

        return (
            <div>
                <Navbar bg="dark" variant="dark" fixed="top"
                    style={{ width: "100%" }}>
                    <Navbar.Brand href="#">Resume Builder App</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            Signed in as: {this.state.userName}
                        </Navbar.Text>
                        <Navbar.Text>
                            <a href="#login">Logout</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Navbar>

                <Grid fluid>
                    <Row>
                        <Col md={2}>
                            <ContentHeading name="Saved Resumes" />
                            <ul className="list-group">
                                {resumes}
                            </ul>
                        </Col>
                        <Col md={10}>
                            {this.state.edit ? <NewCVForm userInfo={{ userName: this.state.userName, userEmail: this.state.userEmail }}/> : null}
                            {this.state.render ? <MyCv /> : null}
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}