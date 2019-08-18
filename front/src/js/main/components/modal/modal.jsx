import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import { hideModal } from '../../actions/modal/modal';

import './modal.scss';

class Modal extends PureComponent {
    static propTypes = {
        children: PropTypes.element.isRequired
    };

    componentDidMount() {
        document.body.style.overflow = 'hidden';
    }

    componentWillUnmount() {
        document.body.style.overflow = 'auto';
    }

    render() {
        const { children } = this.props;

        return ReactDOM.createPortal(
            <div className="modal-container">
                <div className="modal flex">
                    <div className="modal-header">
                        <button type="button" className="close button" onClick={this.props.onClose}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="question">{children}</div>
                </div>
            </div>,
            document.getElementById('modal-portal')
        );
    }
}

const mapStateToProps = ({}) => ({});

const mapDispatchToProps = dispatch => ({
    onClose: bindActionCreators(hideModal, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Modal);
