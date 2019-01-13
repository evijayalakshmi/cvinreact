import React, { Component } from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
import './Language.css'

export class Language extends Component {
    displayName = Language.name;

    render() {
        var indents = [];
        var nonLevelVal = 5 - this.props.language.level;
        for (var i = 0; i < this.props.language.level; i++) {
            indents.push(<span className='indent' key={i + "l"}><i className="fa fa-circle"></i></span>);
        }
        for (var i = 0; i < nonLevelVal; i++) {
            indents.push(<span className='indent' key={i + "l"}><i className="fa fa-circle fa-opcircle"></i></span>);
        }
        return (
            <div>
                <Row>
                    <Col md={6}>
                        <span><b>{this.props.language.language}</b></span>
                    </Col>
                    <Col md={6}>
                        {indents}
                    </Col>
                </Row>
            </div>
        );
    }
}