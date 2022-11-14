const asyncHandler = require('express-async-handler');

const getGoals = asyncHandler(async(req, res) => {
    res.json({
        message: 'Get Goals'
    })
});

const addGoals = asyncHandler(async(req, res) => {
    if(!req.body.text) {
        res.status(400)
    throw new Error('Please add a text feild')
    }

    res.json({
        message: 'Goals Added'
    })
});

const deleteGoals = asyncHandler(async(req, res) => {
    res.json({
        message:`Delete goal ${req.params.id}`
    })
});


module.exports = {
    getGoals,
    addGoals, 
    deleteGoals
}