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
            edit = <Link to={"/edit/" + this.props.id} className="">Edit Post</Link>;
            remove = <Link to={"/delete/" + this.props.id} className="">Delete Post</Link>;
        }

        return(
            <Link to={"/posts/" + this.props.id} className="col-xs-12 posts-link">
                <div className="col-xs-4 td">
                    <span className="post-text">{title}</span>
                </div>
                <div className="col-xs-6 td">
                    <span className="post-text">{body || 'No body'}</span>
                </div>
                <div className="col-xs-2 td">
                    <div className="col-xs-6 custom-nav-link">
                        {edit}
                    </div>
                    <div className="col-xs-6 custom-nav-link">
                        {remove}
                    </div>
                </div>
            </Link>
        )
    }
}