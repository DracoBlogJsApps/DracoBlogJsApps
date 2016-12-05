import React, {Component} from 'react';
import {loadPostDetails, loadTagsDetails, loadCommentsDetails} from '../../models/post';
// import {getAuthor} from '../../models/user';
import PostControls from './PostControls';
import './Details.css';

export default class Details extends Component {
    constructor(props) {
        super(props);
        this.state ={
            title: '',
            body: '',
            author:'',
            tags: [],
            comments: [],
            canEdit: false
            // ownTeam: sessionStorage.getItem('teamId') === this.props.params.id
        };

        this.bindEventHandlers();
    }

    bindEventHandlers() {
        this.onLoadSuccess = this.onLoadSuccess.bind(this);
        // this.onUsersSuccess = this.onUsersSuccess.bind(this);
        this.onTagsSuccess = this.onTagsSuccess.bind(this);
        this.onCommentsSuccess = this.onCommentsSuccess.bind(this);
        // this.onGetAuthor = this.onGetAuthor.bind(this);
        // this.onLeave = this.onLeave.bind(this);
        this.statusChange = this.statusChange.bind(this);
    }

    // onGetAuthor(event) {
    //     event.preventDefault();
    //     getAuthor(this.props.params.id, this.statusChange);
    // }

    // onLeave(event) {
    //     event.preventDefault();
    //     leaveTeam(this.statusChange);
    // }

    statusChange(response) {
        this.context.router.push('/');
    }

    componentDidMount() {
        loadPostDetails(this.props.params.id, this.onLoadSuccess);
        // loadUsersDetails(this.props.params.id, this.onUsersSuccess);
        loadTagsDetails(this.props.params.id, this.onTagsSuccess);
        loadCommentsDetails(this.props.params.id, this.onCommentsSuccess);
    }

    onLoadSuccess(response) {
        let newState = {
            title: response.title,
            body: response.body,
            author: response.author
        };
        if (response._acl.creator === sessionStorage.getItem('userId')) {
            newState.canEdit = true;
        }
        this.setState(newState);
    }

    // onUsersSuccess(response) {
    //     console.log(response);
    //     this.setState({
    //         members: response
    //     });
    // }

    onTagsSuccess(response) {
        this.setState({
            tags: response
        });
    }

    onCommentsSuccess(response) {
        this.setState({
            comments: response
        });
    }

    render() {
        let title = 'Post details';
        if (this.state.title !== '') {
            title = this.state.title;
        }

        let author = <p>No Author</p>;
        if (this.state.author.length > 0) {
            console.log(this.state.author);
            author = (
                <div>
                    {this.state.author}
                </div>
            );
        }

        let tags = <p>No Tags</p>;
      
        // let tag = this.state.tags[0].split(',');
        if (this.state.tags.length > 0) {
            tags = (
                <div>
                    {this.state.tags.map((e, i) => <span key={i} className="member">{e.body}</span>)}
                </div>
            );
            // tags = (
            // <div>
            //     {this.state.tags.map((e, i) => <span key={i} className="member">{e.body}</span>)}
            // </div>
            // );
        }

        let comments = <p>No Comments</p>;
        if (this.state.comments.length > 0) {
            comments = (
                <div>
                    {this.state.comments.map((e, i) => <span key={i} className="member">{e.body}</span>)}
                </div>
            );
        }

        return (
            <div className="details-box">
                <span className="titlebar">{title}</span>
                <span className="spanner">Author</span>
                {author}
                <span className="spanner">Body</span>
                <p>{this.state.body || 'No body'}</p>
                <span className="spanner">Tags</span>
                {tags}
                <span className="spanner">Comments</span>
                {comments}
                <span className="spanner">Post Actions</span>
                <PostControls
                    id={this.props.params.id}
                    //onJoin={this.onJoin}
                    //onLeave={this.onLeave}
                    canEdit={this.state.canEdit}
                    //ownTeam={this.state.ownTeam}
                />
            </div>
        )
    }
}

Details.contextTypes = {
    router: React.PropTypes.object
};