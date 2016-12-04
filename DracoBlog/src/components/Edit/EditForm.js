import React, {Component} from 'react';

export default class EditForm extends Component {
    render() {
        let h1 = this.props.h1;
        let btnMsg = this.props.btn;
        return (
            <form className="form-horizontal" onSubmit={this.props.onSubmitHandler}>
                <h1>{h1}</h1>
                <p></p>
                <input
                    className="form-control"
                    type="text"
                    name="title"
                    value={this.props.title}
                    placeholder="Title"
                    disabled={this.props.submitDisabled}
                    onChange={this.props.onChangeHandler}
                />
                <div className="error"></div>
                <textarea
                    className="form-control"
                    name="body"
                    value={this.props.body}
                    placeholder="Body"
                    disabled={this.props.submitDisabled}
                    onChange={this.props.onChangeHandler}
                />
                <div className="error"></div>
                <input className="btn btn-default" type="submit" value={btnMsg} disabled={this.props.submitDisabled}/>
            </form>
        );
    }
}