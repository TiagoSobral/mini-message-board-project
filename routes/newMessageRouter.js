import express from 'express';
import { addMessage } from '../controllers/messageController.js';

export const newMessageRouter = express.Router();

newMessageRouter.get('/', (req, res) => {
	res.render('form');
});

newMessageRouter.post('/', addMessage);
