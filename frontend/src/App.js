/* eslint-disable no-undef */
import Login from "./components/Login";
import MessagingPanel from "./components/MessagingPanel";
import './App.css'

import React, { Component } from "react";

export default class App extends Component {
  state = {
    username: null
  };

  setUsername = username => {
    this.setState({username})
  };
  render() {
    return (
      <div className="App">
      {
      !this.state.username ?
        <Login setUsername={this.setUsername} />
        :
        <MessagingPanel username={this.state.username}/>
      }
      </div>
    );
  }
}
