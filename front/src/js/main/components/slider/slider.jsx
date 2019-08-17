import React from 'react';

import { Carousel } from 'react-responsive-carousel';

import { Button } from 'shared/components';
// import { QUESTIONS } from '../../constants/questions';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './slider.scss';

export default class Clider extends React.PureComponent {
    // constructor() {
    //     super();
    //     this.answers = [];
    // }

    // onChange = (question, isChecked) => {
    //     const { answers } = this;
    //     const answer = answers.find(item => item.questionId === question.id);
    //     if (answer) {
    //         answer.isChecked = isChecked;
    //     } else {
    //         answers.push({ questionId: question.id, specialistId: question.specialistId, isChecked });
    //     }
    // };

    // onSave = () => {
    //     console.log(this.answers);
    // };

    getCarouselItem = (item, index) => {
        const { onChange } = this.props;

        return (
            <div className="question__container" key="index">
                <form>
                    {item.question}
                    <div className="question__answer">
                        <input type="radio" id="radio1" name="answer" onChange={() => onChange(item, true)} />
                        <p>Да</p>
                    </div>
                    <div className="question__answer">
                        <input type="radio" id="radio2" name="answer" onChange={() => onChange(item, false)} />
                        <p>Нет</p>
                    </div>
                </form>
            </div>
        );
    };

    render() {
        const { data } = this.props;

        return (
            // <div className="questions__container">
                <Carousel
                    infiniteLoop
                    showThumbs={false}
                    showStatus={false}
                    useKeyboardArrows
                    showIndicators={false}
                    centerSlidePercentage={100}
                >
                    {data.map(this.getCarouselItem)}
                </Carousel>
            // </div>
        );
    }
}
