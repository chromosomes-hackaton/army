import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';

import { Input, Message } from 'shared/components';

import './input-validate.scss';

export default class InputValidate extends React.PureComponent {
    static propTypes = {
        placeholder: PropTypes.string,
        type: PropTypes.string,
        value: PropTypes.string.isRequired,
        message: PropTypes.string,
        onChange: PropTypes.func.isRequired,
        onKeyPress: PropTypes.func,
        classNameInput: PropTypes.string,
        classNameMessage: PropTypes.string,
        classNameContainerInput: PropTypes.string,
        classNameContainerMessage: PropTypes.string,
        isError: PropTypes.bool
    };

    static defaultProps = {
        onKeyPress: () => {},
        classNameInput: '',
        classNameMessage: '',
        message: '',
        type: 'text',
        isError: false
    };

    state = {
        isStartChange: false
    };

    render() {
        const {
            placeholder,
            type,
            value,
            message,
            onChange,
            isError,
            onKeyPress,
            className,
            classNameInput,
            classNameMessage,
            classNameContainerInput,
            classNameContainerMessage,
            isShowMessageForever,
            autoComplete
        } = this.props;

        return (
            <div className={ClassNames('input-validate__container', className)}>
                <Input
                    placeholder={placeholder}
                    type={type}
                    value={value}
                    onChange={onChange}
                    onKeyPress={onKeyPress}
                    classNameContainer={classNameContainerInput}
                    className={classNameInput}
                    autoComplete={autoComplete}
                />
                <div className="input-validate__message-container">
                    {message && (value || isShowMessageForever) && (
                        <Message
                            isError={isError}
                            message={message}
                            className={classNameMessage}
                            classNameContainer={classNameContainerMessage}
                        />
                    )}
                </div>
            </div>
        );
    }
}
