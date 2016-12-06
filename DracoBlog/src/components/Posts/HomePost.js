/**
 * Created by steff on 6.12.2016 г..
 */
import React, {Component} from 'react';
import {Link} from 'react-router';

export default class HomePost extends Component {
    render() {

        let title = this.props.title;
        title = title.substring(0, 24) + '...';


        let body = this.props.body;
        body = body.substring(0, 24) + '...';
        return ( <div className="posts-link col-xs-12">
                <Link to={"/posts/" + this.props.id} className="col-xs-10">
                    <div className="col-xs-5 td">
                        <span className="post-text">{title}</span>
                    </div>
                    <div className="col-xs-5 td">
                        <span className="post-text">{body || 'No body'}</span>
                    </div>
                </Link>
                <Link to={"/posts/" + this.props.id}>
                    <button>Read More...</button>
                </Link>

            </div>
        )


    }
}