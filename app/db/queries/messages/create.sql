INSERT INTO messages (chat_id, body, alias) VALUES ($1, $2, $3) RETURNING *;
