import React, {Component} from 'react';

export default class EditForm extends Component {
    render() {
        let tags = '';
        if (this.props.tags.length > 0) {
            tags = this.props.tags[0].body;
        }
        return (
            <form onSubmit={this.props.onSubmitHandler}>
                <div className="form-group">
                    <label>Name:</label>
                    <input
                        className="form-control"
                        type="text"
                        name="title"
                        value={this.props.title}
                       disabled={this.props.submitDisabled}
                        onChange={this.props.onChangeHandler}
                    />
                </div>
                <div className="form-group">
                    <label>Description:</label>
                    <textarea
                        className="form-control"
                        name="body"
                        value={this.props.body}
                        disabled={this.props.submitDisabled}
                        onChange={this.props.onChangeHandler}
                    />
                </div>
                <div className="form-group">
                    <label>Tags:</label>
                    <input
                        className="form-control"
                        name="tags"
                        value={tags}
                      disabled={this.props.submitDisabled}
                        onChange={this.props.onChangeHandler}
                    />
                </div>
                <input className="btn btn-default" type="submit" value="Submit" disabled={this.props.submitDisabled}/>
            </form>
        );
    }
}