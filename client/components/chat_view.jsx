import React from 'react';
import daemon from 'superagent';

const propTypes = {
  cid: React.PropTypes.string,
};

export default class ChatView extends React.Component {
  constructor () {
    super();
    this.state = {
      messages: [],
    };
  }

  componentDidMount () {
    daemon.get(`/api/messages/${this.props.cid}`).then((response) => {
      this.setState({
        messages: response.body,
      });
    });
  }

  render () {
    return (
      <ul>
        {
          this.state.messages.map((message) => {
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
