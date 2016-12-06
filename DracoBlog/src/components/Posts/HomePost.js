import React, {Component} from 'react';
import {Link} from 'react-router';

export default class HomePost extends Component {
    render() {

        let title = this.props.title;
        if (title.length > 25) {
            title = title.substring(0, 24) + '...';
        }

        let body = this.props.body;
        if (body.length > 70) {
            body = body.substring(0, 69) + '...';
        }

        return (
            <div className="col-xs-6 post">
                <div className="post-cont col-xs-12">
                    <Link to={"/posts/" + this.props.id} className="col-xs-12">
                        <div className="col-xs-12">
                            <span className="post-title">{title}</span>
                        </div>
                        <div className="col-xs-12">
                            <span className="post-body">{body || 'No body'}</span>
                        </div>
                    </Link>
                    <Link to={"/posts/" + this.props.id} className="col-xs-12">
                        <button className="btn btn-default read-more">Read More...</button>
                    </Link>
                </div>
            </div>
        );
    }
}