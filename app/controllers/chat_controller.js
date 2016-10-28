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
    const { id, start_date, title } = req.body;
    chatDAO.create({ id, start_date, title }).then((chat) => {
      res.status(200).json(chat);
    });
  }
}

module.exports = ChatController;
