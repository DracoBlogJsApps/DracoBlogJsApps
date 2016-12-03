import React, {Component} from 'react';
import {Link} from 'react-router';
import './Post.css';

export default class Post extends Component {
    render() {
        return(
            <Link to={"/posts/" + this.props.id} className="team-box">
                <span className="spanner">Post name</span>
                <span className="title">{this.props.title}</span>
                <span className="spanner">Body</span>
                <p>{this.props.body || 'No body'}</p>
            </Link>
        )
    }
}