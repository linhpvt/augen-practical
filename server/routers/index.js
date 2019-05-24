const express = require('express');
const router = express.Router();

const Contacts = require('./contacts');

// routes group, all RESTFull API  Paths relating to contact will be prefixed with `/contact`
router.use('/contact', Contacts);

module.exports = () => router;
