import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { FieldGroup } from '../../../Common/FieldGroup';

export class NewEducation extends Component {
    displayName = NewEducation.name;

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div>
                <div className="experience-style w-100 p-2" ref={this.props.innerRef}>
                    <div className="row w-100">
                        <div className="col-md-4 col-md-offset-1">
                            <FieldGroup
                                name="stream"
                                id="formControlseducationStream"
                                type="text"
                                value={this.props.education.stream.value}
                                placeholder={this.props.education.stream.placeHolder}
                                onChange={(e) => this.props.valueChange(e, this.props.index)}
                                required
                            />
                        </div>
                        <div className="col-md-4">
                            <FieldGroup
                                name="university"
                                id="formControlseducationUniversity"
                                type="text"
                                value={this.props.education.university.value}
                                placeholder={this.props.education.university.placeHolder}
                                onChange={(e) => this.props.valueChange(e, this.props.index)}
                                required
                            />
                        </div>
                    </div>
                    <div className="row w-100">
                        <div className="col-md-2">
                            <div className="form-group">
                                <h6>From</h6>
                                <DatePicker className="text-center"
                                    id="ed-fromDatepicker"
                                    selected={this.props.education.fromDate.formattedValue}
                                    onChange={(v) => this.props.dateValueChange('fromDate', v, this.props.index)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="form-group">
                                <h6>To</h6>
                                <DatePicker id="ed-toDatepicker" className="text-center"
                                    selected={this.props.education.toDate.formattedValue}
                                    disabled={this.props.education.isCurrentStudent}
                                    onChange={(v) => this.props.dateValueChange('toDate', v, this.props.index)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"
                                    checked={this.props.education.isCurrentStudent}
                                    onChange={() => this.props.handleCurrentStudentCheck(this.props.index)} />
                                <label className="form-check-label" htmlFor="defaultCheck1">
                                    Current Student?
                            </label>
                            </div>
                        </div>
                        <hr />
                        <div className="col-md-4">
                            <button type="submit" className="btn btn-info" onClick={(e) => this.props.delete(e, this.props.index)}>
                                <i className="fa fa-trash"></i> Delete Education</button>
                        </div>
                    </div>
                    <hr />
                </div>
                <hr />
            </div>
        )
    }
}