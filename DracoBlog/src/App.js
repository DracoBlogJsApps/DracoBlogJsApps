import React, {Component} from 'react';
import Header from './components/common/Header';
import Navbar from './components/common/Navbar';
import Infobox from  './components/common/Infobox';
import {Link} from 'react-router';
import observer from './models/observer';

class App extends Component {
    constructor(props) {
        super(props);1231231231
        this.state = { loggedIn: false, username: '' };123123123
        observer.onSessionUpdate = this.onSessionUpdate.bind(this);123123123
    }

    componentDidMount() {
        this.onSessionUpdate();
    }

    onSessionUpdate() {
        let name = sessionStorage.getItem("username");
        if (name) {
            this.setState({ loggedIn: true, username: sessionStorage.getItem("username") });
        } else {
            this.setState({ loggedIn: false, username: '' });
        }
    }

    render() {
        let navbar = {};
        if (!this.state.loggedIn) {
            navbar = (
                    <Navbar>
                        <ul>
                            <li className="custom-nav-link">
                                <Link to="/" activeClassName="active-link" onlyActiveOnIndex={true}>Home</Link>
                            </li>
                            <li className="custom-nav-link">
                                <Link to="/login" activeClassName="active-link">Login</Link>
                            </li>
                            <li className="custom-nav-link">
                                <Link to="/register" activeClassName="active-link">Register</Link>
                            </li>
                        </ul>
                    </Navbar>
                );
        } else {
            navbar = (
                <Navbar>
                    <ul>
                        <li className="custom-nav-link">
                            <Link to="/" className="link" activeClassName="active-link" onlyActiveOnIndex={true}>Home</Link>
                        </li>
                        <li className="custom-nav-link">
                            <Link to="/posts" className="link"  activeClassName="active-link">Posts</Link>
                        </li>
                        <li className="custom-nav-link">
                            <Link to="/create" className="link"  activeClassName="active-link">Create Post</Link>
                        </li>
                        <li className="custom-nav-link">
                            <Link to="/logout" className="link"  activeClassName="active-link">Logout</Link>
                        </li>
                    </ul>
                </Navbar>
            );
        }

        return (
            <div className="container">
                <Header loggedIn={this.state.loggedIn} user={this.state.username}>
                    {navbar}
                </Header>
                {this.props.children}
                <Infobox/>
            </div>
        )
    }
}

export default App;
