import React, {Component} from 'react';
import $ from 'jquery'

export default class CommentsForm extends Component {
    render() {
        if (this.props.fieldEmpty) {
            $('input[name="comment"]').text('');
        }

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
                <input className="btn btn-default comment-submit" type="submit" value="Add comment"/>
            </form>
        );
    }
}
