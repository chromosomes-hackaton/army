import React from "react";
import PropTypes from "prop-types";

import { Icon } from "antd";

import "./custom-button.scss";

export default class CustomButton extends React.PureComponent {
    static propTypes = {};

    static defaultProps = {};

    render() {
        const { title, state } = this.props;

        let color = "#EAEAEA";

        if (state === 2) {
            color = "#D2D052";
        }
        if (state == 3) {
            color = "#6CD26C";
        }

        return (
            <div className="custom-button__container">
                <p className="custom-button__title">{title}</p>

                <div className="custom-button__status">
                    <Icon
                        type="warning"
                        style={{
                            color,
                            border: `1 px solid ${color}`,
                        }}
                    />
                </div>
            </div>
        );
    }
}
