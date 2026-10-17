import express from 'express';
import { messages } from '../database/messages.js';

export const indexRouter = express.Router();

indexRouter.get('/', (req, res) => {
	res.render('index', { messages: messages });
});

indexRouter.post('/new', (req, res) => {
	const messageInput = req.body.messageInput;
	const nameInput = req.body.nameInput;
	messages.push({ text: messageInput, user: nameInput, added: new Date() });
	res.redirect('/');
});
