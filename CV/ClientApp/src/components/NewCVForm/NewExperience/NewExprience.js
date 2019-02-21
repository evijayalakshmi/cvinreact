import React, { Component } from 'react';
import { FieldGroup } from '../FieldGroup';
import './NewExperience.css';
import DatePicker from 'react-bootstrap-date-picker';
import '../NewCVForm.css';


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
            <div className="experience-style w-100" ref={this.props.innerRef}>
                <div className="row w-100">
                    <div className="col-md-4">
                        <FieldGroup
                            name="title"
                            id="formControlsTitle"
                            type="text"
                            label="Title"
                            value={this.props.experience.title.value}
                            placeholder={this.props.experience.title.placeHolder}
                            required="true"
                            onChange={(e) => this.props.valueChange(e, this.props.index)}
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
                            required="true"
                            onChange={(e) => this.props.valueChange(e, this.props.index)}
                        />
                    </div>
                    <div  className="col-md-4">
                        <FieldGroup
                            name="location"
                            id="formControlsLocation"
                            type="text"
                            label="Location"
                            value={this.props.experience.location.value}
                            placeholder={this.props.experience.location.placeHolder}
                            required="true"
                            onChange={(e) => this.props.valueChange(e, this.props.index)}
                        />
                    </div>
                </div>
                <div className="row w-100">
                    <div className="col-md-4">
                        <div className="form-group">
                            <label>From</label>
                            <DatePicker
                                id="ex-fromDatepicker"
                                value={this.props.experience.fromDate.value}
                                onChange={(v, fv) => this.props.dateValueChange('fromDate', v, fv, this.props.index)}
                            />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group">
                            <label>To</label>
                            <DatePicker id="ex-toDatepicker"
                                value={this.props.experience.toDate.value}
                                disabled={this.props.experience.isCurrentEmployer}
                                onChange={(v, fv) => this.props.dateValueChange('toDate', v, fv, this.props.index)}
                            />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"
                                checked={this.props.experience.isCurrentEmployer}
                                onChange={() => this.props.handleCurrentEmployerCheck(this.props.index)}/>
                            <label class="form-check-label" for="defaultCheck1">
                                Current Employer?
                            </label>
                        </div>
                    </div>
                </div>
                <div className="row w-100">
                    <div className="col-md-8">
                        <div className="form-group" controlId="formControlsTextarea">
                            <label>Roles & Responsibilities</label>
                            <textarea
                                name="rolesAndResponsibilities"
                                class="form-control"
                                id="formControlsRolesAndResponsibilities"
                                rows="3"
                                value={this.props.experience.rolesAndResponsibilities.value}
                                placeholder={this.props.experience.rolesAndResponsibilities.placeHolder}
                                onChange={(e) => this.props.valueChange(e, this.props.index)}>
                            </textarea>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <button type="submit" onClick={(e) => this.props.delete(e, this.props.index)}>
                            <i class="fa fa-trash"> Delete Experience</i></button>
                    </div>
                </div>
            </div>
            <hr />
            </div>
        );
    }
}
