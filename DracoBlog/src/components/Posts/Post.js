import React, {Component} from 'react';
import {Link} from 'react-router';
import './Post.css';

export default class Post extends Component {
    render() {
        let title = this.props.title;
        if (title.length > 25) {
            title = title.substring(0, 24) + '...';
        }

        let body = this.props.body;
        if (body.length > 50) {
            body = body.substring(0, 49) + '...';
        }

        let edit = null;
        let remove = null;
        if (this.props.canEdit) {
            edit = <Link to={"/edit/" + this.props.id}>Edit</Link>;
            remove = <Link to={"/delete/" + this.props.id}>Delete</Link>;
        }

        return(
            <div className="posts-link col-xs-12">
                <Link to={"/posts/" + this.props.id} className="col-xs-10">
                    <div className="col-xs-5 td">
                        <span className="post-text">{title}</span>
                    </div>
                    <div className="col-xs-5 td">
                        <span className="post-text">{body || 'No body'}</span>
                    </div>
                </Link>
                <div className="col-xs-2 td">
                    <div className="col-xs-6 custom-posts-link">
                        {edit}
                    </div>
                    <div className="col-xs-6 custom-posts-link">
                        {remove}
                    </div>
                </div>
            </div>
        )
    }
}