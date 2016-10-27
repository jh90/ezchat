class Message {
  constructor ({ id, cid, timestamp, body, alias }) {
    this.id = id;
    this.cid = cid;
    this.timestamp = timestamp;
    this.body = body;
    this.alias = alias;
  }
}

module.exports = Message;
