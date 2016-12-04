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
            tags = (
                <li className="tagLi">
                    {this.state.tags.map((e, i) => <span className="tagLI" key={i} ># {e.body}</span>)}
                </li>
            );
        }

        let comments = <span><h5><i className="boldtext">no comments</i></h5></span>;
        if (this.state.comments.length > 0) {
            comments = (
                <li>
                    {this.state.comments.map((e, i) => <h5 className="text" key={i} >{e.body}</h5>)}
                </li>
            );
        }

        return (
            <div className="page col-xs-12">
                <div className="col-xs-8 marginTop">
                    <div className="title col-xs-12">
                        <h4 className="deepshadow">{title}</h4>
                        <h6><i className="boldtext">
                            <div className="inline">~ Posted By &nbsp;</div>
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
                    <div className="col-xs-12 actions">
                        <PostControls
                        id={this.props.params.id}
                        //onJoin={this.onJoin}
                        //onLeave={this.onLeave}
                        canEdit={this.state.canEdit}
                        //ownTeam={this.state.ownTeam}
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