import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Button, Input, Spinner } from 'shared/components';
import Slider from '../slider/slider';
// import { QUESTIONS } from '../../constants/questions';
import { getQuestions, getSpecialists } from '../../actions/questions/question-action';
import './questions.scss';

class Questions extends React.Component {
    constructor() {
        super();
        this.answers = [];
        this.state = {
            isValid: false,
            isReady: false,
            specialists: []
        };
    }

    componentDidMount() {
        this.props.getQuestions();
    }

    onChange = (question, isChecked) => {
        const { answers } = this;
        const answer = answers.find(item => item.questionId === question._id);
        if (answer) {
            answer.isChecked = isChecked;
        } else {
            answers.push({
                questionId: question._id,
                specialistName: question.specialistName,
                specialistId: question.specialistId,
                isChecked,
            });
        }
        if (this.answers.length === this.props.questions.length) {
            this.setState({
                isValid: true
            });
        }
    };

    onSave = () => {
        let specialists = [];
        console.log(this.props.questions);
        console.log(this.answers);
        console.log({ specialists });
        this.answers.forEach((answer) => {
            if (answer.isChecked && !specialists.find(obj => obj.specialistName === answer.specialistName)) {
                specialists.push(answer);
            }
        });
        this.setState({
            isReady: true,
            specialists,
        });
    };

    render() {
        console.log({ questions });
        const { isValid, specialists, isReady } = this.state;
        const { questions } = this.props;

        return !isReady ? (
            <div className="questions__container">
                {!!questions.length && <Slider onChange={this.onChange} data={questions} />}
                <div className="btn-margin">
                    <Button text="Сохранить" onClick={this.onSave} disabled={!isValid} />
                </div>
            </div>
        ) : (
            <div className="recommended-modal">
                <h3>Рекомендуем вам посетить следующих специалистов: </h3>
                {specialists.map((item, index) => (
                    <h4 key={index}>{`${index + 1}) ${item}`}</h4>
                ))}
            </div>
        );
    }
}

const mapStateToProps = ({ questions }) => ({
    questions: questions.questions,
    // specialists: questions.specialists,
    isPending: questions.isPending
});

const mapDispatchToProps = dispatch => ({
    // getQuestions: bindActionCreators(getQuestions, dispatch)
    getQuestions: bindActionCreators(getQuestions, dispatch),
    getSpecialists: bindActionCreators(getSpecialists, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Questions);
