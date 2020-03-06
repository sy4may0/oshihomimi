import Router from 'express-promise-router';
import Achievement from '../models/achievement'

const router = Router();

router.get('/', async (req, res) => {
    const filter={}
    if (req.params.user !== undefined) {
        filter = { user: req.params.user } 
    }
    const achievements = await Achievement.find(filter);
    res.json(achievements);
});

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const achievement = await Achievement.findById(id);
    res.json(achievement)
});


router.post('/', async(req, res) => {
    const newAchievement = new Achievement();
    newAchievement.date = req.body.date
    newAchievement.user = req.body.user
    newAchievement.unexpected = req.body.unexpected
    newAchievement.project = req.body.project
    newAchievement.category = req.body.category
    newAchievement.description = req.body.description
    newAchievement.scheduled = req.body.scheduled
    newAchievement.actual = req.body.actual
    newAchievement.closed = req.body.closed
    newAchievement.issues = req.body.issues

    await newAchievement.save();
    res.json({result: "success"});
});

router.post('/:id', async(req, res) => {
    const id = req.params.id;
    const newAchievement = await Achievement.findById(id);
    newAchievement.date = req.body.date
    newAchievement.user = req.body.user
    newAchievement.unexpected = req.body.unexpected
    newAchievement.project = req.body.project
    newAchievement.category = req.body.category
    newAchievement.description = req.body.description
    newAchievement.scheduled = req.body.scheduled
    newAchievement.actual = req.body.actual
    newAchievement.closed = req.body.closed
    newAchievement.issues = req.body.issues

    await newAchievement.save();
    res.json({result: "success"});
});

router.delete('/:id', async(req, res) => {
    await Achievement.remove({
        _id: req.params.id
    });
    res.json({
        result: "success"
    });
});

export default router;