import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare, faCheckSquare } from '@fortawesome/free-regular-svg-icons';

import './checkbox.scss';

export default class CustomCheckbox extends React.PureComponent {
    static propTypes = {
        isChecked: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]).isRequired,
        onChange: PropTypes.func,
        className: PropTypes.string,
        id: PropTypes.string
    };

    static defaulProps = {
        onChange: () => {},
        className: '',
        id: ''
    };

    render() {
        const { isChecked, onChange, className, id } = this.props;

        return (
            <div className={ClassNames('custom-checkbox__container', className)}>
                <div className="custom-checkbox__shell" id={id} onClick={onChange} />
                <FontAwesomeIcon icon={isChecked ? faCheckSquare : faSquare} className="custom-checkbox__checkbox" />
            </div>
        );
    }
}
