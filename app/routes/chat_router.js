const express = require('express');
const chatController = require('../controllers/chat_controller.js');

const router = express.Router();

router.get('/', chatController.getAllChats);
router.get('/:cid', chatController.getChat);
router.post('/', chatController.createChat);

module.exports = router;
