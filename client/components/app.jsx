import React from 'react';
import { Link } from 'react-router';
import daemon from 'superagent';

export default class App extends React.Component {
  constructor () {
    super();
    this.state = {
      messages: [],
    };
  }

  componentDidMount() {
    daemon.get('/api/messages/2').then((response) => {
      const messagesByMostRecent = response.body.reverse();
      this.setState({
        messages: messagesByMostRecent,
      });
    });
    daemon.post('/api/chats').send({ title: 'moar testing' }).then((response) => {
      console.log('hit');
      console.log(response);
    });
    daemon.post('/api/messages').send({ chat_id: 1, body: 'test' }).then((response) => {
      console.log(response);
    });
  }

  render () {
    return (
      <div>
        {
          this.state.messages.map((message) => {
            return (
              <div>{`${message.body} - ${message.alias} - ${message.cid}`}</div>
            );
          })
        }
      </div>
    );
  }
}
