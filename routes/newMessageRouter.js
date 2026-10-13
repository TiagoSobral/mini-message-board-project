import express from 'express';

export const newMessageRouter = express.Router();

newMessageRouter.get('/', (req, res) => {
	res.send('hello from new message');
});
