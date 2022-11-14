const asyncHandler = require('express-async-handler');

const Goal = require('../models/goalModels');
const User = require('../models/userModels');

const getGoals = asyncHandler(async(req, res) => {
    const goals = await Goal.find({
        user: req.user.id
    })   
    res.json({goals})
});

const addGoals = asyncHandler(async(req, res) => {

    const goal = await Goal.create({
        text: req.body.text, 
        user: req.user.id
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

    const user = await User.findById(req.user.id)

    // Check for User //

    if(!user) {
        res.status(401)
        throw new Error('User not found')
    }

    // Make sure logged in user is goal user //

    if(goal.user.toString() !== User.id) {
        res.status(401)
        throw new Error('User not authortized') 
    }

    await Goal.deleteOne(goal)

    res.json({ id: req.params })

});


module.exports = {
    getGoals,
    addGoals, 
    deleteGoals
}