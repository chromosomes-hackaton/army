import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';

import './message.scss';

export default class Message extends React.PureComponent {
    static propTypes = {
        message: PropTypes.string,
        className: PropTypes.string,
        isError: PropTypes.bool.isRequired,
        classNameContainer: PropTypes.string,
    };

    static defaultProps = {
        className: '',
        classNameContainer: '',
        message: '',
    };

    render() {
        const { message, isError, className, classNameContainer } = this.props;

        return (
            <div className={ClassNames('message__container', classNameContainer)}>
                <p
                    className={ClassNames('message__content', className, {
                        'message__content--error': isError,
                    })}
                >
                    {message}
                </p>
            </div>
        );
    }
}
