import React, { Component } from 'react';
import './NewLanguage.css';

export class NewLanguage extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div className="row" ref={this.props.innerRef}>
                <div className="col-md-5">
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
                <div className="col-md-4">
                    <div class="form-check form-check-inline">
                        <input class="form-check-input"
                            type="radio"
                            name={this.props.levelGroupName}
                            id="inlineRadio1"
                            value="1"
                            checked={this.props.language.level === 1}
                            onChange={(e) => this.props.selectionChange(e, this.props.index)}
                        />
                        <label class="form-check-label" for="inlineRadio1">Basic</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input"
                            type="radio"
                            name={this.props.levelGroupName}
                            id="inlineRadio2"
                            value="2"
                            checked={this.props.language.level === 2}
                            onChange={(e) => this.props.selectionChange(e, this.props.index)}
                        />
                        <label class="form-check-label" for="inlineRadio2">Good</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input"
                            type="radio"
                            name={this.props.levelGroupName}
                            id="inlineRadio3"
                            value="3"
                            checked={this.props.language.level === 3}
                            onChange={(e) => this.props.selectionChange(e, this.props.index)}
                        />
                        <label class="form-check-label" for="inlineRadio3">Expert</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input"
                            type="radio"
                            name={this.props.levelGroupName}
                            id="inlineRadio4"
                            value="4"
                            checked={this.props.language.level === 4}
                            onChange={(e) => this.props.selectionChange(e, this.props.index)}
                        />
                        <label class="form-check-label" for="inlineRadio4">Native</label>
                    </div>
                </div>
                <br />
                <div className="col-md-2">
                    <button onClick={(e) => this.props.delete(e, this.props.index)}>
                        <i className="fa fa-trash" />
                    </button>
                </div>
            </div>
        );
    }
}