const db = require('../db/db.js');
const sql = require('../db/sql_provider.js').chats;
const Chat = require('../models/chat.js');

class ChatDAO {
  static all () {
    return db.map(sql.all, [], (row) => new Chat(row));
  }

  static byID ({ cid }) {
    return db.one(sql.find, [cid], (chat) => new Chat(chat));
  }

  static create ({ title }) {
    return db.one(sql.create, [title], (chat) => new Chat(chat));
  }
}

module.exports = ChatDAO;
