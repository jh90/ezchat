import React from 'react';

import NewMessageForm from './new_message_form.jsx';

const propTypes = {
  messages: React.PropTypes.array,
};

export default class ChatView extends React.Component {
  render () {
    return (
      <ul>
        {
          this.props.messages.map((message) => {
            return (
              <li>{message.body}</li>
            );
          })
        }
      </ul>
    );
  }
}

ChatView.propTypes = propTypes;
