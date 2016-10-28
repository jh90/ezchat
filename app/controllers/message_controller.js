const messageDAO = require('../services/message_dao.js');
const Message = require('../models/Message.js');

class MessageController {
  static getAllOfChat (req, res) {
    messageDAO.byChatID(req.params.cid).then((messages) => {
      res.status(200).json(messages);
    });
  }

  static postMessage (req, res) {
    const { chat_id, body, alias } = req.body;
    messageDAO.create({ chat_id, body, alias })
              .then((message) => {
                res.status(200).json(message);
              });
  }
}

module.exports = MessageController;
