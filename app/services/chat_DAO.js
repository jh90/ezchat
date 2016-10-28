const db = require('../db/db.js');
const sql = require('../db/sql_provider.js').chats;
const Chat = require('../models/chat.js');

class ChatDAO {
  static all () {
    return db.map(sql.all(), [], (row) => new Chat(row));
  }

  static byID (id) {
    return db.one(sql.find(), [id], (chat) => new Chat(chat));
  }

  static create (data) {
    const { id, title } = data;
    return db.one(sql.create, [id, title]);
  }
}

module.exports = ChatDAO;
