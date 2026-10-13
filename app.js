import express from 'express';
import { indexRouter } from './routes/indexRouter.js';
import { newMessageRouter } from './routes/newMessageRouter.js';

const app = express();
const PORT = 3000;

app.use('/newmessage', newMessageRouter);
app.use('/', indexRouter);

app.listen(PORT, (error) => {
	if (error) {
		throw error;
	}
});
