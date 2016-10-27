DROP DATABASE ezchat;

CREATE DATABASE ezchat;

CREATE TABLE chats (id SERIAL PRIMARY KEY,
                    start_date DATE NOT NULL,
                    title VARCHAR(16));

CREATE TABLE messages (id SERIAL PRIMARY KEY,
                       chat_id INTEGER REFERENCES chats(id) NOT NULL,
                       post_time TIMESTAMP NOT NULL,
                       body TEXT NOT NULL,
                       user_alias VARCHAR(16) DEFAULT 'anonymous');
