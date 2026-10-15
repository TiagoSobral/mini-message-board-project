import express from 'express';
import { messages } from '../database/messages.js';

export const indexRouter = express.Router();

indexRouter.get('/', (req, res) => {
	res.render('index', { title: 'Mini Messageboard', messages: messages });
});
