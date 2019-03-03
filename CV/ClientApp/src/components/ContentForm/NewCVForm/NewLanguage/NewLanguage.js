import React, { Component } from 'react';
import './NewLanguage.css';

export class NewLanguage extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div>
                <div className="row w-100" ref={this.props.innerRef}>
                    <div className="col-md-3 p-0">
                        <select className="custom-select"
                            name="name"
                            placeholder="select"
                            className="languagesDropdown"
                            value={this.props.language.name}
                            onChange={(e) => this.props.selectionChange(e, this.props.index)}>
                            <option value="select" active>SELECT LANGUAGE</option>
                            <option value="english">English</option>
                            <option value="finnish">Finnish</option>
                            <option value="swedish">Swedish</option>
                            <option value="spanish">Spanish</option>
                            <option value="german">German</option>
                        </select>
                    </div>
                    <div className="col-md-7 p-0">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                type="radio"
                                name={this.props.levelGroupName}
                                id="inlineRadio1"
                                value="1"
                                checked={this.props.language.level === 1}
                                onChange={(e) => this.props.selectionChange(e, this.props.index)}
                            />
                            <label className="form-check-label" htmlFor="inlineRadio1">Basic</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                type="radio"
                                name={this.props.levelGroupName}
                                id="inlineRadio2"
                                value="2"
                                checked={this.props.language.level === 2}
                                onChange={(e) => this.props.selectionChange(e, this.props.index)}
                            />
                            <label className="form-check-label" htmlFor="inlineRadio2">Good</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                type="radio"
                                name={this.props.levelGroupName}
                                id="inlineRadio3"
                                value="3"
                                checked={this.props.language.level === 3}
                                onChange={(e) => this.props.selectionChange(e, this.props.index)}
                            />
                            <label className="form-check-label" htmlFor="inlineRadio3">Excellent</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                type="radio"
                                name={this.props.levelGroupName}
                                id="inlineRadio4"
                                value="4"
                                checked={this.props.language.level === 4}
                                onChange={(e) => this.props.selectionChange(e, this.props.index)}
                            />
                            <label className="form-check-label" htmlFor="inlineRadio4">Expert</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                type="radio"
                                name={this.props.levelGroupName}
                                id="inlineRadio5"
                                value="5"
                                checked={this.props.language.level === 5}
                                onChange={(e) => this.props.selectionChange(e, this.props.index)}
                            />
                            <label className="form-check-label" htmlFor="inlineRadio5">Native</label>
                        </div>
                    </div>
                    <div className="col-md-2 p-0">
                        <button className="btn btn-info" onClick={(e) => this.props.delete(e, this.props.index)}>
                            <i className="fa fa-trash" /> Delete
                    </button>
                    </div>
                </div>
                <hr />
            </div>
        );
    }
}