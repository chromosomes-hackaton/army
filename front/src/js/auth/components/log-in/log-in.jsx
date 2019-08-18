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
        error: '',
    }

    onChange = ({ target }, id) => {
        this.setState({ [id]: target.value });
    }

    noReload = event => {
        event.preventDefault();
    }

    validateForm = () => {
        const { username, password } = this.state;

        if (username && password) {
            return true;
        }
        return false;
    }

    onClick = async () => {
        this.setState({ error: '' });
        const { username, password } = this.state;
        const error = await this.props.signIn({ username, password });
        if (error) {
            this.setState({ error });
        } else {
            this.props.history.push('/profile');
        }
    }

    render() {
        const { username, password, error } = this.state;

        return (
            <div className="log-in__container">
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
                    {error && <div className="log-in__error">{error}</div>}
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
