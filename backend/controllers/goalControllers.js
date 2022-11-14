
const getGoals = (req, res) => {
    res.json({
        message: 'Get Goals'
    })
};

const addGoals = (req, res) => {
    res.json({
        message: 'Goals Added'
    })
};

const deleteGoals = (req, res) => {
    res.json({
        message:`Delete goal ${req.params.id}`
    })
}


module.exports = {
    getGoals,
    addGoals, 
    deleteGoals
}