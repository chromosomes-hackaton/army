import React from 'react';
import PropTypes from 'prop-types';

import { Button, Input, Spinner } from 'shared/components';
import Slider from '../slider/slider';
import { QUESTIONS } from '../../constants/questions';

export default class Questions extends React.Component {
    constructor() {
        super();
        this.answers = [];
        this.state = {
            isValid: false
        };
    }

    onChange = (question, isChecked) => {
        const { answers } = this;
        const answer = answers.find(item => item.questionId === question.id);
        if (answer) {
            answer.isChecked = isChecked;
        } else {
            answers.push({ questionId: question.id, specialistId: question.specialistId, isChecked });
        }
        if (this.answers.length === QUESTIONS.length) {
            this.setState({
                isValid: true
            });
        }
    };

    onSave = () => {
        console.log(this.answers);
    };

    render() {
        const { isValid } = this.state;

        return (
            <div className="questions__container">
                <Slider onChange={this.onChange} data={QUESTIONS} />
                <Button text="Сохранить" onClick={this.onSave} disabled={!isValid} />
            </div>
        );
    }
}
