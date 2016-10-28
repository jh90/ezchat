const express = require('express');
const chatController = require('../controllers/chat_controller.js');

const router = express.Router();

router.get('/', chatController.getAllChats);
//connected
router.get('/:cid', chatController.getChat);
//connected
router.post('/', chatController.createChat);
//connected

module.exports = router;
