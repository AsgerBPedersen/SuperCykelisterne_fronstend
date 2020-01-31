import React, { Component } from 'react';
import EditInfo from './EditInfo';


class Account extends Component {
    render() {
        return (
            <div className="d-flex justify-content-around container">
                <EditInfo user={this.props.user}></EditInfo>
            </div>
        );
    }
}

export default Account;