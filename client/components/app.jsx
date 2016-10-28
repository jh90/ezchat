import React from 'react';
import { Link } from 'react-router';
import daemon from 'superagent';

export default class App extends React.Component {
  constructor () {
    super();
    this.state = {
      chats: [],
    };
  }

  componentDidMount() {
    daemon.get('/api/chats').then((response) => {
      this.setState({
        chats: response.body,
      });
    });
  }

  render () {
    return (
      <div>

      </div>
    );
  }
}
