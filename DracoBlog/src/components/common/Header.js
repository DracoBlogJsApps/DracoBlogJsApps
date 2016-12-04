import React, {Component} from 'react';
import Greeting from '../common/Greeting';

export default class Header extends Component {
    render() {
        return (
            <nav className="col-xs-12 navbar navbar-inverse custom-nav">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand">Draco Blog</a>
                    </div>

                    <ul className="nav navbar-nav">
                        <li>{this.props.children}</li>
                    </ul>
                    <Greeting user={this.props.user}/>
                </div>
            </nav>
        );
    }
}