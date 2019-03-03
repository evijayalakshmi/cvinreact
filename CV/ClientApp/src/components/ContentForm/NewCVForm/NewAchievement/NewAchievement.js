import React, { Component } from 'react';
import { IconFieldGroup } from '../../../Common/IconFieldGroup';

export default class NewAchievement extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <IconFieldGroup
                ref={this.props.innerRef}
                name="achievement"
                id="formControlsachievement"
                value={this.props.achievement.value}
                placeholder={this.props.achievement.placeHolder}
                icon="fa fa-trophy fa-1x"
                componentClass="textarea"
                onChange={(e) => this.props.valueChange(e, this.props.index)}
                delete={(e) => this.props.delete(e, this.props.index)}
            />
        )
    }
}