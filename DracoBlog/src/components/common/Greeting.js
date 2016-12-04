import React, {Component} from 'react';

export default class Greeting extends Component {
    render() {
        if (this.props.user === '' || this.props.user === undefined) {
            return null;
        } else {
            return (
                <span className="nav-greeting">Welcome, {this.props.user}</span>
            );
        }
    }
}