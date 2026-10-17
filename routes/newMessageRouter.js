import express from 'express';

export const newMessageRouter = express.Router();

newMessageRouter.get('/', (req, res) => {
	res.render('form');
});
