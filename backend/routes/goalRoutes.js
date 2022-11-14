const express = require('express');
const router = express.Router();
const {getGoals, addGoals, deleteGoals} = require('../controllers/goalControllers');

router.get('/', getGoals);
router.post('/', addGoals);
router.delete('/:id', deleteGoals);

module.exports = router;