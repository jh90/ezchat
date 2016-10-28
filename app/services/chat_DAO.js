const db = require('../db/sql/db.js');
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
    const { id, start_date, title } = data;
    return db.one(sql.create, [id, start_date, title]);
  }
}

module.exports = ChatDAO;
