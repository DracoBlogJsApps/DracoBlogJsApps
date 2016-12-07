import React, {Component} from 'react';
import {Link} from 'react-router';

export default class PostControls extends Component {
    render() {
        
        let edit = null;
        let remove = null;
        let heading = null;

        if (this.props.canEdit) {
            edit = <Link to={"/edit/" + this.props.id} className="">Edit Post</Link>;
            remove = <Link to={"/delete/" + this.props.id} className="">Delete Post</Link>;
            heading = <p className="avActions">Available Actions</p>;
        }

        return (
            <div>
                <div>
                    {heading}
                </div>
                <div className="custom-nav-link">
                    {edit}
                </div>
                <div className="custom-nav-link">
                    {remove}
                </div>
            </div>
        )
    }
}