import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';

import './input.scss';

export default class Input extends React.PureComponent {
    static propTypes = {
        name: PropTypes.string,
        className: PropTypes.string,
        classNameContainer: PropTypes.string,
        onBlur: PropTypes.func,
        label: PropTypes.string,
        placeholder: PropTypes.string,
        type: PropTypes.string,
        onKeyPress: PropTypes.func,
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        onChange: PropTypes.func.isRequired,
        isAutoFocus: PropTypes.bool
    };

    static defaultProps = {
        isAutoFocus: false,
        label: '',
        classNameContainer: '',
        className: '',
        placeholder: '',
        type: 'text',
        value: '',
        name: '',
        onChange: () => {},
        onKeyPress: () => {}
    };

    onKeyPress = e => {
        this.props.onKeyPress(e.keyCode || e.charCode);
    };

    render() {
        const {
            placeholder,
            type,
            className,
            customRef,
            classNameContainer,
            onChange,
            value,
            isAutoFocus,
            onBlur,
            id,
            tabIndex,
            onClick,
            isDisabled,
            autoComplete,
            label, 
            name
        } = this.props;

        return (
            <div className={ClassNames('input__container', classNameContainer)}>
                {(label) && <p className="label">{label}</p>}
                <input
                    disabled={isDisabled}
                    tabIndex={tabIndex || 1}
                    id={id}
                    name={name}
                    value={value}
                    type={type}
                    className={ClassNames('input__field', className)}
                    placeholder={placeholder}
                    onChange={onChange}
                    ref={customRef}
                    onKeyPress={this.onKeyPress}
                    autoFocus={isAutoFocus}
                    onBlur={onBlur}
                    onClick={onClick}
                    autoComplete={autoComplete}
                />
            </div>
        );
    }
}
