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
    const results = [];
    // description, project, categoryが一致するachievementの配列を取得。
    const achievements = await Achievement.find({
        $and: [
            { description: {$eq: req.body.description} },
            { project: {$eq: req.body.project} },
            { category: {$eq: req.body.category} },
        ]
    });
    // 新規追加するachievementを配列に追加。
    for(let date of req.body.date) {
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

        achievements.push(newAchievement)
    }
    // 重複排除
    const cleanAchievements = achievements.filter(function(v1, i1, a1) {
        //前方優先。重複した場合findで取得した_idつきオブジェクトが優先。
        return ( a1.findIndex( function(v2) {
            return (v1.date == v2.date)
        }) === i1);
    });

    await Promice.all(cleanAchievements.map(async (v)=> {
        v.save();
    }));
    res.json({result: "success"});
});

//router.post('/:id', async(req, res) => {
//    const id = req.params.id;
//    const newAchievement = await Achievement.findById(id);
//    newAchievement.date = date 
//    newAchievement.user = req.body.user
//    newAchievement.unexpected = req.body.unexpected
//    newAchievement.project = req.body.project
//    newAchievement.category = req.body.category
//    newAchievement.description = req.body.description
//    newAchievement.scheduled = req.body.scheduled
//    newAchievement.actual = req.body.actual
//    newAchievement.closed = req.body.closed
//    newAchievement.issues = req.body.issues
//
//    await newAchievement.save();
//
//    res.json({result: "success"});
//});

router.delete('/:id', async(req, res) => {
    await Achievement.remove({
        _id: req.params.id
    });
    res.json({
        result: "success"
    });
});

export default router;