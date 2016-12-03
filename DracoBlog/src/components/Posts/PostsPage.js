import React, {Component} from 'react';
import Post from './Post';
import {loadPosts} from '../../models/post';
import {Link} from 'react-router';
//import observer from '../../models/observer';

export default class PostsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
        this.bindEventHandlers();
    }

    bindEventHandlers() {
        this.onLoadSuccess = this.onLoadSuccess.bind(this);
    }

    onLoadSuccess(response) {
        // Display teams
        this.setState({posts: response})
    }

    componentDidMount() {
        // Request list of teams from the server
        loadPosts(this.onLoadSuccess);
    }

    render() {
        let createLink = null;
        // if (!sessionStorage.getItem('teamId')) {
            createLink = <Link to="/create" className="btn btn-default">Create Post</Link>
        // }

        return (
            <div>
                <h1>Posts</h1>
                {createLink}
                <div>
                    {this.state.posts.map((e, i) => {
                        return <Post key={i} title={e.title} id={e._id} body={e.body}/>
                    })}
                </div>
            </div>
        );
    }
}