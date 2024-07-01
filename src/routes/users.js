// src/routes/users.js
const express = require('express');
const { check, validationResult } = require('express-validator');
const router = express.Router();
const { register, login } = require('../controllers/users');

router.post('/register', [
  check('fullName', 'Full name is required').not().isEmpty(),
  check('dob', 'Please include a valid date of birth').isDate(),
  check('email', 'Please include a valid email').isEmail(),
  check('phone', 'Phone number is required').not().isEmpty(),
  check('password', 'Password must be 6 or more characters').isLength({ min: 6 })
], register);

router.post('/login', [
  check('email', 'Please include a valid email').isEmail(),
  check('password', 'Password is required').exists()
], login);

module.exports = router;
