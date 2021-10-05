import React, { Component } from 'react'

export default class UserRegister extends Component {
    render() {
        return (
            <div>
                <p>Register User</p>
                {this.props.duplicateUsername && <h2 className="red-alert">That username is already taken, please try a different one</h2>}
                <form onSubmit={this.props.addUser}>
                    <input
                        type="text"
                        required="true"
                        value={this.props.currentValues.firstName}
                        onChange={this.props.setFirstname}
                        placeholder="First Name"
                    />
                    <input
                        type="text"
                        required="true"
                        value={this.props.currentValues.lastName}
                        onChange={this.props.setLastname}
                        placeholder="Last Name"
                    />
                    <input
                        type="text"
                        required="true"
                        value={this.props.currentValues.username}
                        onChange={this.props.setUsername}
                        placeholder="Username"
                    />
                    <button disabled={!this.props.disbaledSave}>save</button>
                </form>
            </div>
        )
    }
}