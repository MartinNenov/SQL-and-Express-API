const express = require('express');

const groceryController = require('../controller/grocery');

const router = express.Router();

router.get('/',groceryController.getAllGroceries)


module.exports = router;


