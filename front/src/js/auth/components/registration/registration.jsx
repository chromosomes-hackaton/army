import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { compose } from 'redux';
import { withRouter } from "react-router";

import { Button, Input, Spinner } from 'shared/components';
import { signUp } from '../../../_root/actions/user.actions';
import { getIsChecking } from '../../../_root/selectors/user.selectors';

import './registration.scss';

class Registration extends React.Component {
    state = {
        username: '',
        password: '',
        repeatPassword: '',
        errorMessage: '',
        isPending: false
    };

    onChange = ({ target }, id) => {
        this.setState({ [id]: target.value });
    };

    noReload = event => {
        event.preventDefault();
    };

    validateForm = () => {
        const { username, password, repeatPassword } = this.state;

        if (username && password && repeatPassword) {
            return true;
        }
        return false;
    };

    onClick = async () => {
        const { username, password, repeatPassword } = this.state;
        if (password !== repeatPassword) {
            this.setState({ error: 'Passwords don\'t match!' });
            return;
        }
        this.setState({ error: '' });
        const error = await this.props.signUp({ username, password });
        if (error) {
            this.setState({ error });
        } else {
            this.props.history.push('/profile');
        }
    }

    render() {
        const { username, password, repeatPassword, error } = this.state;

        return (
            <div className="registation__container">
                <form onSubmit={this.noReload} className="registation__form">
                    <div className="registation__title">
                        <p className="title">Вход в систему</p>
                    </div>
                    <Input
                        name="username"
                        value={username}
                        required
                        onChange={e => this.onChange(e, 'username')}
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
                    {error && <div className="log-in__error">{error}</div>}
                    {
                        !this.props.isChecking
                            ? (
                                <div className="registration__bottom">
                                    <NavLink to="/auth/log-in">Авторизироваться</NavLink>
                                    <div className="registration__button">
                                        <Button
                                            disabled={!this.validateForm()}
                                            text="Зарегистрироваться"
                                            onClick={this.onClick}
                                        
                                        >
                                            Зарегистрироваться
                                        </Button>
                                    </div>
                                </div>
                            )
                            : <div className="spinner-container">
                                <Spinner />
                            </div>
                    }
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isChecking: getIsChecking(state),
});

const mapDispatchToProps = {
    signUp,
};

const withRedux = connect(mapStateToProps, mapDispatchToProps);

export default compose(withRedux, withRouter)(Registration);
