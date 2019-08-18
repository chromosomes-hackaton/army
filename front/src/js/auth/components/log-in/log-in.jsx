import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { compose } from 'redux';
import { withRouter } from "react-router";

import { Button, Input, Spinner } from 'shared/components';
import { signIn } from '../../../_root/actions/user.actions';
import { getIsChecking } from '../../../_root/selectors/user.selectors';

import './Log-in.scss';

class LogIn extends React.PureComponent {
    state = {
        username: '',
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
        const { username, password } = this.state;

        if (username && password) {
            return true;
        }
        return false;
    }

    onClick = async () => {
        const { username, password } = this.state;
        await this.props.signIn({ username, password });
        this.props.history.push('/profile');
    }

    render() {
        const { username, password, isValidForm } = this.state;

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
                        value={username}
                        label="Введите логин:"
                        required
                        onChange={e => this.onChange(e, 'username')}
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
                        {!this.props.isChecking ? (
                            <>
                                <NavLink to="/auth/registration">Зарегистрироваться</NavLink>
                                <div className="log-in__button">
                                    <Button text="Войти" onClick={this.onClick} disabled={!this.validateForm()} />
                                </div>
                            </>
                        ) : (
                            <div className="spinner-container">
                                <Spinner />
                            </div>
                        )}
                    </div>
                    {!isValidForm && <div className="log-in__error">Неверный логин или пароль</div>}
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isChecking: getIsChecking(state),
});

const mapDispatchToProps = {
    signIn,
};

const withRedux = connect(mapStateToProps, mapDispatchToProps);

export default compose(withRedux, withRouter)(LogIn);
