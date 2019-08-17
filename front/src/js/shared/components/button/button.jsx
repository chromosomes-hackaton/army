import React from 'react';
import PropTypes from 'prop-types';
import ClassName from 'classnames';

import './button.scss';

export default class Button extends React.PureComponent {
    static propTypes = {
        className: PropTypes.string,
        classNameContainer: PropTypes.string,
        content: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
            .isRequired,
        buttonRef: PropTypes.func,
        isDisabled: PropTypes.bool,
        handler: PropTypes.func
    };

    static defaultProps = {
        buttonRef: () => {},
        className: '',
        classNameContainer: '',
        isDisabled: false,
        handler: () => {}
    };

    handler = () => {
        const { isDisabled, handler } = this.props;

        if (!isDisabled) {
            handler();
        }
    };

    render() {
        const {
            className,
            classNameContainer,
            content,
            buttonRef,
            isDisabled
        } = this.props;

        return (
            <div
                className={ClassName('button__container', classNameContainer, {
                    'button__container--disabled': isDisabled
                })}
                ref={buttonRef}
                onClick={this.handler}
            >
                <div className={ClassName('button__content', className)}>
                    {content}
                </div>
            </div>
        );
    }
}
