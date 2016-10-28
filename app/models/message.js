class Message {
  constructor ({ id, chat_id, timestamp, body, alias }) {
    this.id = id;
    this.cid = chat_id;
    this.body = body;
    this.alias = alias;
  }
}

module.exports = Message;
