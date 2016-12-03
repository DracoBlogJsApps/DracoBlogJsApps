import React, {Component} from 'react';
import {Link} from 'react-router';

export default class HomePage extends Component {
    render() {
        let heading = 'Recent Posts';
        let message = 'To Do: View Recent Posts / All Posts - like a guest - with link to the post(no option for edit/delete)';

        if (sessionStorage.getItem('username')) {
            heading = 'Your Posts';
            if (sessionStorage.getItem('postId')) {
                // message = <Link to={"/posts/" + sessionStorage.getItem('postId')}>See your posts</Link>
                message = 'To Do: View All Posts Of Current User with link to the post and option for edit/delete'
            } else {
                message = <p>You currently have no posts. Click <Link to="/create">here</Link> to create your first post.</p>;
            }
        }
        return (
            <div>
                <h1>{heading}</h1>
                {message}
            </div>
        );
    }
}