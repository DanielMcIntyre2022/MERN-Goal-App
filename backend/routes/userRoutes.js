const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getUser 
} = require('../controllers/userControllers');

router.post('/', registerUser);
router.post('/login', loginUser);
router.get('/users', getUser);

module.exports = router;