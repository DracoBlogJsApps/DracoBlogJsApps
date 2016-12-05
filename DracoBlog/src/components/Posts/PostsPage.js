import React, {Component} from 'react';
import Post from './Post';
import {loadPosts} from '../../models/post';
import {Link} from 'react-router';
//import observer from '../../models/observer';

export default class PostsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            canEdit: false
        };
        this.bindEventHandlers();
    }

    bindEventHandlers() {
        this.onLoadSuccess = this.onLoadSuccess.bind(this);
       
    }

    onLoadSuccess(response) {
        // Display teams
        this.setState({posts: response});
    }


    componentDidMount() {
        // Request list of teams from the server
        loadPosts(this.onLoadSuccess);
       
    }

    render() {
        let createLink = <Link to="/create" className="btn btn-default">Create Post</Link>

        return (
            <div className="page">
                <div className="col-xs-10 page-name"><h1>Posts</h1></div>
                <div className="create-btn">{createLink}</div>
                <div className="posts-container col-xs-12">
                    <div className="thead col-xs-4">
                        Title
                    </div>
                    <div className="thead col-xs-6">
                        Body
                    </div>
                    <div className="thead col-xs-2">
                        Actions
                    </div>
                    {this.state.posts.map((e, i) => {
                        return <Post key={i}
                                     title={e.title}
                                     id={e._id}
                                     body={e.body}
                                     canEdit={(e._acl.creator === sessionStorage.getItem('userId'))
                                         ? this.state.canEdit = true : this.state.canEdit}/>
                    })}
                </div>
            </div>
        );
    }
}