import express from 'express';
import { showAllMessages } from '../controllers/messageController.js';

export const indexRouter = express.Router();

indexRouter.get('/', showAllMessages);
