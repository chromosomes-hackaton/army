import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Button, Input, Spinner } from 'shared/components';
import Slider from '../slider/slider';
// import { QUESTIONS } from '../../constants/questions';
import { getQuestions } from '../../actions/questions/question-action';

class Questions extends React.Component {
    constructor() {
        super();
        this.answers = [];
        this.state = {
            isValid: false
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
            answers.push({ questionId: question._id, specialistId: question.specialistId, isChecked });
        }
        if (this.answers.length === this.props.questions.length) {
            this.setState({
                isValid: true
            });
        }
    };

    onSave = () => {
    };

    render() {
        const { isValid } = this.state;
        const { questions } = this.props;

        return (
            <div className="questions__container">
                {questions.length && <Slider onChange={this.onChange} data={questions} />}
                <Button text="Сохранить" onClick={this.onSave} disabled={!isValid} />
            </div>
        );
    }
}

const mapStateToProps = ({ questions }) => ({
    questions: questions.questions,
    isPending: questions.isPending
});

const mapDispatchToProps = dispatch => ({
    // getQuestions: bindActionCreators(getQuestions, dispatch)
    getQuestions: bindActionCreators(getQuestions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Questions);
