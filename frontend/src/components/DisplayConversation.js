import React, { Component } from "react";

export default class DisplayConversation extends Component {
  render() {
    return (
      <div className="displayConversation">
        {this.props.messages.map(message => (
          <div>
            {message.username}: {message.message}
          </div>
        ))}
      </div>
    );
  }
}
