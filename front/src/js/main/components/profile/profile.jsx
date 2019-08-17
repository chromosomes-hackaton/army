import React from "react";
import PropTypes from "prop-types";
import {
    Form,
    Icon,
    Input,
    Button,
    Checkbox,
    Avatar,
    Card,
    InputNumber
} from "antd";
import ClassNames from "classnames";

import CustomChart from "main/components/custom-chart/custom-chart";
import CustomButton from "../custom-button/custom-button";
// import { ResponsiveContainer, BarChart, XAxis, YAxis, Bar, CustomizedLabel, Legend, Tooltip } from 'recharts';

import "./profile.scss";

export default class Statistics extends React.PureComponent {
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

    render() {
        const { isOpenedHeight, isOpenedWeight, isOpenedUsername } = this.state;

        return (
            <div className="profile__container">
                <div className="profile__parameters">
                    <Avatar
                        shape="square"
                        size={120}
                        style={{
                            width: "200px",
                            height: "200px",
                            marginRight: "20px"
                        }}
                        icon="user"
                        className="profile__avatar"
                    />

                    <div className="profile__indicators-container">
                        {isOpenedUsername ? (
                            <div
                                className={ClassNames(
                                    "profile__indicators-info-container",
                                    "profile__indicators-info-container--active"
                                )}
                            >
                                <Input
                                    className="profile__input-info"
                                    prefix={
                                        <Icon
                                            type="user"
                                            style={{ color: "rgba(0,0,0,.25)" }}
                                        />
                                    }
                                    placeholder="Username"
                                />
                                <Icon
                                    onClick={this.openUsername}
                                    type="check"
                                    style={{
                                        color: "#89BF5A",
                                        marginLeft: "3px"
                                    }}
                                />
                            </div>
                        ) : (
                            <div className="profile__indicators-info-container">
                                <p className="profile__indicators-info">
                                    Andreiiii
                                </p>
                                <Icon
                                    onClick={this.openUsername}
                                    type="edit"
                                    style={{ color: "rgba(0,0,0,.25)" }}
                                />
                            </div>
                        )}

                        <div className="profile__indicators-container--main">
                            {isOpenedHeight ? (
                                <div
                                    className={ClassNames(
                                        "profile__indicators-info-container",
                                        "profile__indicators-info-container--active"
                                    )}
                                >
                                    <InputNumber
                                        placeholder="Рост"
                                        style={{ width: "100%" }}
                                        prefix={
                                            <Icon
                                                type="smile-o"
                                                style={{
                                                    color: "rgba(0,0,0,.25)"
                                                }}
                                            />
                                        }
                                    />
                                    <Icon
                                        onClick={this.openHeight}
                                        type="check"
                                        style={{
                                            color: "#89BF5A",
                                            marginLeft: "3px"
                                        }}
                                    />
                                </div>
                            ) : (
                                <div className="profile__indicators-info-container">
                                    <p className="profile__indicators-info">
                                        12 см
                                    </p>
                                    <Icon
                                        onClick={this.openHeight}
                                        type="edit"
                                        style={{ color: "rgba(0,0,0,.25)" }}
                                    />
                                </div>
                            )}
                            {isOpenedWeight ? (
                                <div
                                    className={ClassNames(
                                        "profile__indicators-info-container",
                                        "profile__indicators-info-container--active"
                                    )}
                                >
                                    <InputNumber
                                        style={{ width: "100%" }}
                                        placeholder="Вес"
                                        prefix={
                                            <Icon
                                                type="smile-o"
                                                style={{
                                                    color: "rgba(0,0,0,.25)"
                                                }}
                                            />
                                        }
                                    />

                                    <Icon
                                        onClick={this.openWeight}
                                        type="check"
                                        style={{
                                            color: "#89BF5A",
                                            marginLeft: "3px"
                                        }}
                                    />
                                </div>
                            ) : (
                                <div className="profile__indicators-info-container">
                                    <p className="profile__indicators-info">
                                        12 кг
                                    </p>
                                    <Icon
                                        onClick={this.openWeight}
                                        type="edit"
                                        style={{ color: "rgba(0,0,0,.25)" }}
                                    />
                                </div>
                            )}
                            <InputNumber
                                disabled
                                value={10}
                                style={{ width: "100%" }}
                                placeholder="Индекс массы тела"
                                prefix={
                                    <Icon
                                        type="smile-o"
                                        style={{ color: "rgba(0,0,0,.25)" }}
                                    />
                                }
                            />
                        </div>
                    </div>
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
        );
    }
}
