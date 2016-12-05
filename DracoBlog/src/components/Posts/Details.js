import React, {Component} from 'react';
import {loadPostDetails, loadTagsDetails, loadCommentsDetails, create_comment} from '../../models/post';
import PostControls from './PostControls';
import CommentsForm from './CommentsForm';
import './Details.css';
import $ from 'jquery';

export default class Details extends Component {
    constructor(props) {
        super(props);
        this.state ={
            title: '',
            body: '',
            author:'',
            tags: [],
            comments: [],
            canEdit: false,
            comment: ''
        };

        this.bindEventHandlers();
    }

    bindEventHandlers() {
        this.onLoadSuccess = this.onLoadSuccess.bind(this);
        this.onTagsSuccess = this.onTagsSuccess.bind(this);
        this.onCommentsSuccess = this.onCommentsSuccess.bind(this);
        this.statusChange = this.statusChange.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onSubmitResponse = this.onSubmitResponse.bind(this);
    }

    onChangeHandler(event) {
        event.preventDefault();
        let newState = {};
        newState[event.target.name] = event.target.value;
        this.setState(newState);
    }

    onSubmitHandler(event) {
        event.preventDefault();
        if (this.state.comment.length < 1) {
            $('.comment-error').text('You can\'t submit an empty comment.');
            return;
        }
        // this.setState({submitDisabled: true});
        create_comment(this.props.params.id, this.state.comment, this.onSubmitResponse);
    }

    onSubmitResponse(response) {
        if (response === true) {
            this.componentDidMount();
            // Navigate away from login page
            // this.context.router.push('/posts');
        } else {
            alert('comment add - error');
            // Something went wrong, let the user try again
            // this.setState({submitDisabled: true});
        }
    }

    statusChange(response) {
        this.context.router.push('/');
    }

    componentDidMount() {
        loadPostDetails(this.props.params.id, this.onLoadSuccess);
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
            title = this.state.title + ' details';
        }

        let author = 'No Author';
        if (this.state.author.length > 0) {
            console.log(this.state.author);
            author = (
                <div>
                    {this.state.author}
                </div>
            );
        }

        let tags = <span className="noValues">(no tags)</span>;
        if (this.state.tags.length > 0) {
            console.log(this.state.tags.map((e, i) => e.body.split(', ').map((ee, ii) =>'#' + ee)));
            tags = (
                <li>
                    {this.state.tags
                        .map((e, i) =><span key={i}>{e.body.split(', ').map((ee,ii) => <span className="tagLi" key={ii} ># {ee}</span> )}</span>)}
                </li>
            );
        }

        let comments = <span><h5><i className="boldtext">no comments</i></h5></span>;
        if (this.state.comments.length > 0) {
            comments = (
                <li>
                    {this.state.comments.map((e, i) =>
                        <h5 className="text" key={i} >- {e.body}
                            <div className="comment-author">
                                ~ by {(e.author !== undefined) ? e.author : 'Anonymous User'}
                            </div>
                        </h5>
                    )}
                </li>
            );
        }

        return (
            <div className="page col-xs-12">
                <div className="col-xs-8 marginTop">
                    <div className="title col-xs-12">
                        <h4 className="deepshadow">{title}</h4>
                        <h6><i className="boldtext">
                            <div className="inline">~ Posted by &nbsp;</div>
                            <div className="inline">{author}</div></i>
                        </h6>
                    </div>
                    <div className="content col-xs-12">
                        {this.state.body || 'No body'}
                    </div>
                    <div className="list3 tags col-xs-12">
                        <ul>
                            <li>Tags: </li>
                            {tags}
                        </ul>
                    </div>
                    <div className="list2 comments col-xs-12">
                        <ul className="commentsUL">
                            <h2>Comments</h2>
                            <hr/>
                            <div>
                                <div className="commentPadding">
                                {comments}
                                </div>
                            </div>
                        </ul>
                    </div>
                    <div className="wrapper comments-form col-xs-12">
                        <CommentsForm
                        id={this.props.params.id}
                        comment={this.props.comment}
                        onChangeHandler={this.onChangeHandler}
                        onSubmitHandler={this.onSubmitHandler}
                        />
                    </div>
                    <div className="col-xs-12 actions">
                        <PostControls
                        id={this.props.params.id}
                        canEdit={this.state.canEdit}
                    />
                    </div>
                </div>
                <div className="col-xs-4 marginTop">
                    Recent Posts
                </div>
            </div>
        )
    }
}

Details.contextTypes = {
    router: React.PropTypes.object
};