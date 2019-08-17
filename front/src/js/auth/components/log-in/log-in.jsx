import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Button, Input, Spinner } from 'shared/components';

import './Log-in.scss';

export default class LogIn extends React.PureComponent {
    state = {
        login: '',
        password: '',
        isValidForm: true,
        isPending: false
    }

    onChange = ({ target }, id) => {
        this.setState({ [id]: target.value });
    }

    noReload = event => {
        event.preventDefault();
    }

    changeValidForm = isValidForm => {
        this.setState({
            isValidForm
        });
    }

    validateForm = () => {
        const { login, password } = this.state;

        if (login && password) {
            return true;
        }
        return false;
    }

    onClick = () => {
        this.setState({
            isPending: true
        });
    }

    render() {
        const { login, password, isValidForm, isPending } = this.state;

        return (
            <div className="log-in__container">
                {/* <div className="auth-bar">
                    <span className="auth-bar__item auth-bar__item--selected">Вход в систему</span>
                    <span className="auth-bar__divider">|</span>
                    <span className="auth-bar__item">Регистрация </span>
                </div> */}
                <form onSubmit={this.noReload} className="log-in__form">
                    <p className="title">Вход в систему</p>
                    <Input
                        value={login}
                        label="Введите логин:"
                        required
                        onChange={e => this.onChange(e, 'login')}
                        classNameContainer="log-in__input"
                    />
                    <Input
                        type="password"
                        name="password"
                        label="Введите пароль:"
                        value={password}
                        required
                        onChange={e => this.onChange(e, 'password')}
                        classNameContainer="log-in__input"
                    />
                    <div className="log-in__bottom">
                        {!isPending ? (
                            <>
                                <NavLink to="/auth/registration">Зарегистрироваться</NavLink>
                                <div className="log-in__button">
                                    <Button text="Войти" onClick={this.onClick} disabled={!this.validateForm()} />
                                </div>
                            </>
                        ) : (
                            <Spinner />
                        )}
                    </div>
                    {!isValidForm && <div className="log-in__error">Неверный логин или пароль</div>}
                </form>
            </div>
        );
    }
}
