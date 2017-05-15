var express = require('express');
var router = express.Router();

const Ingredient = require('../models/Ingredients.js');
const ingredientController = require('../controllers/ingredientcontroller.js');

/* GET home page. */

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

router.get('/', ingredientController.getIngredients);
router.get('/api', ingredientController.getIngredientsApi);

router.post('/', ingredientController.postIngredients);
router.post('/api', ingredientController.postIngredientsApi);

router.get('/ingredients/:id/edit', ingredientController.editIngredients);
router.get('/api/:id/edit', ingredientController.editIngredientsApi);

router.post('/ingredients/:id/edit', ingredientController.updateIngredients);
router.post('/api/:id/edit', ingredientController.updateIngredientsApi);

router.post('/ingredients/:id/delete', ingredientController.deleteIngredients);
router.delete('/api/:id/delete', ingredientController.deleteIngredientsApi);






module.exports = router;
