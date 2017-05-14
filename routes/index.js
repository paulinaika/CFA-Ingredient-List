var express = require('express');
var router = express.Router();

const Ingredient = require('../models/Ingredients.js');
const ingredientController = require('../controllers/ingredientController.js');

/* GET home page. */
router.get('/', ingredientController.getIngredients);

// this section is refactored into ingredientcontroller.js
// function(req, res, next) {
//   Ingredient.find()
//   .then(ingredients => {
//     res.render('index', {
//       title: 'Ingredients',
//       ingredients: ingredients
//     })
//   })
// });

router.post('/', ingredientController.postIngredients);

router.get('/ingredients/:id/edit', ingredientController.editIngredients);

router.post('/ingredients/:id/edit', ingredientController.updateIngredients);

router.get('/ingredients/:id/delete', ingredientController.deleteIngredients);

router.get('/api', ingredientController.getIngredientsApi);

router.post('/api', ingredientController.postIngredientsApi);

router.post('/api/:id', ingredientController.editIngredientsApi);

router.post('/api/:id/edit', ingredientController.updateIngredientsApi);

router.delete('/api/:id/delete', ingredientController.deleteIngredientsApi);

module.exports = router;
