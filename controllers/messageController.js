import {
	createNewMessage,
	getAllMessages,
	getMessage,
} from '../database/queries.js';
import { body, validationResult, matchedData } from 'express-validator';

const validation = [
	body('nameInput')
		.trim()
		.notEmpty()
		.withMessage('name is empty field')
		.isAlphanumeric()
		.withMessage('name must only contain letters & numbers')
		.isLength({ min: 1, max: 9 })
		.withMessage('name must be between 1 and 9 characters'),
	body('messageInput')
		.trim()
		.notEmpty()
		.withMessage('message is empty field')
		.isAlpha()
		.withMessage('message must only contain letters')
		.isLength({ min: 10, max: 200 })
		.withMessage('message must be between 1 and 200 characters'),
];

async function addMessage(req, res) {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).render('form', {
			errors: errors.array(),
		});
	}
	const text = req.body.messageInput;
	const username = req.body.nameInput;
	await createNewMessage({ username, text });
	res.redirect('/');
}

async function showAllMessages(req, res) {
	const messages = await getAllMessages();
	res.render('index', { messages: messages });
}

async function seeMessage(req, res) {
	const id = req.params.id;
	const message = await getMessage(id);
	res.render('messageDetail', {
		message: message,
	});
}

export { addMessage, showAllMessages, seeMessage, validation };
