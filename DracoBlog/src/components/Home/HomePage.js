import React, {Component} from 'react';
import {Link} from 'react-router';

export default class HomePage extends Component {
    render() {
        let heading = 'Recent Posts';
        let message = <h5>To Do: View Recent Posts / All Posts - like a guest - with link to the post(no option for edit/delete)</h5>;

        if (sessionStorage.getItem('username')) {
            heading = 'Your Posts';
            if (sessionStorage.getItem('postId')) {
                // message = <Link to={"/posts/" + sessionStorage.getItem('postId')}>See your posts</Link>
                message = <h5>To Do: View All Posts Of Current User with link to the post and option for edit/delete</h5>;
            } else {
                message = <h5>You currently have no posts. Click <Link to="/create">here</Link> to create your first post.</h5>;
            }
        }
        return (
            <div className="page-h">
                <h1>{heading}</h1>
                {message}
            </div>
        );
    }
}