const express = require('express');
const messageController = require('../controllers/message_controller.js');

const router = express.Router();

router.get('/:cid', messageController.getAllOfChat);
router.post('/', messageController.postMessage);

module.exports = router;
