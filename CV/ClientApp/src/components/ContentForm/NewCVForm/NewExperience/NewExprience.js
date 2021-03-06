import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import '../../../ContentForm/ContentForm';

import './NewExperience.css';
import { FieldGroup } from '../../../Common/FieldGroup';

export default class NewExperience extends Component {
    constructor(props, context) {
        super(props, context);
    }

    handleChecked = (e) => {
        this.setState({ isCurrentEmpChecked: !this.state.isCurrentEmpChecked });
    }

    render() {
        return (
            <div>
                <div className="experience-style w-100 p-2" ref={this.props.innerRef}>
                    <div className="row w-100">
                        <div className="col-md-4">
                            <FieldGroup
                                name="title"
                                id="formControlsTitle"
                                type="text"
                                label="Title"
                                value={this.props.experience.title.value}
                                placeholder={this.props.experience.title.placeHolder}
                                onChange={(e) => this.props.valueChange(e, this.props.index)}
                                required
                            />
                        </div>
                        <div className="col-md-4">
                            <FieldGroup
                                name="company"
                                id="formControlsCompany"
                                type="text"
                                label="Company"
                                value={this.props.experience.company.value}
                                placeholder={this.props.experience.company.placeHolder}
                                onChange={(e) => this.props.valueChange(e, this.props.index)}
                                required
                            />
                        </div>
                        <div className="col-md-4">
                            <FieldGroup
                                name="location"
                                id="formControlsLocation"
                                type="text"
                                label="Location"
                                value={this.props.experience.location.value}
                                placeholder={this.props.experience.location.placeHolder}
                                onChange={(e) => this.props.valueChange(e, this.props.index)}
                                required
                            />
                        </div>
                    </div>
                    <div className="row w-100">
                        <div className="col-md-2">
                            <h6>From</h6>
                            <DatePicker className="text-center"
                                id="ex-fromDatepicker"
                                selected={this.props.experience.fromDate.formattedValue}
                                onChange={(v) => this.props.dateValueChange('fromDate', v, this.props.index)}
                                required
                            />
                        </div>
                        <div className="col-md-2">
                            <div className="form-group">
                                <h6>To</h6>
                                <DatePicker id="ex-toDatepicker" className="text-center"
                                    selected={this.props.experience.toDate.formattedValue}
                                    disabled={this.props.experience.isCurrentEmployer}
                                    onChange={(v) => this.props.dateValueChange('toDate', v, this.props.index)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="form-check">
                                <input className="form-check-input chkStyle" type="checkbox" value="" id="defaultCheck1"
                                    checked={this.props.experience.isCurrentEmployer}
                                    onChange={() => this.props.handleCurrentEmployerCheck(this.props.index)} />
                                <label className="form-check-label" htmlFor="defaultCheck1">
                                    Current Employer?
                            </label>
                            </div>
                        </div>
                        <hr />
                    </div>
                    <div className="row w-100">
                        <div className="col-md-8">
                            <div className="form-group" controlid="formControlsTextarea">
                                <label>Roles & Responsibilities</label>
                                <textarea
                                    name="rolesAndResponsibilities"
                                    className="form-control"
                                    id="formControlsRolesAndResponsibilities"
                                    rows="3"
                                    value={this.props.experience.rolesAndResponsibilities.value}
                                    placeholder={this.props.experience.rolesAndResponsibilities.placeHolder}
                                    onChange={(e) => this.props.valueChange(e, this.props.index)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <button type="submit" className="btn btn-info" onClick={(e) => this.props.delete(e, this.props.index)}>
                                <i className="fa fa-trash"></i> Delete Experience
                            </button>
                        </div>
                    </div>
                </div>
                <hr />
            </div>
        );
    }
}