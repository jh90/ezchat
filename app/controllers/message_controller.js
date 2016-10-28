const messageDAO = require('../services/message_dao.js');

class MessageController {
  static getAllOfChat (req, res) {
    messageDAO.byChatID({ cid: req.params.cid }).then((messages) => {
      res.status(200).json(messages);
    });
  }

  static postMessage (req, res) {
    const { id, chat_id, post_time, body, alias } = req.body;
    messageDAO.create({ id, chat_id, post_time, body, alias })
              .then((message) => {
                res.status(200).json(message);
              });
  }
}

module.exports = MessageController;
