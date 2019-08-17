import React from 'react';
import PropTypes, { bool, string } from 'prop-types';
import ClassNames from 'classnames';
import { List } from 'immutable';

import './select.scss';

export default class Select extends React.PureComponent {
    static propTypes = {
        list: PropTypes.oneOfType([PropTypes.instanceOf(List), PropTypes.instanceOf(PropTypes.array)]),
        valueField: PropTypes.string,
        classNameOption: PropTypes.string,
        classNameContainer: PropTypes.string,
        onChange: PropTypes.func,
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        isDisabled: bool,
        defaultPlaceholder: string
    };

    static defaultProps = {
        value: 0,
        list: new List(),
        valueField: '',
        onChange: () => {},
        classNameOption: '',
        classNameContainer: '',
        isDisabled: false,
        defaultPlaceholder: ''
    };

    state = {
        isOptionsOpened: false
    };

    selectRef = React.createRef();
    containerRef = React.createRef();
    currentValueRef = React.createRef();

    componentDidMount() {
        document.body.addEventListener('click', this.onHandlerOutsideClick);
    }

    componentWillUnmount() {
        document.body.removeEventListener('click', this.onHandlerOutsideClick);
    }

    onHandlerOutsideClick = e => {
        const { isOptionsOpened } = this.state;

        if (e.target === this.currentValueRef.current) {
            this.setState({ isOptionsOpened: !isOptionsOpened });

            return;
        }

        if (isOptionsOpened && this.selectRef.current) {
            const arrayNodes = Array.from(this.selectRef.current.childNodes);

            if (arrayNodes.find(element => element === e.target)) {
                this.onChange(e);
            }
        }

        this.setState({ isOptionsOpened: false });
    };

    onChange = e => {
        const { valueField, list, onChange } = this.props;

        const currentElement = list.find(element => element.get(valueField) === e.target.innerText);

        if (currentElement) {
            onChange(currentElement.get('id'));
        }
    };

    render() {
        let {
            list,
            value,
            valueField,
            classNameOption,
            classNameContainer,
            defaultPlaceholder,
            isDisabled
        } = this.props;
        const { isOptionsOpened } = this.state;

        const currentElement = list && list.find(element => element.get('id') == value);
        let currentValue = '';

        if (currentElement) {
            currentValue = currentElement.get(valueField);
        }

        return (
            <div className={ClassNames(classNameContainer)} onClick={this.onToggleSelectOpen} ref={this.containerRef}>
                <div className="select__content">
                    {isDisabled && <div className="select__content--disabled" />}

                    <p
                        className={ClassNames('select__current-value', {
                            'select__current-value--default': !currentValue && defaultPlaceholder
                        })}
                        ref={this.currentValueRef}
                    >
                        {!isDisabled && (currentValue || defaultPlaceholder)}
                    </p>
                    {isOptionsOpened && (
                        <div className="select__options-container">
                            <div className="select__option-container" ref={this.selectRef}>
                                {list &&
                                    list.map(element => (
                                        <div
                                            key={element.get('id')}
                                            className={ClassNames('select__option', classNameOption)}
                                        >
                                            {element.get(valueField)}
                                        </div>
                                    ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}
