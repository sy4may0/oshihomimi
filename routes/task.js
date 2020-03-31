import Router from 'express-promise-router';
import Task from '../models/task'

const router = Router();

router.get('/', async (req, res) => {
    let filter={}
    if (req.query.user !== undefined) {
        filter = { user: req.query.user } 
    }
    const tasks = await Task.find(filter);
    res.json(tasks);
});

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const task = await Task.findById(id);
    res.json(task)
});


router.post('/', async(req, res) => {
    const newTask = new Task();
    newTask.name = req.body.name;
    newTask.user = req.body.uesr;
    newTask.project = req.body.project;
    newTask.category = req.body.category;
    newTask.description = req.body.description;
    newTask.closed = req.body.closed;

    await newTask.save();
    res.json({result: "success"});
});

router.post('/:id', async(req, res) => {
    const id = req.params.id;
    const newTask = await Task.findById(id);
    newTask.name = req.body.name;
    newTask.user = req.body.uesr;
    newTask.project = req.body.project;
    newTask.category = req.body.category;
    newTask.description = req.body.description;
    newTask.closed = req.body.closed;

    await newTask.save();
    res.json({result: "success"});
});

router.delete('/:id', async(req, res) => {
    await Task.remove({
        _id: req.params.id
    });
    res.json({
        result: "success"
    });
});

export default router;
