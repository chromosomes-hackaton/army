import React from 'react';
import ReactDOM from 'react-dom';

import PropTypes from 'prop-types';
import ClassNames from 'classnames';

import './portal.scss';

export default class Portal extends React.PureComponent {
    static propTypes = {
        handler: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
        leftPosition: PropTypes.number,
        topPosition: PropTypes.number,
        zIndex: PropTypes.number,
        children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
        isCenter: PropTypes.bool,
    };

    static defaultProps = {
        isCenter: false,
        children: [],
        handler: () => {},
        leftPosition: 0,
        topPosition: 0,
        zIndex: 0,
    };

    componentWillMount() {
        this.portalRoot = document.getElementById('portal');
        this.wrapperNode = document.createElement('div');
    }

    componentDidMount() {
        this.updateWrapperPosition();
        this.portalRoot.appendChild(this.wrapperNode);

        window.addEventListener('resize', this.onResizeWindow);
    }

    componentWillUnmount() {
        this.portalRoot.removeChild(this.wrapperNode);

        window.removeEventListener('resize', this.onResizeWindow);
    }

    onResizeWindow = () => {
        this.updateWrapperPosition();
    };

    updateWrapperPosition() {
        const { topPosition, leftPosition, isCenter, isCustom } = this.props;
        this.wrapperNode.onclick = this.props.handler;

        if (topPosition || leftPosition) {
            this.wrapperNode.style.left = `${leftPosition || 0}px`;
            this.wrapperNode.style.top = `${topPosition || 0}px`;
        } else if (isCenter) {
            this.wrapperNode.className = 'portal__center-container';
        } else if (isCustom) {
            this.wrapperNode.className = 'portal__custom-container';
        } else {
            const position = this.positionNode.getBoundingClientRect();
            const offsetTop = position.top + window.pageYOffset;
            const offsetLeft = position.left + window.pageXOffset;

            this.wrapperNode.style.left = `${offsetLeft}px`;
            this.wrapperNode.style.top = `${offsetTop}px`;
        }

        this.wrapperNode.style.position = 'fixed';
        this.wrapperNode.style.zIndex = this.props.zIndex || 1;
        this.wrapperNode.className = `${this.wrapperNode.className || ''} ${this.props.className || ''}`;
    }

    render() {
        const { children } = this.props;

        return (
            <div
                ref={positionNode => {
                    this.positionNode = positionNode;
                }}
            >
                {ReactDOM.createPortal(children, this.wrapperNode)}
            </div>
        );
    }
}
