import { pool } from './pool.js';

async function getAllMessages() {
	const { rows } = await pool.query('SELECT * FROM messages');
	return rows;
}

async function getMessage(id) {
	const { rows } = await pool.query('SELECT * FROM messages WHERE id = ($1)', [
		id,
	]);
	return rows;
}

async function createNewMessage(obj) {
	const { user, text } = obj;
	const date = new Date();
	await pool.query(
		'INSERT INTO messages(user, text, added) VALUES($1, $2, $3)',
		[user, text, date],
	);
}

export { getAllMessages, getMessage, createNewMessage };
