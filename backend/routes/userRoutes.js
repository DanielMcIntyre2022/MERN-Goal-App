const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getUser 
} = require('../controllers/userControllers');
const {protect} = require('../middleware/authMiddleware');

router.post('/', registerUser);
router.post('/login', loginUser);
router.get('/users', protect, getUser);

module.exports = router;