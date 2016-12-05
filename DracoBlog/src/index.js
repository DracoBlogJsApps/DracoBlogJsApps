import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {IndexRoute, Router, Route, browserHistory} from 'react-router';
import HomePage from './components/Home/HomePage';
import Posts from './components/Posts/PostsPage';
import About from './components/About/AboutPage';
import Login from './components/Login/LoginPage';
import Register from './components/Register/RegisterPage';
import Logout from './components/Logout/LogoutPage';
import Details from './components/Posts/Details';
import Edit from './components/Edit/EditPage';
import Create from './components/Create/CreatePage';
import Delete from './components/Delete/DeletePage';
import $ from 'jquery';


$(document).on('click', function() {
    if ($('.form-error').text().length > 0) {
        $('.form-error').text('');}
});

$(document).ready(function () {
    console.log('im here bitches');
    $('ul.recent-ul').on('click', function() {
        console.log('im here bitches');
        location.reload(true);
    });
});

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={HomePage}/>
            <Route path="posts">
                <IndexRoute component={Posts}/>
                <Route path=":id" component={Details}/>
            </Route>
            <Route path="about" component={About}/>
            <Route path="login" component={Login}/>
            <Route path="register" component={Register}/>
            <Route path="logout" component={Logout}/>
            <Route path="edit/:id" component={Edit}/>
            <Route path="create" component={Create}/>
            <Route path="delete/:id" component={Delete}/>
        </Route>
    </Router>,
    document.getElementById('root')
);
