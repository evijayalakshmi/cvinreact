import React, { Component } from 'react';
import { IconFieldGroup } from '../../../Common/IconFieldGroup';

export default class NewAchievement extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div className="row" ref={this.props.innerRef}>
                <div className="col-md-10">
                    <IconFieldGroup
                        name="achievement"
                        id="formControlsachievement"
                        value={this.props.achievement.value}
                        placeholder={this.props.achievement.placeHolder}
                        icon="fa fa-trophy fa-1x"
                        componentClass="textarea"
                        onChange={(e) => this.props.valueChange(e, this.props.index)}
                    />
                </div>
                <div className="col-md-2">
                    <button onClick={(e) => this.props.delete(e, this.props.index)}><i class="fa fa-trash"></i></button>
                </div>
            </div>
        )
    }
}