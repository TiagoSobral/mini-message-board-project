#! /usr/bin/env node
import { Client } from 'pg';
import { Database_url } from './pool.js';

const TABLE = `
CREATE TABLE IF NOT EXISTS messages (
id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
username VARCHAR(255),
text VARCHAR(255),
added VARCHAR(255));
`;

async function main() {
	console.log('seeding...');
	const client = new Client({
		connectionString: Database_url,
	});
	await client.connect();
	await client.query(TABLE);
	await client.end();
	console.log('done');
}

main();
