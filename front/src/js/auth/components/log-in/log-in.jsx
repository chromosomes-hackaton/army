import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Button, Input, Spinner } from 'shared/components';

import './Log-in.scss';

export default class LogIn extends React.PureComponent {
    static propTypes = {};

    static defaultProps = {};

    constructor() {
        super();
        this.state = {
            login: '',
            password: '',
            isValidForm: true,
            isPending: false
        };
    }

    onChange = ({ target }, id) => {
        this.setState({ [id]: target.value });
    };

    noReload = event => {
        event.preventDefault();
    };

    changeValidForm = isValidForm => {
        this.setState({
            isValidForm
        });
    };

    validateForm = () => {
        const { login, password } = this.state;

        if (login && password) {
            return true;
        }
        return false;
    };

    onClick = () => {
        this.setState({
            isPending: true
        });
    };

    render() {
        const { login, password, isValidForm, isPending } = this.state;

        return (
            <div className="log-in__container">
                <form onSubmit={this.noReload} className="log-in__form">
                    <h1>Вход в систему</h1>
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
