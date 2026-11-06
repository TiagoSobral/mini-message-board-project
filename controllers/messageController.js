import {
	createNewMessage,
	getAllMessages,
	getMessage,
} from '../database/queries.js';

async function addMessage(req, res) {
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

export { addMessage, showAllMessages, seeMessage };
