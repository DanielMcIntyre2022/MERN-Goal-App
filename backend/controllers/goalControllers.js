const asyncHandler = require('express-async-handler');

const Goal = require('../models/goalModels');

const getGoals = asyncHandler(async(req, res) => {
    const goals = await Goal.find({
    })   
    res.json({goals})
});

const addGoals = asyncHandler(async(req, res) => {

    const goal = await Goal.create({
        text: req.body.text
    })

    if(!req.body.text) {
        res.status(400)
    throw new Error('Please add a text feild')
    }

    res.json({
        goal
    })
});

const deleteGoals = asyncHandler(async(req, res) => {

    const goal = await Goal.findById(req.params.id)

    if(!goal) {
        res.status(400)
        throw Error('Goal not found')
    }

    await Goal.deleteOne(goal)

    res.json({ id: req.params })

    res.json({
        message:`Delete goal ${req.params.id}`
    })
});


module.exports = {
    getGoals,
    addGoals, 
    deleteGoals
}