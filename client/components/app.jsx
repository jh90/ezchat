import React from 'react';
import daemon from 'superagent';

import ChatList from './chat_list.jsx';
import ChatView from './chat_view.jsx';
import NewChatForm from './new_chat_form.jsx';

export default class App extends React.Component {
  constructor () {
    super();
    this.state = {
      chats: [],
      messages: [],
    };
    this.getAllChats = this.getAllChats.bind(this);
    this.getMessagesOfChat = this.getMessagesOfChat.bind(this);
    this.createChat = this.createChat.bind(this);
    this.startNewChat = this.startNewChat.bind(this);
  }

  getAllChats () {
    daemon.get('/api/chats').then((response) => {
      this.setState({
        chats: response.body,
      });
    });
  }

  componentDidMount() {
    this.getAllChats();
  }

  getMessagesOfChat (cid) {
    daemon.get(`/api/messages/${cid}`).then((response) => {
      this.setState({
        messages: response.body,
      });
    });
  }

  createChat (title) {
    return daemon.post('/api/chats').send({ title }).then((response) => {
      console.log(response);
    });
  }

  startNewChat (title) {
    this.createChat(title).then(() => {this.getAllChats();});
  }

  render () {
    return (
      <div>
        <ChatList chats={this.state.chats} handleClick={this.getMessagesOfChat} />
        <ChatView messages={this.state.messages} />
        <NewChatForm handleSubmit={this.startNewChat} />
      </div>
    );
  }
}
