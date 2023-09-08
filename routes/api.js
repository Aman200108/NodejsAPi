// routes/api.js
const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');

// GET /api/v1/greet
router.get('/greet', apiController.getGreet);

// POST /api/v1/product/new
router.post('/product/new', apiController.createProduct);

module.exports = router;
