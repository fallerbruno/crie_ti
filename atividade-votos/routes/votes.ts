import { Router } from 'express';
const votesController = require('../controllers/VoteController')

export const votesRouter = Router();

votesRouter.get('/votes', votesController.index);

votesRouter.post('/vote', votesController.create);

module.exports = votesRouter;