import React from 'react';
import PropTypes from 'prop-types';
import { Form, Icon, Input, Button, Checkbox, Avatar, Card, InputNumber } from 'antd';
import ClassNames from 'classnames';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import CustomChart from 'main/components/custom-chart/custom-chart';
import Questions from 'main/components/questions/questions';
import Modal from '../../components/modal/modal';

import { Button as NewButton } from '../../../shared/components/index';
import Chart from '../../components/statistics/statistics';
import { showModal, hideModal } from '../../actions/modal/modal';

import CustomButton from '../custom-button/custom-button';
// import { ResponsiveContainer, BarChart, XAxis, YAxis, Bar, CustomizedLabel, Legend, Tooltip } from 'recharts';

import './profile.scss';

class Statistics extends React.PureComponent {
    static propTypes = {};

    static defaultProps = {};

    state = {
        userTitles: [],
        hintNode: null,

        isOpenedHeight: false,
        isOpenedWeight: false,
        isOpenedUsername: false
    };

    openWeight = () =>
        this.setState(({ isOpenedWeight }) => ({
            isOpenedWeight: !isOpenedWeight
        }));

    openHeight = () =>
        this.setState(({ isOpenedHeight }) => ({
            isOpenedHeight: !isOpenedHeight
        }));

    openUsername = () =>
        this.setState(({ isOpenedUsername }) => ({
            isOpenedUsername: !isOpenedUsername
        }));

    openStat = () => {
        this.props.onButtonClick(2);
    };

      openQuest = () => {
        this.props.onButtonClick(1);
    };

    render() {
        const { isOpenedHeight, isOpenedWeight, isOpenedUsername } = this.state;

        return (
            <>
                <div className="profile__container">
                    <div className="profile__parameters">
                        <Avatar
                            shape="square"
                            size={120}
                            style={{
                                width: '180px',
                                height: '180px',
                                marginRight: '20px'
                            }}
                            icon="user"
                            className="profile__avatar"
                        />

                        <div className="profile__indicators-container">
                            {isOpenedUsername ? (
                                <div
                                    className={ClassNames(
                                        'profile__indicators-info-container',
                                        'profile__indicators-info-container--active'
                                    )}
                                >
                                    <Input
                                        className="profile__input-info"
                                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="Username"
                                    />
                                    <Icon
                                        onClick={this.openUsername}
                                        type="check"
                                        style={{
                                            color: '#89BF5A',
                                            marginLeft: '3px'
                                        }}
                                    />
                                </div>
                            ) : (
                                <div className="profile__indicators-info-container">
                                    <p className="profile__indicators-info">Andreiiii</p>
                                    <Icon
                                        onClick={this.openUsername}
                                        type="edit"
                                        style={{ color: 'rgba(0,0,0,.25)' }}
                                    />
                                </div>
                            )}

                            <div className="profile__indicators-container--main">
                                {isOpenedHeight ? (
                                    <div
                                        className={ClassNames(
                                            'profile__indicators-info-container',
                                            'profile__indicators-info-container--active'
                                        )}
                                    >
                                        <InputNumber
                                            placeholder="Рост"
                                            style={{ width: '100%' }}
                                            prefix={(
                                                <Icon
                                                    type="smile-o"
                                                    style={{
                                                        color: 'rgba(0,0,0,.25)'
                                                    }}
                                                />
                                            )}
                                        />
                                        <Icon
                                            onClick={this.openHeight}
                                            type="check"
                                            style={{
                                                color: '#89BF5A',
                                                marginLeft: '3px'
                                            }}
                                        />
                                    </div>
                                ) : (
                                    <div className="profile__indicators-info-container">
                                        <p className="profile__indicators-info">12 см</p>
                                        <Icon
                                            onClick={this.openHeight}
                                            type="edit"
                                            style={{ color: 'rgba(0,0,0,.25)' }}
                                        />
                                    </div>
                                )}
                                {isOpenedWeight ? (
                                    <div
                                        className={ClassNames(
                                            'profile__indicators-info-container',
                                            'profile__indicators-info-container--active'
                                        )}
                                    >
                                        <InputNumber
                                            style={{ width: '100%' }}
                                            placeholder="Вес"
                                            prefix={(
                                                <Icon
                                                    type="smile-o"
                                                    style={{
                                                        color: 'rgba(0,0,0,.25)'
                                                    }}
                                                />
                                            )}
                                        />

                                        <Icon
                                            onClick={this.openWeight}
                                            type="check"
                                            style={{
                                                color: '#89BF5A',
                                                marginLeft: '3px'
                                            }}
                                        />
                                    </div>
                                ) : (
                                    <div className="profile__indicators-info-container">
                                        <p className="profile__indicators-info">12 кг</p>
                                        <Icon
                                            onClick={this.openWeight}
                                            type="edit"
                                            style={{ color: 'rgba(0,0,0,.25)' }}
                                        />
                                    </div>
                                )}
                                <InputNumber
                                    disabled
                                    value={10}
                                    style={{ width: '100%' }}
                                    placeholder="Индекс массы тела"
                                    prefix={<Icon type="smile-o" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="btn">
                        <NewButton text="Пройти опрос" onClick={this.openQuest} />
                    </div>
                    <div className="btn">
                        <NewButton text="Просмотреть статистику" onClick={this.openStat} />
                    </div>

                    <div className="profile__description">
                        <CustomButton title="Терапевт" state={1} />
                        <CustomButton title="Офтальмолог" state={2} />
                        <CustomButton title="Дерматовенеролог" state={3} />
                        <CustomButton title="Стоматолог" state={1} />
                        <CustomButton title="Психиатр" state={2} />
                        <CustomButton title="Невролог" state={3} />
                        <CustomButton title="Оториноларинголог" state={1} />
                    </div>
                </div>
                {this.props.isActive && this.props.modalProps === 1 && (
                    <React.Fragment>
                        <Modal onClose={this.props.onClose}>
                            <div className="questions">
                            <Questions />
                            </div>
                        </Modal>
                        <div className="modal-fade" />
                    </React.Fragment>
                )}
                {this.props.isActive && this.props.modalProps === 2 && (
                    <React.Fragment>
                        <Modal onClose={this.props.onClose}>
                            <Chart />
                        </Modal>
                        <div className="modal-fade" />
                    </React.Fragment>
                )}
            </>
        );
    }
}

const mapStateToProps = ({ modal }) => ({
    modalProps: modal.modalProps,
    isActive: modal.isActive
});

const mapDispatchToProps = dispatch => ({
    onButtonClick: bindActionCreators(showModal, dispatch),
    onClose: bindActionCreators(hideModal, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Statistics);
