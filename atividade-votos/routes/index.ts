const router = require('express').Router();
const votes = require('./votes');

router.use(votes);

export default router;
