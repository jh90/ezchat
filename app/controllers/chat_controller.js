const chatDAO = require('../services/chat_dao.js');

class ChatController {
  static getAllChats (req, res) {
    chatDAO.all().then((chats) => {
      res.status(200).json(chats);
    });
  }

  static getChat (req, res) {
    chatDAO.byID({ id: req.params.id }).then((chat) => {
      res.status(200).json(chat);
    });
  }

  static createChat (req, res) {
    const { id, title } = req.body;
    chatDAO.create({ id, title }).then((chat) => {
      res.status(200).json(chat);
    });
  }
}

module.exports = ChatController;
