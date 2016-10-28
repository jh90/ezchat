const db = require('../db/db.js');
const sql = require('../db/sql_provider.js').messages;
const Message = require('../models/message.js');

class MessageDAO {
  static byChatID (cid) {
    return db.one(sql.find(), [cid], (message) => new Message(message));
  }

  static create (data) {
    const { chat_id, post_time, body, alias } = data;
    return db.one(sql.create(), [chat_id, post_time, body, alias], (message) => new Message(message));
  }
}

module.exports = MessageDAO;
