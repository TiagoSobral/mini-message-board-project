import express from 'express';
import { getMessage } from '../database/queries.js';

export const messageExpand = express.Router();

messageExpand.get('/:messageId', getMessage);
