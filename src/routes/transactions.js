// src/routes/transactions.js
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { createTransaction } = require('../controllers/transactions');

router.post('/', auth, createTransaction);

module.exports = router;
