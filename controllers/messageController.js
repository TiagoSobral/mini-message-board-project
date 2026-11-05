import { createNewMessage } from '../database/queries.js';

async function addMessage(req, res) {
	const text = req.body.messageInput;
	const user = req.body.nameInput;
	await createNewMessage({ user, text });
	res.redirect('/');
}

export { addMessage };
