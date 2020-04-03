import Router from 'express-promise-router';
import Achievement from '../models/achievement';
import axios from 'axios';
import dotenv from 'dotenv'

dotenv.config()
const router = Router();

const EXCELAPI = process.env.EXCELAPI_URL ?
           process.env.EXCELAPI_URL :
           "http://localhost:5000";

const request = axios.create({
  baseURL: EXCELAPI,
  headers: {
    'Content-Type': 'application/json',
},
  responseType: 'json',
})

router.get('/', async (req, res) => {
    let filter={'date': {}}
    if (req.query.user !== undefined) {
        filter.user = req.query.user;
    }
    if (req.query.gte !== undefined) {
        filter.date.$gte = req.query.gte;
    }
    if (req.query.lte !== undefined) {
        filter.date.$lte = req.query.lte;
    }
    const achievements = await Achievement.find(filter);
    const result = await request.post('/', {
        user: req.query.user,
        achievements: achievements
    })
    res.json(result.data);
});

export default router;