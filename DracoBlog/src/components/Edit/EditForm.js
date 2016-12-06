import React, {Component} from 'react';

export default class EditForm extends Component {
    render() {

        let h1 = this.props.h1;
        let btnMsg = this.props.btn;
        let imgbtn = null;
        if (this.props.hasImg) {
            imgbtn = <input
                type="file"
                id="uploaded-file"
            />;
        }
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
                <div className="form-error title-error"></div>
                {imgbtn}
                <textarea
                    className="form-control"
                    name="body"
                    value={this.props.body}
                    placeholder="Body"
                    disabled={this.props.submitDisabled}
                    onChange={this.props.onChangeHandler}
                />
                <div className="form-error body-error"></div>
                <input
                    className="form-control"
                    type="text"
                    name="tags"
                    value={this.props.tags}
                    placeholder="Tags"
                    disabled={this.props.submitDisabled}
                    onChange={this.props.onChangeHandler}
                />
                <div className="form-error tags-error"></div>
                <input className="btn btn-default" type="submit" value={btnMsg} disabled={this.props.submitDisabled}/>
            </form>
        );
    }
}