const QueryFile = require('pg-promise').QueryFile;
const path = require('path');

function sql(file) {
  const fullPath = path.join(__dirname, file);
  return new QueryFile(fullPath, { minify: true });
}

const SQLProvider = {
  chats: {
    all: sql('./queries/chats/all.sql'),
    create: sql('./queries/chats/create.sql'),
    find: sql('./queries/chats/find.sql'),
  },
  messages: {
    create: sql('./queries/messages/create.sql'),
    find: sql('./queries/messages/find.sql'),
  },
};

module.exports = SQLProvider;
