import React, {Component} from 'react';

export default class LoginForm extends Component {
    render() {
        return (
            <form className="form-horizontal" onSubmit={this.props.onSubmitHandler}>
                <h1>Login</h1>
                <p>Use an account to log in.</p>
                <input
                    className="form-control"
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={this.props.username}
                    disabled={this.props.submitDisabled}
                    onChange={this.props.onChangeHandler}
                />
                <div className="error"></div>
                <input
                    className="form-control"
                    type="password"
                    name="password"
                    value={this.props.password}
                    placeholder="Password"
                    disabled={this.props.submitDisabled}
                    onChange={this.props.onChangeHandler}
                />
                <div className="error"></div>
                <input className="btn btn-default" type="submit" value="Login" disabled={this.props.submitDisabled}/>
            </form>
        );
    }
}