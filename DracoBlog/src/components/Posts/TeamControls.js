import React, {Component} from 'react';
import {Link} from 'react-router';

export default class TeamControls extends Component {
    render() {
        let edit = null;
        // let join = null;
        // let leave = null;

        if (this.props.canEdit) edit = <Link to={"/edit/" + this.props.id} className="btn btn-default">Edit Post</Link>;
        //if (this.props.ownTeam)
        //    leave = <a href="" className="btn btn-default" onClick={this.props.onLeave}>Leave team</a>;
        //else
        //    join = <a href="" className="btn btn-default" onClick={this.props.onJoin}>Join team</a>;

        return (
            <div>
                {edit}

            </div>
        )
    }
}