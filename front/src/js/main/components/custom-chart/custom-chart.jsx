import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './custom-chart.scss';

export default class CustomChart extends React.PureComponent {
    static propTypes = {};

    static defaultProps = {};

    render() {
        const { data } = this.props;

        return (
            <div className="custom-chart__container">
                <div className="custom-chart__options-container">
                    {data &&
                        data.map(item => (
                            <div className="custom-chart__option">
                                <div className="custom-chart__option-label">
                                    <p>
                                        <Link to={`/hoping/${item.id}`}>{item.name}</Link>
                                    </p>
                                </div>
                                <div className="custom-chart__option-value" style={{ width: `${item.px}px` }}></div>
                            </div>
                        ))}
                </div>
            </div>
        );
    }
}
