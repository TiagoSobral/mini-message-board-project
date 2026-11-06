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
	const { username, text } = obj;
	const added = `${new Date()}`;
	await pool.query(
		'INSERT INTO messages(username, text, added) VALUES($1, $2, $3)',
		[username, text, added],
	);
}

export { getAllMessages, getMessage, createNewMessage };
