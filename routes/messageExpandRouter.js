import express from 'express';
import { messages } from '../database/messages.js';

export const messageExpand = express.Router();

messageExpand.get('/:messageId', (req, res) => {
	const id = req.params.messageId;
	res.render('messageDetail', { message: messages[id] });
});
