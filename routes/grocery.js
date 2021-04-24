const express = require('express');

const groceryController = require('../controller/grocery');

const router = express.Router();

router.get('/',groceryController.getAllGroceries);

router.post('/',groceryController.postGrocery);

router.patch('/',groceryController.patchGrocery);

router.delete('/:id',groceryController.deleteGrocery);


module.exports = router;


