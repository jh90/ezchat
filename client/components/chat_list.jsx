import React from 'react';

const propTypes = {
  chats: React.PropTypes.array,
  handleClick: React.PropTypes.func,
};

export default class ChatList extends React.Component {
  constructor () {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick (e) {
    const cid = e.target.id;
    this.props.handleClick(cid);
  }

  render () {
    return (
      <ul>
        {
          this.props.chats.map((chat) => {
            return (
              <li id={chat.id} onClick={this.handleClick}>{chat.title}</li>
            );
          })
        }
      </ul>
    );
  }
}

ChatList.propTypes = propTypes;
