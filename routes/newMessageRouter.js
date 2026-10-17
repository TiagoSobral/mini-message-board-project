import express from 'express';
import { messages } from '../database/messages.js';

export const newMessageRouter = express.Router();

newMessageRouter.get('/', (req, res) => {
	res.render('form');
});

newMessageRouter.post('/', (req, res) => {
	const messageInput = req.body.messageInput;
	const nameInput = req.body.nameInput;
	messages.push({ text: messageInput, user: nameInput, added: new Date() });
	res.redirect('/');
});
