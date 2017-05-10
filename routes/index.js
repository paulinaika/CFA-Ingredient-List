var express = require('express');
var router = express.Router();

const Ingredient = require('../models/Ingredients.js');
const ingredientController = require('../controller/ingredientcontroller');

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

router.post('/', (req, res) => {
  // console.log('reqy.body is:', req.body);
  const name = req.body.ingredient_name;
  let ingredient = new Ingredient();
  ingredient.name = name;
  ingredient.save()
    .then(() => {
      res.redirect('/')
  })
})

router.get('/ingredients/:id/edit', (req, res) =>{
  // console.log('reqy.body is:', req.body);
  Ingredient.findOne({ _id: req.params.id })
    .then(ingredient => {
      res.render('editIngredient', {ingredient: ingredient});
    })
  // res.send(req.params)
})

router.post('/ingredients/:id/edit', (req, res) => {
  Ingredient.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true //returns new ingredient
  })
    .then(ingredient => {
      res.redirect('/')
  })
})

module.exports = router;
