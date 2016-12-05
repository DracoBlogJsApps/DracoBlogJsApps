import React, {Component} from 'react';

export default class RegisterForm extends Component {
    render() {
        return (
            <form className="form-horizontal" onSubmit={this.props.onSubmitHandler}>
                <h1>Register</h1>
                <p>Create a new account.</p>
                <input
                    className="form-control"
                    type="text"
                    name="username"
                    value={this.props.username}
                    placeholder="Username"
                    disabled={this.props.submitDisabled}
                    onChange={this.props.onChangeHandler}
                />
                <div className="form-error register-username-error"></div>
                <input
                    className="form-control"
                    type="password"
                    name="password"
                    value={this.props.password}
                    placeholder="Password"
                    disabled={this.props.submitDisabled}
                    onChange={this.props.onChangeHandler}
                />
                <div className="form-error register-password-error"></div>
                <input
                    className="form-control"
                    type="password"
                    name="repeat"
                    value={this.props.repeat}
                    placeholder="Confirm Password"
                    disabled={this.props.submitDisabled}
                    onChange={this.props.onChangeHandler}
                />
                <div className="form-error register-repeat-error"></div>
                <input className="btn btn-default" type="submit" value="Register" disabled={this.props.submitDisabled}/>
            </form>
        );
    }
}