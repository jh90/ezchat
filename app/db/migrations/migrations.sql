DROP DATABASE ezchat;

CREATE DATABASE ezchat;

CREATE TABLE users (id SERIAL PRIMARY KEY,
                    alias VARCHAR(16) DEFAULT 'anonymous');

CREATE TABLE chats (id SERIAL PRIMARY KEY,
                    start_date DATE NOT NULL);

CREATE TABLE users_chats (user_id INTEGER REFERENCES users(id) NOT NULL,
                          chat_id INTEGER REFERENCES chats(id) NOT NULL);

CREATE TABLE messages (id SERIAL PRIMARY KEY,
                       user_id INTEGER REFERENCES users(id),
                       post_time TIMESTAMP NOT NULL);
