import React, {Component} from 'react';

export default class DeleteForm extends Component {
    render() {
        return (
            <form onSubmit={this.props.onSubmitHandler}>
                <div className="form-group">
                    <label>Name:</label>
                    <input
                        className="form-control"
                        type="text"
                        name="title"
                        value={this.props.title}
                        disabled="disabled"
                    />
                </div>
                <div className="form-group">
                    <label>Description:</label>
                    <textarea
                        className="form-control"
                        name="body"
                        value={this.props.body}
                        disabled="disabled"
                    />
                </div>
                <input className="btn btn-default" type="submit" value="Delete Post" disabled={this.props.submitDisabled}/>
            </form>
        );
    }
}