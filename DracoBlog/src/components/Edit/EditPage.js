import React, {Component} from 'react';
import EditForm from './EditForm';
import {loadPostDetails, loadTagsDetails, edit} from '../../models/post';
import $ from 'jquery';
import observer from '../../models/observer';

export default class EditPage extends Component {
    constructor(props) {
        super(props);
        this.state = {title: '', body: '', tags: '', tag_id: '', submitDisabled: true, h1: 'Edit Post', btn: 'Edit', hasImg: false};
        this.bindEventHandlers();
    }

    componentDidMount() {
        loadPostDetails(this.props.params.id, this.onLoadSuccess);
        loadTagsDetails(this.props.params.id, this.onTagsSuccess);
    }

    bindEventHandlers() {
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onSubmitResponse = this.onSubmitResponse.bind(this);
        this.onLoadSuccess = this.onLoadSuccess.bind(this);
        this.onTagsSuccess = this.onTagsSuccess.bind(this);
    }

    onLoadSuccess(response) {
        this.setState({
            title: response.title,
            body: response.body,
            submitDisabled: false
        });
    }

    onTagsSuccess(response) {
        this.setState({
            tags: response[0].body,
            tag_id: response[0]._id
        });
    }

    onChangeHandler(event) {
        event.preventDefault();
        let newState = {};
        newState[event.target.name] = event.target.value;
        this.setState(newState);
    }

    onSubmitHandler(event) {
        event.preventDefault();
        if (this.state.title.length < 1) {
            $('.title-error').text('The title field is required.');
            return;
        }
        if (this.state.body.length < 1) {
            $('.body-error').text('The body field is required.');
            return;
        }
        if (this.state.tags.length < 1) {
            $('.tags-error').text('The tags field is required.');
            return;
        }
        this.setState({submitDisabled: true});
        edit(this.props.params.id, this.state.title, this.state.body, this.state.tag_id, this.state.tags, this.onSubmitResponse);
    }

    onSubmitResponse(response) {
        if (response === true) {
            // Navigate away from login page
            observer.onSessionUpdate();
            this.context.router.push('/posts/' + this.props.params.id);
        }
            // Something went wrong, let the user try again
            this.setState({submitDisabled: false});

    }

    render() {
        return (
            <div className="wrapper page-h">
                <EditForm
                    h1={this.state.h1}
                    btn={this.state.btn}
                    title={this.state.title}
                    body={this.state.body}
                    tags={this.state.tags}
                    hasImg={this.state.hasImg}
                    submitDisabled={this.state.submitDisabled}
                    onChangeHandler={this.onChangeHandler}
                    onSubmitHandler={this.onSubmitHandler}
                />

            </div>
        );
    }
}

EditPage.contextTypes = {
    router: React.PropTypes.object
};