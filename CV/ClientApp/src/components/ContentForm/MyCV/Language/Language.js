import React, { Component } from 'react';
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
            <div className="row w-100">
                <div className="col-md-6 col-sm-6">
                    <span><b>{this.props.language.name}</b></span>
                </div>
                <div className="col-md-6 col-sm-6">
                    {indents}
                </div>
            </div>
        );
    }
}