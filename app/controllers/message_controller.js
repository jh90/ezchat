const messageDAO = require('../services/message_DAO.js');

class MessageController {
  static getAllOfChat () {
    messageDAO.all()
  }

  static postMessage () {
    messageDAO.create()
  }
}

module.exports = MessageController;
