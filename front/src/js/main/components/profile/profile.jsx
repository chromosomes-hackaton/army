import React from 'react';
import PropTypes from 'prop-types';
import { Form, Icon, Input, Button, Checkbox, Avatar, Card, InputNumber, Select } from 'antd';
import ClassNames from 'classnames';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import CustomChart from 'main/components/custom-chart/custom-chart';
import Questions from 'main/components/questions/questions';
import Modal from '../../components/modal/modal';

import { Button as NewButton, Spinner } from '../../../shared/components/index';
import Chart from '../../components/statistics/statistics';
import { showModal, hideModal } from '../../actions/modal/modal';
import { getSpecialists, getDiseases } from '../../actions/diseases/diseases';

import CustomButton from '../custom-button/custom-button';
// import { ResponsiveContainer, BarChart, XAxis, YAxis, Bar, CustomizedLabel, Legend, Tooltip } from 'recharts';

import './profile.scss';
import { getUserInfo } from '_root/selectors/user.selectors';
import { fetchUser } from '_root/actions/user.actions';
import avatar from './avatar.png';
import { getRecommendedSpecialists } from '_root/selectors/specialist.selectors';

const docs = ['терапевт', 'офтальмолог', 'дерматовенеролог', 'стоматолог', 'психиатор', 'невролог', 'оториноларинголог'];
const { Option } = Select;

class Statistics extends React.PureComponent {
    state = {
        userTitles: [],
        hintNode: null,
        disease: null,

        isOpenedHeight: false,
        isOpenedWeight: false,
        isOpenedUsername: false
    };
    componentDidMount() {
        this.props.fetchUser();
    }

    componentDidMount() {
        this.props.getSpecialists();
    }

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

    renderCustomButton = (title, index) => (
        <CustomButton key={index} title={title} state={this.props.recommendedSpecialists
            .map(item => item.specialistName)
            .includes(title) ? 2 : 1} 
        />
    );
    onChangeSelect = Id => {
        this.props.getDiseases(Id);
         this.setState({ disease: null });
    };

    onChangeDisease = item => {
        this.setState({ disease: item });
    };

    render() {
        const { isOpenedHeight, isOpenedWeight, isOpenedUsername } = this.state;

        return (
            <>
                <div className="profile__container">
                    <div className="profile__parameters">
                        <div className="logo">
                            <img src={avatar} className="logo__img" />
                        </div>

                        <div className="profile__indicators-container">
                            <div className="profile__indicators-info-container">
                                <p className="profile__indicators-info">{!!this.props.user && this.props.user.username}</p>
                            </div>

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
                        {docs.map(this.renderCustomButton)}
                    </div>

                    <h1>Вы прошли специалиста и знаете свой диагноз?</h1>
                    <div className="specialist-select-container">
                        <h3>Выберите специалиста из предложенных:</h3>
                        <div className="specialist-select">
                            {/* <select name="Specialists" onChange={this.onChangeSelect} id="lang" value=""> */}
                            <Select defaultValue="" style={{ width: 290 }} onChange={this.onChangeSelect}>
                                {this.props.specialts.length &&
                                    this.props.specialts.map((item, index) => (
                                        <Option value={item._id} id={item._id} key={index}>
                                            {item.name}
                                        </Option>
                                    ))}
                            </Select>
                        </div>
                    </div>

                    {this.props.isPending ? (
                        <Spinner />
                    ) : this.props.diseases.length > 0 ? (
                        <div className="disease-select-container">
                            <div className="specialist-select-container">
                                <h3>Выберите диагноз: </h3>
                                <div className="specialist-select">
                                    <Select defaultValue="" style={{ width: 500 }} onChange={this.onChangeDisease}>
                                        {this.props.diseases.length &&
                                            this.props.diseases.map((item, index) => (
                                                <Option value={item} id={item._id} key={index}>
                                                    {item.name}
                                                </Option>
                                            ))}
                                    </Select>
                                </div>
                            </div>

                            {this.state.disease !== null ? (
                                <div>
                                    <h3>{this.state.disease.name}</h3>
                                    <h1 className="status">{this.state.disease.category}</h1>
                                </div>
                            ) : (
                                <h4>Не нашли своего диагноза? Не паникуйте, а обратите внимание на статистику и попробуйте пройти других специалистов</h4>
                            )}
                        </div>
                    ) : (
                        ''
                    )}
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

const mapStateToProps = (state) => ({
    modalProps: state.modal.modalProps,
    isActive: state.modal.isActive,
    diseases: state.diseases.diseases,
    specialts: state.diseases.specialists,
    isPending: state.diseases.isPending,
    user: getUserInfo(state),
    recommendedSpecialists: getRecommendedSpecialists(state),
});

const mapDispatchToProps = dispatch => ({
    onButtonClick: bindActionCreators(showModal, dispatch),
    onClose: bindActionCreators(hideModal, dispatch),
    fetchUser: bindActionCreators(fetchUser, dispatch),
    getSpecialists: bindActionCreators(getSpecialists, dispatch),
    getDiseases: bindActionCreators(getDiseases, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Statistics);
