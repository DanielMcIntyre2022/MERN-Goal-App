
const registerUser = (req, res) => {
    res.json({
        message: 'user registered'
    })
};

const loginUser = (req, res) => {
    res.json({
        mesage: 'login user'
    })
};

const getUser = (req, res) => {
    res.json({
        message: 'user data found'
    })
};

module.exports = {
    registerUser,
    loginUser,
    getUser
}