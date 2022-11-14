const express = require('express');
const router = express.Router();
const {getGoals, addGoals, deleteGoals
} = require('../controllers/goalControllers');
const { protect } = require('../middleware/authMiddleware');

router.get('/', protect, getGoals);
router.post('/', protect, addGoals);
router.delete('/:id', protect, deleteGoals);

module.exports = router;