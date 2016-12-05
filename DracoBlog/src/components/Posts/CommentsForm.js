import React, {Component} from 'react';

export default class CommentsForm extends Component {
    render() {
        return (
            <form className="form-horizontal" onSubmit={this.props.onSubmitHandler}>
                <input
                    className="form-control comment-field"
                    type="text"
                    name="comment"
                    placeholder="Add Comment"
                    value={this.props.comment}
                    disabled={this.props.submitDisabled}
                    onChange={this.props.onChangeHandler}
                />
                <div className="form-error comment-error"></div>
                <input className="btn btn-default" type="submit" value="Add comment"/>
            </form>
        );
    }
}
