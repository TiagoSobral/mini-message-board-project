import { Pool } from 'pg';
import fs from 'fs';

const Database_url = process.argv[2];
const pool = new Pool({
	connectionString: Database_url,
});

export { pool, Database_url };
