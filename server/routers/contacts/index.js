const express = require('express');
const router = express.Router();
const Controllers = require('./controllers');

router.get('/search', Controllers.search);

module.exports = router;
