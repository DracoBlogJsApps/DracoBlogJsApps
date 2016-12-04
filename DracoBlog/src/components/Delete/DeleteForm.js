import React, {Component} from 'react';

export default class DeleteForm extends Component {
    render() {
        return (
            <form className="form-horizontal" onSubmit={this.props.onSubmitHandler}>
                <h1>Delete Post</h1>
                <p></p>
                <input
                    className="form-control"
                    type="text"
                    name="title"
                    value={this.props.title}
                    disabled="disabled"
                />
                <textarea
                    className="form-control"
                    name="body"
                    value={this.props.body}
                    disabled="disabled"
                />
                <input className="btn btn-default" type="submit" value="Delete" disabled={this.props.submitDisabled}/>
            </form>
        );
    }
}