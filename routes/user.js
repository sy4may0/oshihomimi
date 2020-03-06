import Router from 'express-promise-router';
import User from '../models/user'

const router = Router();

router.get('/', async (req, res) => {
    const users = await User.find({});
    res.json(users);
});

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const user = await User.findById(id);
    res.json(user)
});

router.post('/', async(req, res) => {
    const newUser = new User();
    newUser.name = req.body.name;
    newUser.full_name = req.body.full_name;

    const exists = await User.countDocuments({"name": newUser.name});
    if (exists > 0) {
        const message = 
            "User " + newUser.name + " is already exists.";
        throw new Error(message);
    }

    await newUser.save();
    res.json({result: "success"});
});

router.post('/:id', async(req, res) => {
    const id = req.params.id;
    const newUser = await User.findById(id);
    newUser.name = req.body.name;
    newUser.full_name = req.body.full_name;

    await newUser.save();
    res.json({result: "success"});
});

router.delete('/:id', async(req, res) => {
    await User.remove({
        _id: req.params.id
    });
    res.json({
        result: "success"
    });
});

export default router;