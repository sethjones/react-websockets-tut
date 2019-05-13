import React, { Component } from "react";
import DisplayConversation from "./DisplayConversation";
import MessagingBox from "./MessagingBox";

export default class MessagingPanel extends Component {
  state = {
    messages: []
  };

  connection = new WebSocket("ws://localhost:9090");

  componentDidMount(){
      this.connection.onmessage = (message) => {
        const data = JSON.parse(message.data)
        this.setState({messages: [...this.state.messages, data]})
      }
  }

  getMessage = message => {
    const data = { username: this.props.username, message };
    this.connection.send(JSON.stringify(data));
  };

  render() {
    return (
      <React.Fragment>
        <DisplayConversation messages={this.state.messages}/>
        <MessagingBox getMessage={this.getMessage} />
      </React.Fragment>
    );
  }
}
