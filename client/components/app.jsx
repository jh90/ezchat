import React from 'react';
import daemon from 'superagent';

import ChatList from './chat_list.jsx';
import ChatView from './chat_view.jsx';

export default class App extends React.Component {
  constructor () {
    super();
    this.state = {
      chats: [],
      selectedChat: null,
    };
    this.selectChatToDisplay = this.selectChatToDisplay.bind(this);
  }

  componentDidMount() {
    daemon.get('/api/chats').then((response) => {
      this.setState({
        chats: response.body,
      });
    });
  }

  selectChatToDisplay (cid) {
    console.log(cid);
    this.setState({
      selectedChat: cid,
    });
  }

  render () {
    return (
      <div>
        <ChatList chats={this.state.chats} handleClick={this.selectChatToDisplay} />
        {this.state.selectedChat ? <ChatView cid={this.state.selectedChat} /> : false}
      </div>
    );
  }
}
