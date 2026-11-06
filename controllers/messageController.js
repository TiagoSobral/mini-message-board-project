import { createNewMessage } from '../database/queries.js';

async function addMessage(req, res) {
	const text = req.body.messageInput;
	const username = req.body.nameInput;
	await createNewMessage({ username, text });
	res.redirect('/');
}

export { addMessage };
