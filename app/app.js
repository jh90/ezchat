const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const chatRouter = require('./routes/chat_router.js');
const messageRouter = require('./routes/message_router.js');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(morgan('dev'));

app.use('/api/chats', chatRouter);
app.use('/api/messages', messageRouter);

module.exports = app;
