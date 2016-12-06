import React, {Component} from 'react';
import CreateForm from '../Edit/EditForm';
import {create} from '../../models/post';
import $ from 'jquery';

export default class CreatePage extends Component {
    constructor(props) {
        super(props);
        this.state = {title: '', body: '', tags: '', submitDisabled: false, h1: 'Create Post', btn: 'Create', hasImg: 'true'};
        this.bindEventHandlers();
    }

    bindEventHandlers() {
        // Make sure event handlers have the correct context
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
        create(this.state.title, this.state.body, this.state.tags, this.onSubmitResponse);
    }

    onSubmitResponse(response) {
        if (response === true) {
            // Navigate away from login page
            this.context.router.push('/');
        } else {
            // Something went wrong, let the user try again
            this.setState({submitDisabled: true});
        }
    }

    render() {
        return (
            <div className="wrapper page-h">
                <CreateForm
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

CreatePage.contextTypes = {
    router: React.PropTypes.object
};