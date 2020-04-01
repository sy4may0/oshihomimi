import Router from 'express-promise-router';
import Achievement from '../models/achievement'

const router = Router();

router.get('/', async (req, res) => {
    let filter={}
    if (req.query.user !== undefined) {
        filter = { user: req.query.user } 
    }
    const achievements = await Achievement.find(filter);
    res.json(achievements);
});

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const achievement = await Achievement.findById(id);
    res.json(achievement)
});

// 日時を配列とすることで複数追加を想定する。
// すでに同一のAchievementが存在する場合、それを更新する。ない場合は新規追加する。 
router.post('/', async(req, res) => {
    const results = [];
    // description, project, categoryが一致するachievementの配列を取得。
    const achievements = await Achievement.find({
        $and: [
            { description: {$eq: req.body.description} },
            { user: {$eq: req.body.user} },
            { project: {$eq: req.body.project} },
            { category: {$eq: req.body.category} },
        ]
    });

    const bucket = new Map();
    for (let achievement of achievements) {
        bucket.set(achievement.date, achievement);
    }

    // 新規追加するachievementを配列に追加。
    const newAchievements = [];
    for(let date of req.body.dates) {
        const newAchievement = new Achievement();
        newAchievement.date = date;
        newAchievement.user = req.body.user;
        newAchievement.unexpected = req.body.unexpected;
        newAchievement.project = req.body.project;
        newAchievement.category = req.body.category;
        newAchievement.description = req.body.description;
        newAchievement.scheduled = req.body.scheduled;
        newAchievement.actual = req.body.actual;
        newAchievement.closed = req.body.closed;
        newAchievement.issues = req.body.issues;

        newAchievements.push(newAchievement)
    }

    // 重複排除
    // 日時が同じのAchievementがある場合は、idをそのままにする。
    for (let newAchievement of newAchievements) {
        if(bucket.has(newAchievement.date)) {
            newAchievement._id = 
                bucket.get(newAchievement.date)._id;
            bucket.set(newAchievement.date, newAchievement);
        }else {
            bucket.set(newAchievement.date, newAchievement);
        }
    }

    const payload = Array.from(bucket.values());

    await Promise.all(payload.map(async (v)=> {
        const query = {'_id': v._id};
        await Achievement.findOneAndUpdate(query, v, {upsert: true})
    }));
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
    console.log(newAchievement)

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