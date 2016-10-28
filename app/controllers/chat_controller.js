const chatDAO = require('../services/chat_dao.js');

class ChatController {
  static getAllChats (req, res) {
    chatDAO.all().then((chats) => {
      res.status(200).json(chats);
    });
  }

  static getChat (req, res) {
    chatDAO.byID({ cid: req.params.cid }).then((chat) => {
      res.status(200).json(chat);
    });
  }

  static createChat (req, res) {
    chatDAO.create({ title: req.body.title }).then((chat) => {
      res.status(200).json(chat);
    });
  }
}

module.exports = ChatController;
