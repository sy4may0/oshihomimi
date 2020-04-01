import Router from 'express-promise-router';

const router = Router();

const conf = require('../conf.json');

router.get('/', async (req, res) => {
    res.json(conf);
});

export default router;