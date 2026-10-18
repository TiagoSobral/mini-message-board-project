import express from 'express';
import path from 'node:path';
import { indexRouter } from './routes/indexRouter.js';
import { newMessageRouter } from './routes/newMessageRouter.js';
import { messageExpand } from './routes/messageExpandRouter.js';

const app = express();
const PORT = 3000;
const __dirname = import.meta.dirname;

app.use(express.urlencoded({ extended: true }));
app.use('/message', messageExpand);
app.use('/new', newMessageRouter);
app.use('/', indexRouter);

app.listen(PORT, (error) => {
	if (error) {
		throw error;
	}
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
