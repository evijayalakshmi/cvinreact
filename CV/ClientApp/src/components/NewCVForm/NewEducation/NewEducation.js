import React, { Component } from 'react';
import { FieldGroup } from '../FieldGroup';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export class NewEducation extends Component {
    constructor(props, context) {
        super(props, context)
    };

    render() {
        return (
            <div>
            <div className="experience-style w-100" ref={this.props.innerRef}>
                <div className="row w-100">
                    <div className="col-md-4">
                        <FieldGroup
                            name="stream"
                            id="formControlseducationStream"
                            type="text"
                            value={this.props.education.stream.value}
                            placeholder={this.props.education.stream.placeHolder}
                            onChange={(e) => this.props.valueChange(e, this.props.index)}
                            required="true"
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
                        />
                    </div>
                    <div className="col-md-4">
                        <button type="submit" onClick={(e) => this.props.delete(e, this.props.index)}>
                            <i className="fa fa-trash"> Delete Education</i></button>
                    </div>
                </div>
                <div className="row w-100">
                    <div className="col-md-8">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>From</label>
                                <DatePicker
                                    id="ed-fromDatepicker"
                                    selected={this.props.education.fromDate.formattedValue}
                                    onChange={(v) => this.props.dateValueChange('fromDate', v, this.props.index)}
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>To</label>
                                <DatePicker id="ed-toDatepicker"
                                    selected={this.props.education.toDate.formattedValue}
                                    disabled={this.props.education.isCurrentStudent}
                                    onChange={(v) => this.props.dateValueChange('toDate', v, this.props.index)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"
                                checked={this.props.education.isCurrentStudent}
                                onChange={() => this.props.handleCurrentStudentCheck(this.props.index)} />
                                <label className="form-check-label" htmlFor="defaultCheck1">
                                Current Student?
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            </div>
        )
    }
}