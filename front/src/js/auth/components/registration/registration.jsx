import React from 'react';
import PropTypes from 'prop-types';

import { Button, Input, Spinner } from 'shared/components';

import './registration.scss';

export default class Registration extends React.Component {
    static propTypes = {};

    static defaultProps = {};

    constructor() {
        super();
        this.state = {
            login: '',
            password: '',
            repeatPassword: '',
            errorMessage: '',
            isPending: false
        };
    }

    onChange = ({ target }, id) => {
        this.setState({ [id]: target.value });
    };

    noReload = event => {
        event.preventDefault();
    };

    validateForm = () => {
        const { login, password, repeatPassword } = this.state;

        if (login && password && repeatPassword) {
            if (password !== repeatPassword) {
                return false;
            }
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
        const { login, password, repeatPassword, errorMessage, isPending } = this.state;

        return (
            <div className="registation__container">
                <form onSubmit={this.noReload} className="registation__form">
                    <div className="registation__title">
                        <h1>Регистрация в систему</h1>
                    </div>
                    <Input
                        value={login}
                        required
                        onChange={e => this.onChange(e, 'login')}
                        label="Введите логин:"
                        classNameContainer="registation__input"
                    />
                    <Input
                        type="password"
                        name="password"
                        label="Введите пароль:"
                        value={password}
                        required
                        onChange={e => this.onChange(e, 'password')}
                        classNameContainer="registation__input"
                    />
                    <Input
                        type="password"
                        name="password"
                        value={repeatPassword}
                        label="Повторите пароль:"
                        required
                        onChange={e => this.onChange(e, 'repeatPassword')}
                        classNameContainer="registation__input"
                    />
                    {!isPending ? (
                        <div className="registation__bottom">
                            <Button
                                disabled={!this.validateForm()}
                                text="Зарегистрироваться"
                                classNameContainer="registation__button"
                                onClick={this.onClick}
                            />
                        </div>
                    ) : (
                        <Spinner />
                    )}
                    {errorMessage && <div className="registation__error">{errorMessage}</div>}
                </form>
            </div>
        );
    }
}
