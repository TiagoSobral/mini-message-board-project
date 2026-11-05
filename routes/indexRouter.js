import express from 'express';
import { getAllMessages } from '../database/queries.js';

export const indexRouter = express.Router();

indexRouter.get('/', (req, res) => {
	const messages = getAllMessages();
	res.render('index', { messages: messages });
});
