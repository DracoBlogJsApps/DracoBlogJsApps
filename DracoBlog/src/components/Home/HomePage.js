import React, {Component} from 'react';
import {Link} from 'react-router';
import {loadPostsHome} from '../../models/post';
import HomePost from '../Posts/HomePost';


export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            loggedIn:false

        };

        this.bindEventHandlers();
    }

    bindEventHandlers() {
        this.onLoadSuccess = this.onLoadSuccess.bind(this);

    }

    onLoadSuccess(response) {
        let name = sessionStorage.getItem("username");
        if (name) {
            this.setState({loggedIn: true,posts:response});
        } else {
            this.setState({loggedIn: false});
        }

    }


    componentDidMount() {

        if(sessionStorage.getItem("username")==null || sessionStorage.getItem("username")=="") {

        }else{
            loadPostsHome(this.onLoadSuccess);
        }
    }

    render() {
        let content = {};
        if (!this.state.loggedIn) {
            content = (<div>Welcome To Our Blog</div>

            );
        } else {
            content = (<div>
                    <div className="col-xs-10 page-name"><h1>Recent Posts</h1></div>
                    <div className="posts-container col-xs-12">

                        {this.state.posts.map((e, i) => {
                            return <HomePost key={i}
                                             title={e.title}
                                             id={e._id}
                                             body={e.body}
                                             loggedIn={this.state.loggedIn}
                            />
                        })}
                    </div>
                </div>

            );

        }

        return (
            <div className="page">
                {content}
            </div>
        );
    }
}