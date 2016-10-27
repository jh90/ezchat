const chatDAO = require('../services/chat_DAO.js');

class ChatController {
  static getAllChats () {
    chatDAO.all()
  }

  static getChat () {
    chatDAO.byID()
  }

  static createChat () {
    chatDAO.create()
  }
}

module.exports = ChatController;
