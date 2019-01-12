import React, { Component } from 'react';
import { Col, Grid, Row } from 'react-bootstrap';

export class Language extends Component {
    displayName = Language.name;

    render() {
        var indents = [];
        for (var i = 0; i < this.props.language.level; i++) {

            indents.push(<span className='indent' key={i + "l"}><i class="fa fa-circle"></i></span>);
        }
        return (
            <div>
                <Row>
                    <Col md={6}>
                        <span>{this.props.language.language}</span>
                    </Col>
                    <Col md={6}>
                        {indents}
                    </Col>
                </Row>
                <br />
                <hr className="style3" />
            </div>
        );
    }
}