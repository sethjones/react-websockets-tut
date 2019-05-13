import React, { Component } from "react";

export default class Login extends Component {
  login = e => {
    e.preventDefault();
    this.props.setUsername(e.target.username.value);
  };

  render() {
    return (
      <div id="login">
        <form onSubmit={this.login}>
          <label>Username:</label>
          <br />
          <input type="text" id="username" />
          <br />
          <input type="submit" value="Log in" />
        </form>
      </div>
    );
  }
}
