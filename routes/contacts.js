const express = require('express');
const router = express.Router();


// middleware


// controllers
const {addNewContact} = require('../controllers/contacts');



router.post("/contacts/new", addNewContact);


module.exports = router;

