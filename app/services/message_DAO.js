const db = require('../db/db.js');
const sql = require('../db/sql_provider.js').messages;
const Message = require('../models/message.js');

class MessageDAO {
  static byChatID (cid) {
    return db.map(sql.find, [cid], (message) => new Message(message));
  }

  static create (data) {
    const { chat_id, body, alias } = data;
    const cleanData = alias ? [chat_id, body, alias] : [chat_id, body, 'anonymous'];
    return db.one(sql.create, cleanData, (message) => new Message(message));
  }
}

module.exports = MessageDAO;
